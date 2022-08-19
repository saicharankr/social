import React from 'react'
import { logout } from '../../services/UserService'

export const Home = () => {
    return (
        <div>
            <h1 className='text-black'> Welcome Home page </h1>
            <button className='cursor-pointer' onClick={() => logout()}>logout</button>
        </div>
    )
}




 