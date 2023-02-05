import '@remarkable-docs/ui/styles.css'
import 'example-lib/styles.css'
import React, { useCallback } from 'react'
import { DocsUi } from '@remarkable-docs/ui'
import { useLocation, useNavigate } from 'react-router-dom'
import { DocObject } from '@remarkable-docs/core'

const DocsProvider = React.lazy(() => import('./.generated'))

export interface DocsAppProps {}

const DocsApp: React.FC<DocsAppProps> = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const onUrlChange = useCallback(
    (target: string) => {
      navigate(target)
    },
    [navigate]
  )

  const formatDocUrl = useCallback((doc: DocObject) => {
    const route = doc.settings.url
      ? doc.settings.url
      : doc.path.replace(/^\.\//, '/').replace(/\.md$/, '').replace(/\./g, '_')
    return '/docs/' + route.replace(/^\/+/, '')
  }, [])

  const formatPreviewUrl = useCallback(
    (doc: DocObject, name: string) => {
      return `${formatDocUrl(doc)}/preview/${name}`
    },
    [formatDocUrl]
  )

  return (
    <React.Suspense>
      <DocsUi
        docsProvider={DocsProvider}
        currentUrl={pathname}
        onUrlChange={onUrlChange}
        formatDocUrl={formatDocUrl}
        formatPreviewUrl={formatPreviewUrl}
      />
    </React.Suspense>
  )
}

export default DocsApp
