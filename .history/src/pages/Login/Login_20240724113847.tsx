import { LoginForm } from '../../components/form/LoginForm'

function Login() {

  return (
    <>
        <div className="h-14 bg-gradient-to-r from-cyan-500 to-blue-300">
            <div className="p-20 bg-slate-600 border">
                <LoginForm/>
            </div>
        </div>
    </>
  )
}

export default Login