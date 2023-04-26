import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '/app.css'
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
  <Auth0Provider
    domain="dev-g7b2flw55pr3kj6r.us.auth0.com"
    clientId='QZAdaY2ehZRGShoW2C7gjGZUeeiAWZxs'
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
  </React.StrictMode>,
);
