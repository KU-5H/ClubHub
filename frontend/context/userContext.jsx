import axios from "axios";
import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext({})

export function  UserContextProvider({children}) {
    const [user, setUser] = useState(null)
    const navigate = useNavigate();
    
    useEffect(() => {
        if(!user) {
            axios.get('/profile').then(({data}) => {
                setUser(data)
            })
        } else {
            navigate('/');
        }
    }, [])
        return (
            <UserContext.Provider value={{user, setUser}}>
                {children}
            </UserContext.Provider>
        )
}