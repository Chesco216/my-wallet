import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Auth.module.css'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/firebase'
import { useUser } from '../Store/useUser'
import { useAuth } from '../Store/useAuth'

export const Login = () => {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const login = useAuth(state => state.login) 
  const navigate = useNavigate()
  
  const setUser = useUser(state => state.setUser)

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('submit')
    try {
      const res = await signInWithEmailAndPassword(auth, email, password)
      const user = res.user
      setUser({
        uid: user.uid,
        name: user.displayName,
        email: user.email,
      })
      login()
      localStorage.setItem('uid', JSON.stringify(user.uid))
      navigate('/home/')
      console.log({user})
    } catch (error) {
      alert(error.code)
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to My Wallet</h1>
      <form
        className={styles.formContainer}
        onSubmit={(e) => handleSubmit(e)}
      >
        <h2 style={{marginLeft: '20px'}}>Sign Up</h2>
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

