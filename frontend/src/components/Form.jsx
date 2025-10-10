import { useState } from 'react'
import api from '../api'
import { useNavigate } from 'react-router-dom'
import { ACCESS_TOKEN, REFRESH_TOEKEN } from '../constants'

export default function Form({route, method}) {
    const [username, setUsername] = useState('')
    const [password, setPassowrd] = useState('')
    const [loading, Setloading] = useState(false)
    const navigate = useNavigate()


    const name = method === 'login' ? "Login" : "Register"

    const handleSubmit = (e) => {
        Setloading(true)
        e.preventDefault()

        try {
            const res = await api.post(route, {username, password})
            if (method === "login"){
                localStorage.setItem(ACCESS_TOKEN, res.data.access)
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh)
                navigate('/')
            } else {
                navigate('/login')
            }
        } catch(err){
            alert(err)
        } finally {
            Setloading(false)
        }
    }


    return <form onSubmit={handleSubmit} className='form-container'>
        <h1>{name}</h1>
        <input
            className='form-input'
            type='text'
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            placeholder='Username' 
        />
        <input
            className='form-input'
            type='text'
            value={password}
            onChange={(e)=>setPassowrd(e.target.value)}
            placeholder='Password' 
        />
        <button className='form-button' type='submit'>
            {name}
        </button>
    </form>
}
