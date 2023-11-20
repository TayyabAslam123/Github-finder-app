import React, { useState, useEffect, useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/GithubContext';

const UserResults = () => {

    const{users, loading, fetchUsers} = useContext(GithubContext);
    // const [users, setUsers] = useState([]);
    // const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchUsers();
    });

    // OLD CODE
    // const fetchUsers = async () => {

    //     const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
    //         headers: {
    //             Authorization: `${process.env.REACT_APP_GITHUB_TOKEN}`
    //         }
    //     });

    //     const data = await response.json();
    //     setUsers(data);
    //     setLoading(false);

    // }

    return (
        <div>
            {loading ? (
                <Spinner />
            ) : (
                <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
                    {users.map(user => (
                     <UserItem key={user.id} user={user}/>
                    ))}
                </div>
            )}
        </div>
    )
}

export default UserResults
