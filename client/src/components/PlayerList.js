import { NavLink } from 'react-router-dom';
import React from 'react';

const PlayerList = (props) => {
    const {deletePlayer} = props;

    return (
        <div class="container border border-white w-75 mx-auto p-5">
            <h3 className='m-5'>
                <NavLink to='/players/list' className='m-2'>List</NavLink>
                |
                <NavLink to='/players/addplayer' className='m-2'>Add Player</NavLink>
            </h3>
            <table className='table table-striped w-75 border border-white'>
                <thead>
                    <tr>
                        <th colSpan={2} className='border border-white tableAdjust'>Player Name</th>
                        <th colSpan={2} className='border border-white'>Preferred Position</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {props.players.map( (player, index) => {
                        return (
                            <tr key={index} className='border border-white'>
                                <td colSpan={2} className='border border-white'>{player.name}</td>
                                <td colSpan={2} className='border border-white'>{player.position}</td>
                                <td><button onClick={() => deletePlayer(player._id)} className='btn btn-danger m-3'>Delete</button></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default PlayerList