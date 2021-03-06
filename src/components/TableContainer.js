import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from './Table';

function TableContainer() {
    const [usersState, setUsersState] = useState([]);

    useEffect(() => {
        getRandomUsers()
    }, []);

    async function getRandomUsers() {
        const result = await axios.get("https://randomuser.me/api/?results=100&nat=us");
        setUsersState(result.data.results);
    }

    function sortName() {
        console.log("sorting by name");

        const sorted = usersState.sort((a, b) => {
            if (a.name.first < b.name.first) {
                return -1;
            } else if (a.name.first > b.name.first) {
                return 1;
            } else {
                return 0;
            }
        });

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

export default TableContainer;
