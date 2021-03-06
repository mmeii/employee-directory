import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '../components/Table';
// import API from "../utils/API";

function Container() {
    const [usersState, setUsersState] = useState([]);

    useEffect(() => {
        getRandomUsers()
    }, []);

    function getRandomUsers() {
        const result = axios.get("https://randomuser.me/api/?results=100&nat=us");
        setUsersState(result.data.results);
    }

    function sortName() {
        console.log("sorting by name");
        const sorted = usersState.sort((a, b) => (a - b));
        setUsersState([...sorted]);
    }

    return (
        <div>
            <Table
                list={usersState}
                sortName={sortName}
            />
        </div>
    )
}

export default Container;
