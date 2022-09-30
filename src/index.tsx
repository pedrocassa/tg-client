import React from 'react'
import ReactDOM from 'react-dom/client'
import * as serviceWorkerRegistration from 'serviceWorkerRegistration'
import { AppRouter } from 'routes/app-routes'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles, theme } from 'styles'
import { Provider } from 'react-redux'
import { store } from './store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AppRouter />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
)

serviceWorkerRegistration.register()
