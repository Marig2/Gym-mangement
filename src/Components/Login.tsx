import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom'
import '../App.css';

interface IState{
    email:string,
    password:string
}
const Login: React.FC = () => {
    const [input, setInput] = useState<IState>({
        email:"",
        password:""
    });

    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
       const loggedUser = JSON.parse(localStorage.getItem("user") || "{}")
        if(input.email===loggedUser .email && input.password === loggedUser .password){
            window.localStorage.setItem("loggedIn", "true")
            navigate("/");
        }else{
            alert("Invalid Input Data")
        }
           
    };
    return (
        <>
            <div className="container-fluid bg-login">
                <div className="row d-flex justify-content-center align-items-center vh-100">
                    <div className="col d-flex justify-content-center">
                        <form className='card border-0  bg-transparent text-white p-5 rounded-3' onSubmit={handleSubmit}>
                        <h1 className='text-white text-center pb-3'> Sign In</h1>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label pb-0">Email</label>
                                <input type="email" className="form-control text-white shadow-none border-0 border-bottom bg-transparent rounded-0 pt-0" name='email' value={input.email} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={ (e)=>setInput({...input, [e.target.name]: e.target.value}) }  />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label pb-0">Password</label>
                                <input type="password" className="form-control text-white shadow-none border-0 border-bottom bg-transparent rounded-0 pt-0" name='password' value={input.password}  id="exampleInputPassword1"  onChange={ (e)=>setInput({...input, [e.target.name]: e.target.value}) }  />
                            </div>
                            <div className="mb-4 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Remember Password</label>
                            </div>
                            <button type="submit" className="btn btn-dark d-grid">Login</button>
                            <p className="mt-3">Don't have an account? <Link to={"/register"}className='text-white fw-semibold'>  Sign Up </Link></p>
                        </form>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
