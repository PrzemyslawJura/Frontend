import { LoginForm } from '../../components/form/LoginForm'

function Login() {
  return (
    <>
      <div className='bg-slate-900'>
        <div className="p-10 bg-cyan-500 max-w-md border rounded-l">
          <LoginForm/>
        </div>
      </div>
    </>
  )
}

export default Login