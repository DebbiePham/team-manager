import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate, NavLink } from "react-router-dom";

const CreateForm = () => {
    //keep track of what is being typed via useState hook
    const [name, setName] = useState(""); 
    const [position, setPosition] = useState(""); 
    const [status, setStatus] = useState('Undecided')
    const navigate = useNavigate();
    const [error, setError] = useState()
    

    //handler when the form is submitted
    const onSubmitHandler = e => {

        //prevent default behavior of the submit
        e.preventDefault();

        //make a post request to create a new product
        axios.post('http://localhost:8000/api/players', { name, position, status })
            .then(res=> {
                console.log(res)
                setName('')
                setPosition('')
                setStatus('Undecided')
                navigate('/players/list');
            })
            .catch((err) => {
                const errorResponse = err.response.data.errors;
                console.log(errorResponse.name.message);
                setError(errorResponse.name.message);
            });
    };
    return (
        <div class="container border border-white w-75 mx-auto p-5">
            <h3 className='m-5'>
                <NavLink to='/players/list' className='m-2'>List</NavLink>
                |
                <NavLink to='/players/addplayer' className='m-2'>Add Player</NavLink>
            </h3>
            <div class="card shadow p-4 border border-white">
            <div className='card-header'>
                    <h1>Add Player</h1>
                </div>
                <div className="card-body text-center">
                    <form onSubmit={onSubmitHandler}>
                        <p className='d-flex gap-3'>
                            <label htmlFor='name' className='fw-bold'>Player Name: </label><br/>
                            <input className='bg-light text-dark' id='name' type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
                            {error && <p className='text-danger'>{error}</p>}
                        </p>
                        <p className='d-flex gap-3'>
                            <label htmlFor='position' className='fw-bold'>Preferred Position: </label><br/>
                            <input className='bg-light text-dark' id='position' type="text" onChange={(e)=>setPosition(e.target.value)} value={position}/>
                        </p>
                        <div className=' text-start'>
                            <button className='btn btn-success m-3'>Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateForm;