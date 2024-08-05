import React, { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase/firebase.js'
import { useUser } from '../Store/useUser'
import { Header } from './components/Header/Header'
import styles from './Home.module.css'
import { Basic } from './components/Basic/Basic.jsx'
import { BillsForm } from './components/BillsForm/BillsForm.jsx'

export const Home = () => {

  // const { user, setUser } = useUser()
  const user = useUser(state => state.user)
  const setUser = useUser(state => state.setUser)

  const [userRef, setUserRef] = useState(false)

  const userID = localStorage.getItem('uid').replaceAll('"', '')

  useEffect(() => {
    try {
      console.log((userID))
      getDoc(doc(db, 'users', userID))
        .then(doc => setUser(doc.data()))
      setUserRef(true)
      console.log(user)
    } catch (error) {
      console.log(error.code)
    }
  }, [])

  return (
    <div className={styles.container}>
      {
        (!userRef) ? <Basic setUserRef={setUserRef}/>
        :
          (
            <>
              <Header/>
              <div className={styles.titlesContainer}>
                <span className={styles.titleContainer}>
                <h2 className={styles.titles}>Avaible</h2>
                <label className={styles.avaible}>300$</label>
                </span>
                <span className={styles.titleContainer}>
                <h2 className={styles.titles}>Spent</h2>
                <label className={styles.spent}>300$</label>
                </span>
              </div>
              {
                //TODO: add a chart to see the bills
              }
              <BillsForm/>
            </>
          )
      }
    </div>
  )
}

