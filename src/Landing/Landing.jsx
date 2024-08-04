import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Landing.module.css'

export const Landing = () => {

  const navigate = useNavigate()

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My-Wallet</h1>
      <p>So i create this to help me with my money managment anf well thats all, mayube i'll have to add a description and other things but i dont work in McDonalds so i dont know</p>
      <span className={styles.btnContainer}>
        <button
          className={styles.btn}
          onClick={() => navigate('/login')}>
          Log in
        </button>
        <button
          className={styles.btn}
          onClick={() => navigate('/signup')}>
          Sign up
        </button>
      </span>
    </div>
  )
}

