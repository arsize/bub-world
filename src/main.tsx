import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { routes } from './router'
import 'antd/dist/reset.css'
import '@/styles/init.css'
import { ConfigProvider } from 'antd'

import '@/mocks/index'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#00b96b',
      },
    }}
  >
    <RouterProvider router={routes} />
  </ConfigProvider>
)
