import {Navigate} from 'react-router-dom'
import {jwtDecode} from 'jwt-decode'
import api from '../api'
import { REFRESH_TOEKEN, ACCESS_TOKEN } from '../constants'
import { useState } from 'react'

function ProtectedRoute({children}){
    const [isAuthorized, setIsAuthorized] = useState(null)

    const refreshToken = async () => {
        const refreshToken = localStorage.getItem(REFRESH_TOEKEN)
        try {
            const res = await api.post('/api/token/refresh/', {refresh: refreshToken})
            if (res.status === 200){
                localStorage.setItem(ACCESS_TOKEN, res.data.access)
                setIsAuthorized(true)
            } else {
                setIsAuthorized(false)
            }
        } catch(error){
            console.log(error)
            setIsAuthorized(false)
        }
    }

    const auth = async () => {

    }

    if (isAuthorized === null){
        return <div>
            Loading...
        </div>
    }

    return isAuthorized ? children : <Navigate to='/login' />

}

export default ProtectedRoute