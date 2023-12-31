import React, { useEffect, useState } from "react";
import axios from 'axios';
import StatusList from "../components/StatusList";


const PlayerStatus = () => {
    const [players, setPlayers] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [status, setStatus] = useState('')


    const handleUpdate = (id, updatedPlayer) => {

        axios
            .put(`http://localhost:8000/api/players/${id}`, updatedPlayer)
            .then((res) => console.log(res))
            .catch((err) => console.error(err));
    };

    const fetchPlayers = () => {
        axios
            .get("http://localhost:8000/api/players")
            .then((res) => {
                setPlayers(res.data);
                setStatus(res.data);
                setLoaded(!loaded);
            })
            .catch((err) => console.error(err));
    };

    useEffect(fetchPlayers, [loaded]); // Pass an empty dependency array to run the effect one 
    return (
        <div>
            <StatusList players={players} status={status} handleUpdate={handleUpdate}/>
        </div>
    );
}

export default PlayerStatus