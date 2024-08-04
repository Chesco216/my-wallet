import React, { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase/firebase.js'
import { useUser } from '../Store/useUser'
import { Header } from './components/Header/Header'
import styles from './Home.module.css'
import { Basic } from './components/Basic/Basic.jsx'

export const Home = () => {

  // const { user, setUser } = useUser()
  const user = useUser(state => state.user)
  const setUser = useUser(state => state.setUser)

  const [userRef, setUserRef] = useState(false)

  const userID = localStorage.getItem('uid')

  useEffect(() => {
    try {
      getDoc(doc(db, 'users', user.uid))
        .then(doc => setUser(doc.data()))
      setUserRef(true)
      // console.log(user)
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
            </>
          )
      }
    </div>
  )
}

