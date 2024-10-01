import { LoginForm } from '../../components/form/LoginForm'

function Login() {

  return (
    <>
        <div className="h-14 bg-gradient-to-r from-cyan-500 to-blue-300">
            <div className="m-auto">
                <LoginForm/>
            </div>
        </div>
    </>
  )
}

export default Login