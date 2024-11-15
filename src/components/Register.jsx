import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const navigate = useNavigate();
  const {createUser,signInWithGoogle} = useContext(AuthContext);

  const handleRegister = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name,email,password)
    //create user
    createUser(email,password)
    .then(result => {
      console.log(result.user)
      e.target.reset()
      navigate('/')
    })
    .catch(error => {
      console.log('ERROR',error.message)
    })

  }

  const handleGoogleSignIn = () => {
    signInWithGoogle()
    .then(result => {
      console.log(result.user)
      navigate('/')
    })
    .catch(error => {
      console.log('ERROR',error.message)
    })

  }

  return (
    <div className="card bg-base-100 w-full max-w-lg shrink-0 mx-auto border-black border  rounded-none mb-12">
      <h2 className="font-semibold text-2xl mt-12 ml-8 text-blue-700">
        Create an account
      </h2>
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="email"
            className="input border-b-black rounded-none"
            required
          />
        </div>
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
            className="input border-b-black rounded-none"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">create an account</button>
        </div>
      </form>
      <p className="mb-6 text-center text-lg font-semibold" >Already have an acoount? <Link className="underline text-blue-800" to='/login'>Log in</Link></p>
      <div className="flex justify-center items-center mb-4 ">
          <button onClick={handleGoogleSignIn} className="btn btn-outline rounded-none">Google</button>
        </div>
    </div>
  );
};

export default Register;
