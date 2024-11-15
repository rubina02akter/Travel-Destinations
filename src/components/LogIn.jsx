
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const LogIn = () => {
  const navigate = useNavigate()
  const {signInUser} = useContext(AuthContext);

  const handleLogIn = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email,password)
    //signin with user 
    signInUser(email,password)
    .then(result => {
      console.log(result.user)
      e.target.reset();
      navigate('/')
    })
    .catch(error => {
      console.log('ERROR',error.message)
    })

  }
  return (
     <div className="card w-full max-w-lg shrink-0 mx-auto border-black border  rounded-none">
        <h2 className="font-semibold text-2xl mt-12 ml-8 text-blue-700">Log in here</h2>
        <form onSubmit={handleLogIn} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input border-b-black rounded-none"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input  border-b-black rounded-none"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="text-center font-semibold text-lg mb-6">
          New to this website? Please <Link to='/register' className="underline text-blue-800">Register</Link>
        </p>
        <div className="flex justify-center items-center mb-4 ">
          <button className="btn btn-outline rounded-none">Google</button>
        </div>
      </div>

  );
};

export default LogIn;
