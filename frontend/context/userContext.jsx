import axios from "axios";
import { createContext, useState, useEffect } from 'react';
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext({
    user: null,
    login: () => {},
    logout: () => {},
})

export function UserContextProvider({children}) {
    const [user, setUser] = useState(null)
    const [role, setRole] = useState(null)
    const navigate = useNavigate()

    const login = async (email, password) => {
        try {
            const {data} = await axios.post('/login', {
                email,
                password
            });
            
            if(data.error) {
                toast.error(data.error)
            } else {
                setUser({data});
                toast.success('Login Successful - Welcome to ClubHub!')
                navigate('/home')
                window.location.reload();
            }
        } catch (error) {
            console.log(error)
        }
    }

    const logout = async () => {
        try {
            await axios.get('/logout');
            toast.success('Logout Successful!')
            navigate('/login')
            window.location.reload();
        } catch (error) {
            console.log(error)
        }

      }

    useEffect(() => {
        if(!user) {
            axios.get('/profile').then(({data}) => {
                setUser(data)
            })
        }
    }, [])


        return (
            <UserContext.Provider value={{user, setUser, login, logout}}>
                {children}
            </UserContext.Provider>
        )
}