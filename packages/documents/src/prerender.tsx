import fs from 'node:fs'
import path from 'node:path'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { Writable } from 'node:stream'
import { fileURLToPath } from 'node:url'
import { Route, Routes } from 'react-router-dom'
import { StaticRouter } from 'react-router-dom/server'
import { HelmetProvider, FilledContext } from 'react-helmet-async'
import App from './App'
import DocsApp from './DocsApp'

const extraUrls: string[] = []

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const CLIENT_ROOT_DIR = path.resolve(__dirname, '../client')
const template = fs
  .readFileSync(path.resolve(CLIENT_ROOT_DIR, 'index.html'))
  .toString()

const renderToString = async (element: React.ReactElement) => {
  return new Promise<string>((resolve, reject) => {
    const { pipe } = ReactDOMServer.renderToPipeableStream(element)
    const readAsString = (chunk: any) => {
      if (Buffer.isBuffer(chunk)) {
        return chunk.toString()
      } else if (typeof chunk === 'string') {
        return chunk
      }
      return null
    }

    const data: string[] = []
    const stream = new Writable({
      write(chunk, _, callback) {
        const value = readAsString(chunk)
        if (value === null) {
          callback(new Error('Unable to process the chunk'))
        } else {
          data.push(value)
          callback()
        }
      },
      writev(chunks, callback) {
        for (let i = 0; i < chunks.length; i += 1) {
          const { chunk } = chunks[i]
          const value = readAsString(chunk)
          if (value === null) {
            callback(new Error('Unable to process the chunk'))
            return
          } else {
            data.push(value)
          }
        }
        callback()
      },
      final(callback) {
        resolve(data.join(''))
        callback()
      }
    })

    stream.on('error', reject)

    pipe(stream)
  })
}

const getAllUrls = async () => {
  const ssgContext: { urls?: string[] } = {}

  await renderToString(
    <HelmetProvider>
      <StaticRouter location={'/'}>
        <Routes>
          <Route path="/" element={<DocsApp ssgContext={ssgContext} />} />
        </Routes>
      </StaticRouter>
    </HelmetProvider>
  )

  return [...(ssgContext.urls || []), ...extraUrls]
}

const renderUrl = async (url: string) => {
  const context = {}
  const content = await renderToString(
    <HelmetProvider context={context}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  )

  let result = template

  const { helmet } = context as FilledContext

  if (helmet) {
    const htmlAttrs = helmet.htmlAttributes.toString()

    if (htmlAttrs) {
      result = result.replace('<html', `<html ${htmlAttrs}`)
    }

    if (helmet.title.toString()) {
      result = result.replace(/<title>.*?<\/title>/, helmet.title.toString())
    }

    const headTags: string[] = []

    if (helmet.link.toString()) {
      headTags.push(helmet.link.toString())
    }

    if (helmet.priority.toString()) {
      headTags.push(helmet.priority.toString())
    }

    if (helmet.meta.toString()) {
      headTags.push(helmet.meta.toString())
    }

    const headTagsText = headTags.join('\n    ')

    if (headTagsText) {
      result = result.replace('</head>', `  ${headTagsText}\n  </head>`)
    }
  }

  result = result.replace(
    `<div id="root"></div>`,
    `<div id="root">${content}</div>`
  )

  const urlDir = path.resolve(CLIENT_ROOT_DIR, `./${url}`)
  const filename = path.resolve(urlDir, 'index.html')

  fs.mkdirSync(urlDir, { recursive: true })
  fs.writeFileSync(filename, result)

  let relativePath = url

  if (!url.endsWith('/')) {
    relativePath += '/'
  }

  relativePath += 'index.html'

  console.log(`Created ${relativePath}`)
}

const generate = async () => {
  const urls = await getAllUrls()

  let index = 0
  let errorCount = 0

  const renderNext = async () => {
    if (index < urls.length) {
      const url = urls[index]

      index += 1

      if (url) {
        try {
          await renderUrl(url)
        } catch (err) {
          console.error(`Failed to render the url "${url}"`)
          console.error(err)
          errorCount += 1
        }
      }

      await renderNext()
    }
  }

  console.log() // print a blank line

  await renderNext()

  console.log(`Finished (total: ${urls.length}, error: ${errorCount}).`)
}

generate()
