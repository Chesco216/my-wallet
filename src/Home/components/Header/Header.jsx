import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Header.module.css'
import { useUser } from '../../../Store/useUser'
import { useAuth } from '../../../Store/useAuth'

export const Header = () => {

  const user = useUser(state => state.user)
  const clearUser = useUser(state => state.clear)
  const loguot = useAuth(state => state.loguot)

  const navigate = useNavigate()

  const handleLogout = () => {
    navigate('/')
    localStorage.clear()
    clearUser()
    loguot()
  }

  console.log('user from header; ', {user})

  return (
    <header className={styles.container}>
      {
        (user) && (
          <>
      <span className={styles.info}>
        <label className={styles.text}>{user.name}</label>
        <label className={styles.income}>{user.income} $</label>
      </span>
      <button
        className={styles.btn}
        onClick={() => handleLogout()}
      >
        Logout
      </button>
      </>
        )
      }
    </header>
  )
}
 

