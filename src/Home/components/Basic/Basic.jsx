import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Basic.module.css'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '../../../firebase/firebase'
import { useUser } from '../../../Store/useUser'

export const Basic = ({ setUserRef }) => {

  const [name, setName] = useState()
  const [age, setAge] = useState()
  const [income, setIncome] = useState()

  const user = useUser(state => state.user)
  const setUser = useUser(state => state.setUser)

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    try {
      const profile = {
        name: name,
        age: age,
        income: income
      }
      setDoc(doc(db, 'users', user.uid), profile)
      .then(setUser(profile))
      setUserRef(1)
    } catch (error) {
      console.log(error.code)
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>We need more about you</h1>
      <form
        className={styles.formContainer}
        onSubmit={(e) => handleSubmit(e)}
      >
        <span className={styles.fields}>
          <label className={styles.text}>Name</label>
          <input
            className={styles.field}
            type='text'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </span>
        <span className={styles.fields}>
          <label className={styles.text}>Age</label>
          <input
            className={styles.field}
            type='number'
            name='age'
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </span>
        <span className={styles.fields}>
          <label className={styles.text}>Avg income p/moth</label>
          <input
            className={styles.field}
            type='number'
            name='income'
            value={income}
            onChange={(e) => setIncome(e.target.value)}
          />
        </span>
        <button type='submit' className={styles.btn}>Enviar</button>
      </form>
    </div>
  )
}

