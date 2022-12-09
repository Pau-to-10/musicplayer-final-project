import { useState } from 'react';
import { UserContext } from './UserContext'

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState([]);
    const [dataUser, setDataUser] = useState([]);


    return (
        <UserContext.Provider value={{ user, setUser, dataUser, setDataUser }}>
            {children}
        </UserContext.Provider>
    )
}
