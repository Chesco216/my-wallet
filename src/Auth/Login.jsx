import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Login.module.css'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/firebase'

export const Login = () => {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('submit')
    try {
      const res = await signInWithEmailAndPassword(auth, email, password)
      const user = res.user
      console.log({user})
    } catch (error) {
      alert(error.code)
    }
    navigate('/home/')
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to My Wallet</h1>
      <form
        className={styles.formContainer}
        onSubmit={(e) => handleSubmit(e)}
      >
        <span className={styles.fields}>
          <label className={styles.text}>
            email
          </label>
          <input
            className={styles.field}
            type='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </span>
        <span className={styles.fields}>
          <label className={styles.text}>
            password
          </label>
          <input
            className={styles.field}
            type='password'
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </span>
        <button type='submit' className={styles.btn}>Submit</button>
      </form>
    </div>
  )
}

