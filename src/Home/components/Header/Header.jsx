import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Header.module.css'
import { useUser } from '../../../Store/useUser'

export const Header = () => {

  const user = useUser(state => state.user)
  const clearUser = useUser(state => state.clear)

  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.clear()
    clearUser()
    navigate('/')
  }

  return (
    <header className={styles.container}>
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
    </header>
  )
}
 

