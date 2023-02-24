import '@remarkable-docs/ui/styles.css'
import './index.less'
import React, { useCallback } from 'react'
import { DocsUi } from '@remarkable-docs/ui'
import { useLocation, useNavigate } from 'react-router-dom'
import type { DocsUiSsgContextObject } from '@remarkable-docs/ui'

const DocsProvider = React.lazy(() => import('./.generated-docs'))

export interface DocsAppProps {
  ssgContext?: DocsUiSsgContextObject
}

export default function DocsApp({ ssgContext }: DocsAppProps) {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const handleUrlChange = useCallback(
    (target: string) => navigate(target),
    [navigate]
  )

  return (
    <React.Suspense>
      <DocsUi
        docsProvider={DocsProvider}
        currentUrl={pathname}
        handleUrlChange={handleUrlChange}
        ssgContext={ssgContext}
      />
    </React.Suspense>
  )
}
