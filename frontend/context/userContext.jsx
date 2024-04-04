import axios from "axios";
import { createContext, useState, useEffect } from 'react';
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom';
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export const userContext = createContext({
    user: null,
    login: () => {},
    logout: () => {},
});

export function UserContextProvider({children}) {
    const [user, setUser] = useState(null);
    const [role, setRole] = useState(null);
    const navigate = useNavigate();

    const login = async (email, password) => {
        try {
            const {data} = await axios.post('/login', {
                email,
                password
            });
            
            if(data.error) {
                toast.error(data.error);
            } else {
                toast.success('Login Successful - Welcome to ClubHub!');
                navigate('/home');
                tempLog();
            }
        } catch (error) {
            console.log(error);
        }
    };

    const tempLog = async () => {
        if(!user) {
            axios.get('/profile').then(({data}) => {
                setUser(data);
            });
        }
    };

    const logout = async () => {
        try {
            await axios.get('/logout');
            toast.success('Logout Successful! Will now try to automatically reload page..', {duration: 3000})
            navigate('/login')
            setTimeout(function () { 
                window.location.reload();
            }, 1500);
        } catch (error) {
            console.log(error);
        }
    };
    
    const [isFetching, setIsFetching] = useState(true); 

    useEffect(() => { 
        setTimeout(function () { 
            setIsFetching(false); 
        }, 2000);

        if(!user) {
            axios.get('/profile').then(({data}) => {
                setUser(data);
            });
        }
    }, []);

    if (isFetching) {
        return (
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" , background: "white", height: "100vh"}}>
                <CircularProgress />
            </Box>
        );
    }

    return (
        <userContext.Provider value={{user, setUser, login, logout}}>
            {children}
        </userContext.Provider>
    );
}
