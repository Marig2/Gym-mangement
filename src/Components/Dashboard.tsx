import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import '../App.css';
import axios from 'axios';

interface ApiData {
  id: number
  name: string
  email: string
  phone: string
  plan: string
}

const Dashboard: React.FC = () => {

  const [apiData, setApiData] = useState<ApiData[]>([])




  function getData() {
    axios.get("https://6703c042ab8a8f8927317ace.mockapi.io/gym-managment").then((resp) => { setApiData(resp.data) }).catch((error) => { console.error(error) })
  }
  useEffect(() => {
    getData();
  }, []);

  function handleDelete(id:number) {
  axios.delete(`https://6703c042ab8a8f8927317ace.mockapi.io/gym-managment/${id}`).then(()=>{
    getData()
  })
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row flex-nowrap">

          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-theme">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <Link to={"/"} className="d-flex align-items-center pb-3 pt-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <span className="fs-5 d-none d-sm-inline text-white fs-2 fw-semibold">Fitness Club</span>
              </Link>
              <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                <li className="nav-item">
                  <Link to={"/"} className="nav-link align-middle px-0">
                    <span className="ms-1 d-none d-sm-inline text-white">Dashboard</span>
                  </Link>
                </li>
                <li>
                  <Link to={"/addMember"} className="nav-link px-0 align-middle">
                    <i className="fs-4 bi-table" /> <span className="ms-1 d-none d-sm-inline text-white">Add member</span></Link>
                </li>

              </ul>

              <Link className="text-white pb-2 text-decoration-none" to={"/login"}>Sign out</Link>
            </div>
          </div>

          {/* main body */}

          <div className="col bg-content">
            <div className="container bootstrap snippets bootdey">

              <div className="row">
                  <h2 className='pt-3'>Dashboard</h2>
                <div className="col-sm-6 mt-3">
                  <div className="card bg-primary-subtle ">
                    <div className="card-body text-center">
                      <h4 className="card-title">Total <span className='d-block'> Memebers</span> </h4>
                      <h5 className="card-subtitle mb-2 text-body-secondary">{apiData.length}</h5>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 mt-3">
                  <div className="card bg-primary-subtle">
                    <div className="card-body text-center">
                      <h4 className="card-title">Total <span className='d-block'> Payment</span></h4>
                      <h5 className="card-subtitle mb-2 text-body-secondary">$5000</h5>
                    </div>
                  </div>
                </div>


                <div className="row mt-5">
                  <div className="col">
                    <div className='d-flex justify-content-between'>
                      <h4>Add Members</h4>
                      <Link to={"/addmember"} className='btn btn-primary'>Add Members</Link> 
                    </div>
                    <hr />
                    <table className="table table-primary">
                      <thead>
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col">Name</th>
                          <th scope="col">Email</th>
                          <th scope="col">Contact No.</th>
                          <th scope="col">Plan</th>
                          <th scope="col">Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          apiData.map((item) => {
                            return (
                              <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td>{item.plan}</td>
                                <td><button className='btn btn-danger' onClick={()=> {if(window.confirm("sure to delete data")) {handleDelete(item.id)} } }>
                                  Delete
                                  </button></td>
                              </tr>
                            )
                          })
                        }
                      </tbody>
                    </table>

                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Dashboard
