import React, { useState } from 'react'
import styles from './Login.module.css'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../firebase/firebase'
import { doc, setDoc } from 'firebase/firestore'
import { useUser } from '../Store/useUser'
import { useNavigate } from 'react-router-dom'

export const Signup = () => {
  
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const navigate = useNavigate()

  const setUser = useUser(state => state.setUser)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)
      const user = res.user

      await setDoc(doc(db, 'users', user.uid), {
        name: name
      })

      setUser({
        name: name,
        email: email,
        uid: user.uid
      })

      navigate('/home')
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
        <span className={styles.fields}>
          <label className={styles.text}>
            Name
          </label>
          <input
            className={styles.field}
            type='text'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </span>
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

