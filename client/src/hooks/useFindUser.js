import { useState, useEffect } from 'react';
const {axiosInstance} = require('../utilities/axiosInstance');

const useFindUser = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axiosInstance.get('user').then((response) => {
            if(response.data.success){
                setUser(response.data.user);
                setLoading(false);
            }
        }).catch((error) => {
            setLoading(false);
        })
    }, [])
    return [user, setUser, loading];
}

export default useFindUser
