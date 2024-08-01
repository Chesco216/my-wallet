import React from 'react'
import { useUser } from '../Store/useUser'

export const Home = () => {

  const user = useUser(state => state.user)

  return (
    <div>
      <label>{user.uid}</label>
      <label>{user.name}</label>
      <label>{user.email}</label>
    </div>
  )
}

