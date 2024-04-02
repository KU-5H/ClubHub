import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import {toast} from 'react-hot-toast';
import { Navigate,useNavigate } from 'react-router-dom';

export default function Logout() {
    const nav = useNavigate()
    return (
        <Navigate to='/login' replace={true}/>
    )
}