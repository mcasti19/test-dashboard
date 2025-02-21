import TableUsers from '@/app/components/UsersWrapper';
import { fetchUser } from '@/app/helpers/api';
import React from 'react';


const Team = async () => {

    const { users } = await fetchUser();

    console.log("USERS >>>> ", users);

    return (
        <TableUsers users={users} />
    )
}

export default Team;