import { LoginForm } from '../../components/form/LoginForm'
import image from '../../assets/log_in_window.jpg'

function Login() {
  return (
    <>
      <div className="h-screen w-screen">
        <div className="flex items-center justify-center h-screen bg-center bg-cover" style={{backgroundImage: `url(${image})`}}>
          <div className="p-10 bg-slate-100 border-2 rounded-xl border-slate-600 w-96">
            <LoginForm/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login