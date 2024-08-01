import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Landing = () => {

  const navigate = useNavigate()

  return (
    <div>
      <button onClick={() => navigate('/login')}>Log in</button>
      <button onClick={() => navigate('/signup')}>Sign up</button>
    </div>
  )
}

