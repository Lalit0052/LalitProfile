import React from 'react'
import pic from "../1615346572611.jpg"
import "../component/style.css"
import github from "../component/download.png"
import pic4 from "../component/download (1).png"
import pic1 from "../component/download (2).png"
import pic2 from "../component/download (3).png"
import pic3 from "../component/download.jpeg"

export default function App() {
    return (
        <>
            <div className="container all">
                <h1 className='heading fs-1 '> PROFILE SUMMARY</h1>
                <div className="row">
                    <div className="col-lg-4 col-12 top">
                        <img className='img mt-1' src={pic} alt="" />
                        <h1 className='heading fs-2'>LALIT SHARMA </h1>
                        <h1 className='heading fs-4'>MERN Full Stack Developer </h1>
                        <h1 className='heading fs-4'>Greater Noida india</h1>
                    </div>
                    <div className="col-lg-6 ms-2  col-12 top">
                        <div className="table table-responsive mt-1">
                            <table className=' table table-striped '>
                                <tbody>
                                    <tr>
                                        <th>Full Name</th>
                                        <td>Lalit Sharma</td>
                                    </tr>
                                    <tr>
                                        <th>Contact No</th>
                                        <td>9315666955,9540948021</td>
                                    </tr>
                                    <tr>
                                        <th>Email ID</th>
                                        <td>panditlalitvats@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <th>Programming Language</th>
                                        <td>HTML/CSS,Javascript,Reactjs,Nodejs,Expressjs</td>
                                    </tr>
                                    <tr>
                                        <th>Full Address</th>
                                        <td>New Haibatpur Sector 4 Gretare Noida Utter Pradesh(201009)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-lg-4 mt-2 col-12 top">
                        <ul className="list-group">
                            <li className="list-group-item "><h5 className='text-center'>Social Media</h5><a className='btn' href="https://in.linkedin.com/in/lalit-sharma-6580b926a"><img src={pic4} width="39px" alt="" />LinkedIn</a></li>
                            <li className="list-group-item"><a className='btn' href="https://github.com/Lalit0052"><img src={github} width="35px" alt="" />GitHub</a></li>
                            <li className="list-group-item"><a className='btn' href="https://twitter.com/lalitvts"><img src={pic1} width="35px" alt="" />Twitter(X)</a></li>
                            <li className="list-group-item"><a className='btn' href="https://www.instagram.com/lalit0052/"><img src={pic3} width="32px" alt="" />Instagram</a></li>
                            <li className="list-group-item"><a className='btn' href="https://www.facebook.com/lalit0052/"><img src={pic2} width="35px" alt="" />Facebook</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-6 mt-2 col-12 ">
                        <div className="row">
                            <div className="col-lg-8 col-12 assign ">
                                
                            <ul className="top">
                            <li className="list-group-item "><h5 className='text-center'>Assignment Project Status</h5>Web Design <hr className='first' /></li>
                            <li className="list-group-item">Website Markup <hr className='first1' /></li>
                            <li className="list-group-item">One Page <hr className='first2' /></li>
                            <li className="list-group-item">Responsive <hr className='first3' /></li>
                            <li className="list-group-item">BackendApi <hr className='first4' /></li>
                            <br />
                        </ul>
                            </div>
                            <div className="col-lg-4 col-12 top mb-2">
                            <ul className="list-group w-100">
                            <li className="list-group-item "><h5 className='text-center'>Assignment Link</h5><a className='btn p-2 bg-dark w-100 text-light' href="https://e-vehiclevts.netlify.app/">E-Vehicle</a></li>
                            <li className="list-group-item"><a className='btn p-2 bg-dark w-100 text-light' href="https://vtsfashion.onrender.com/">FashionMart</a></li>
                            <li className="list-group-item"><a className='btn p-2 bg-dark w-100 text-light' href="https://assignmentvts.netlify.app/">Assignment</a></li>
                            <li className="list-group-item"><a className='btn p-2 bg-dark w-100 text-light' href="https://tictactoe-615k.onrender.com/">TicTacToe</a></li>
                            <li className="list-group-item"><a className='btn p-2 bg-dark w-100 text-light' href="https://vtsevent.onrender.com/">Eventplanner</a></li>
                        </ul>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            )
}
