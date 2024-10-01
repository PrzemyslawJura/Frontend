import { LoginForm } from '../../components/form/LoginForm'
import image from '../../assets/log-in-window.jpg'

function Login() {
  return (
    <>
      <div style={{backgroundImage: `url(${image})`}}>
        <div className="p-10 bg-cyan-500 max-w-md border rounded-xl">
          <LoginForm/>
        </div>
      </div>
    </>
  )
}

export default Login