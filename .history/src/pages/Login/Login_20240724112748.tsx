import { useState } from 'react'
import { LoginForm } from '../../components/form/LoginForm'

function Login() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="h-14 bg-gradient-to-r from-cyan-500 to-blue-500">
            <div className="text-xl">
            <LoginForm>
            </div>
            
        </div>
    </>
  )
}

export default Login