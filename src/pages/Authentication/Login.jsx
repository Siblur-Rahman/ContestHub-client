import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import toast from 'react-hot-toast'
import useAuth from '../../hooks/useAuth'
import SocialLogin from '../../componets/SocialLogin'
const Login = () => {
  const navigate = useNavigate()
  const { signIn} = useAuth();



  // Email Password Signin
  const handleSignIn = async e => {
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const pass = form.password.value
    console.log({ email, pass })
    try {
      //User Login
      const result = await signIn(email, pass)
      console.log(result)
      toast.success('SLogin Successful')
      navigate('/')
    } catch (err) {
      console.log(err)
      toast.error(err?.message)
    }
  }

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h2 className='text-center'>Login Now!</h2>
            <SocialLogin/>
            <form className="card-body" onSubmit={handleSignIn}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type='submit' className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
      </div>
    </>
    //
  )
}

export default Login
