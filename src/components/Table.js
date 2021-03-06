import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Table(props) {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name
                    {/* <button className="sort" onClick={props.sortName}>
                            <FontAwesomeIcon icon={['fas', 'sort']} />
                        </button> */}
                    </th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>

            <tbody>
                {props.list.map(user => (
                    <tr key={user.login.uuid}>
                        <td className="align-middle">
                            <img src={user.picture.medium} alt="Employee Profile" />
                        </td>
                        <td className="align-middle">{user.name.first} {user.name.last}</td>
                        <td className="align-middle">{user.phone}</td>
                        <td className="align-middle">{user.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table;