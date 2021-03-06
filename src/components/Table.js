import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Table(props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name
                    {/* <button className="sort" onClick={props.sortName}>
                            <FontAwesomeIcon icon={['fas', 'sort']} />
                        </button> */}
                    </th>
                    <th>Phone Number</th>
                    <th>Email</th>
                </tr>
            </thead>

            <tbody>
                {props.list.map(user => (
                    <tr key={user.login.uuid}>
                        <td>
                            <img src={user.picture.thumbnail} alt="Employee Profile" />
                        </td>
                        <td>{user.name.first} {user.name.last}</td>
                        <td>{user.phone}</td>
                        <td>{user.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table;