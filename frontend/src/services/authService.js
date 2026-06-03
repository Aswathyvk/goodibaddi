import axios from "axios";

const API="https://goodibaddi.onrender.com/api/auth";

export const signup=(data)=>{
    return axios.post(
        `${API}/signup`,
        data
    );
};

export const login=(data)=>{
    return axios.post(
        `${API}/login`,
        data
    );
};