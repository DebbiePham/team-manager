import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Main from './views/Main';
import Dashboard from './views/Dashboard';
import CreateForm from './views/CreateForm';
import PlayerStatus from './views/PlayerStatus';


function App() {
  return (
    <div className="App">
      <nav className='navbar navbar-expand-lg bg-body-tertiary m-5'>
        <div className="container-fluid">
          <h1><Link to='/' className='text-none'>Team Manager</Link></h1>
          <div>
            <Link to='/players/list' className='m-5 fs-2'>Manager Players</Link>
            <Link to='/status/game/1' className='m-3 fs-2'>Manage Player Status</Link>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/players/list' element={<Dashboard/>} />
        <Route path='/players/addplayer' element={<CreateForm/>} />
        <Route path='/status/game/:num' element={<PlayerStatus/>} />
      </Routes>
    </div>
  );
}

export default App;
