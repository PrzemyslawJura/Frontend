import { LoginForm } from '../../components/form/LoginForm'
import image from '../../assets/log-in-window.jpg'

function Login() {
  return (
    <>
    <div className="h-screen w-screen">
      <div className="h-screen w-screen bg-no-repeat bg-center bg-contain" style={{backgroundImage: `url(${image})`}}>
        <div className="p-10 bg-cyan-500 max-w-md border rounded-xl">
          <LoginForm/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login