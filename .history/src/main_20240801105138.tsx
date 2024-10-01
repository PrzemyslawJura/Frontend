import React from 'react'
import ReactDOM from 'react-dom/client'
import './output.css'
import Workers from './pages/Workers/Workers'
import Login from './pages/Login/Login'
{/*import Login from './pages/Login/Login'*/}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Login></Login>
    {/*<Workers/>*/}
  </React.StrictMode>,
)
