import '@remarkable-docs/ui/styles.css'
import '@remarkable-docs/example-ui/styles.css'
import './index.less'

import React from 'react'
import { DocsUi } from '@remarkable-docs/ui'
import { useLocation, useNavigate } from 'react-router-dom'
import type { DocsUiSsgContextObject } from '@remarkable-docs/ui'

const DocsProvider = React.lazy(() => import('./.docs-generated'))

export default function DocsApp({ ssgContext }: {
  ssgContext?: DocsUiSsgContextObject
}) {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (
    <React.Suspense>
      <DocsUi
        docsProvider={DocsProvider}
        currentUrl={pathname}
        handleUrlChange={navigate}
        ssgContext={ssgContext}
      />
    </React.Suspense>
  )
}
