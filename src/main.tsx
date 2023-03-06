import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { routes } from './router'
import 'antd/dist/reset.css'
import '@/styles/global.css'
import { ConfigProvider } from 'antd'
import '@/assets/icons/iconfont'
import React from 'react'

import '@/mocks/index'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#056de8',
      },
    }}
  >
    <RouterProvider router={routes} />
  </ConfigProvider>
)
