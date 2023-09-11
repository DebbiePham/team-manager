import { NavLink } from 'react-router-dom';
import React from 'react';
import { useParams } from "react-router-dom";
import { useState } from 'react';

const StatusList = (props) => {
    const {handleUpdate, players} = props; 
    const {num} = useParams();
    const [gameNum, setGameNum] = useState(Number(num));
    const [currentGame, setCurrentGame] = useState("game1")

    const handleClick = (id, status, gameNum) => {
        const filteredPlayer = players.filter((onePlayer) => onePlayer._id === id)[0];
        const updatedPlayer = {...filteredPlayer, status: {...filteredPlayer.status, [gameNum]:status}}
        console.log(updatedPlayer);
        handleUpdate(id, updatedPlayer);
    }

    return (
        <div class="container border border-white w-75 mx-auto p-5">
            <h1>Player Status - Game {num} </h1>
            <h3 className='m-5'>
                <NavLink 
                    to='/status/game/1' 
                    className={`${currentGame === "game1" && "text-primary text-decoration-underline m-2"}`}
                    onClick = {() => {setGameNum(1); setCurrentGame("game1");}}>Game 1</NavLink>
                |
                <NavLink 
                    to='/status/game/2' 
                    className={`${currentGame === "game2" && "text-primary text-decoration-underline"}`}
                    onClick = {() => {setGameNum(2); setCurrentGame("game2");}}>Game 2</NavLink>
                |
                <NavLink 
                    to='/status/game/3' 
                    className={`${currentGame === "game3" && "text-primary text-decoration-underline"}`}
                    onClick = {() => {setGameNum(3); setCurrentGame("game3");}}>Game 3</NavLink>
            </h3>
            <table className='table table-striped w-75 border border-white'>
                <thead>
                    <tr>
                        <th colSpan={1} className='border border-white'>Player Name</th>
                        <th colSpan={3} className='border border-white'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map( (player, index) => {
                        return (
                            <tr key={player._id} className='border border-white'>
                                <td colSpan={1} className='border border-white'>{player.name}</td>
                                {
                                    player.status[`game${num}`] === 'Playing'?
                                    <td><button className='btn btn-success'>Playing</button></td>:
                                    <td><button onClick={() => handleClick(player._id, "Playing", `game${num}`)}>Playing</button></td>
                                }
                                
                                {
                                    player.status[`game${num}`] === 'Not Playing'?
                                    <td><button className='btn btn-danger'>Not Playing</button></td>:
                                    <td><button onClick={() => handleClick(player._id, "Not Playing", `game${num}`)}>Not Playing</button></td>
                                }
                                {
                                    player.status[`game${num}`] === 'Undecided'?
                                    <td><button className='btn btn-warning'>Undecided</button></td>:
                                    <td><button onClick={() => handleClick(player._id, "Undecided", `game${num}`)}>Undecided</button></td>
                                }
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default StatusList