import {Navigate} from 'react-router-dom'
import {jwtDecode} from 'jwt-decode'
import api from '../api'
import { REFRESH_TOEKEN, ACCESS_TOKEN } from '../constants'
import { useState, useEffect } from 'react'

function ProtectedRoute({children}){
    const [isAuthorized, setIsAuthorized] = useState(null)

    useEffect(() => {
        auth().catch(() => setIsAuthorized(false))
    }, [])

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

    // Check if we have access token. If we do, auto refresh so that user can still login. If not, user will have to log in again.
    const auth = async () => {
        const token = localStorage.getItem(ACCESS_TOKEN)
        if (!token){
            setIsAuthorized(false)
            return
        }
        const decoded = jwtDecode(token)
        const tokenExpiration = decoded.exp
        const now = Date.now() / 10000

        if (tokenExpiration < now){
            await refreshToken()
        } else {
            // token is still valid
            setIsAuthorized(true)
        }
    }

    if (isAuthorized === null){
        return <div>
            Loading...
        </div>
    }

    return isAuthorized ? children : <Navigate to='/login' />

}

export default ProtectedRoute