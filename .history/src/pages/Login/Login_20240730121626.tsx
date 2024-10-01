import { LoginForm } from '../../components/form/LoginForm'

function Login() {
  return (
    <>
      <div style={{backgroundColor: "url(././assets/log-in-window.jpg)"}}>
        <div className="p-10 bg-cyan-500 max-w-md border rounded-xl">
          <LoginForm/>
        </div>
      </div>
    </>
  )
}

export default Login