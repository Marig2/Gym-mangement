import React, {useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import '../App.css';

interface IState{
name:string,
email:string,
password:string
}

const Register: React.FC = () => {

    const [input, setInput] = useState<IState>({
        name:"",
        email:"",
        password:""
    });
    const navigate = useNavigate()

    const handleSubmit=(event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        localStorage.setItem("user", JSON.stringify(input))
        navigate("/login")
    }

    return (
        <>
            <div className="container-fluid bg-login">
                <div className="row d-flex justify-content-center align-items-center vh-100">
                    <div className="col d-flex justify-content-center">

                        <form className='card h-25 border-0  bg-transparent text-white p-5 rounded-3' onSubmit={handleSubmit}>
                        <h1 className='text-white text-center pb-3'> Sign Up</h1>

                        <div className="mb-3">
                                <label htmlFor="exampleInputName1" className="form-label pb-0">Full Name</label>
                                <input type="text" className="form-control text-white shadow-none border-0 border-bottom bg-transparent rounded-0 pt-0" name='name' value={input.name} onChange={ (e)=>setInput({...input, [e.target.name]: e.target.value}) } id="exampleInputName1" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label pb-0">Email</label>
                                <input type="email" className="form-control text-white shadow-none border-0 border-bottom bg-transparent rounded-0 pt-0" name='email' value={input.email} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={ (e)=>setInput({...input, [e.target.name]: e.target.value}) } />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label pb-0">Password</label>
                                <input type="password" className="form-control text-white shadow-none border-0 border-bottom bg-transparent rounded-0 pt-0" name='password' value={input.password} id="exampleInputPassword1" onChange={ (e)=>setInput({...input, [e.target.name]: e.target.value}) } />
                            </div>                            
                            <button type="submit" className="btn btn-dark d-grid">Register</button>
                            <p className="mt-3 ">you have already an account <Link to={"/login"} className='text-white fw-semibold'> Sign Up </Link></p>
                        </form>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Register
