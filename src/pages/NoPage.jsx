import React from 'react'
import { Link } from 'react-router-dom'

function NoPage() {
return (
    <div className='NoPage-container'>
        <img 
        src="https://res.cloudinary.com/dgxmejzk6/image/upload/v1738155900/page-not-found-404-png_g9gb3u.png"
        alt="page-not-found"/>
    
        <Link to="/">Back to Home</Link>
    </div>
)
}

export default NoPage