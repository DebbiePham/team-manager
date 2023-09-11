import React, { useEffect, useState } from "react";
import axios from 'axios';
import PlayerList from '../components/PlayerList';

const Dashboard = () => {
    const [players, setPlayers] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const deletePlayer = (id, name) => {

        if (window.confirm(`Are you sure you want to remove \n${name}?`)) {
            axios
            .delete(`http://localhost:8000/api/players/${id}`)
            .then(() => {
                setLoaded(!loaded)})
            .catch((err) => console.log(err))
        }
        
    };

    const fetchPlayers = () => {
        axios
            .get("http://localhost:8000/api/players")
            .then((res) => {
                setPlayers(res.data);
                setLoaded(!loaded);
            })
            .catch((err) => console.error(err));
    };

    useEffect(fetchPlayers, [loaded]); // Pass an empty dependency array to run the effect one 
    return (
        <div>
            <PlayerList players={players} deletePlayer={deletePlayer} />
        </div>
    );
}

export default Dashboard