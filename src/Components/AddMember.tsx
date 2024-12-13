import React,  { useState,} from 'react';
import '../App.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface FormData {
    name: string;
    email: string;
    phone: string;
    plan: string;
  }

const AddMember: React.FC = () => {

 const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    plan: '', 
  });

  const navigate = useNavigate()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios.post("https://6703c042ab8a8f8927317ace.mockapi.io/gym-managment", {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        plan: formData.plan

    }).then(()=>{navigate('/')})
    
    
  };

    return (
        <>
        <div className="bg-member">
            <div className="container">

                <div className="row">
                    <div className="col">

                        
                        <form onSubmit={handleSubmit} className='w-50 card border-0 bg-transparent'>
                        <h2 className='text-white'>Add Members</h2>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label text-white">Name</label>
                                <input
                                    type="text"
                                    className="form-control bg-transparent shadow-none text-white"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label text-white">Email</label>
                                <input
                                    type="email"
                                    className="form-control bg-transparent shadow-none text-white"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label text-white">Phone Number</label>
                                <input
                                    type="tel"
                                    className="form-control bg-transparent shadow-none text-white"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                    
                                    placeholder="Enter phone number"
                                />
                            </div>


                            <div className="mb-3">
                                <label htmlFor="plan" className="form-label text-white">Select Plan</label>
                                <select
                                    className="form-select bg-transparent shadow-none text-white"
                                    id="plan"
                                    name="plan"
                                    value={formData.plan}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="Standard" className='bg-transparent'>Standard</option>
                                    <option value="Premium" className='bg-transparent'>Premium</option>
                                    <option value="Basic" className='bg-transparent'>Basic</option>
                                </select>
                            </div>

                            <button type="submit" className="btn btn-outline-light">ADD Member</button>
                        </form>

                    </div>
                   
                </div>
            </div>
            </div>


        </>
    )
}

export default AddMember
