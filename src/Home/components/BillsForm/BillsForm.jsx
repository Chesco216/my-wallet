import React, { useState } from 'react'
import styles from './BillsForm.module.css'

export const BillsForm = () => {

  const [desc, setDesc] = useState()
  const [amount, setAmount] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    const cat = document.getElementById('selectTag').value
    console.log('submited', {
      desc,
      amount,
      cat
    })
    setAmount('')
    setDesc('')
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Add Bill</h2>
      <form
        className={styles.formContainer}
        onSubmit={(e) => handleSubmit(e)}
      >
        <span className={styles.fields}>
          <label className={styles.text}>
            Which was the amount did you spent?
          </label>
          <input
            className={styles.field}
            type='number'
            name='amount'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </span>
        <span className={styles.fields}>
          <label className={styles.text}>
            On what did you spent?
          </label>
          <input
            className={styles.field}
            type='text'
            name='desc'
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            required
          />
        </span>
        <span className={styles.fields}>
          <label className={styles.text}>
            Select the category
          </label>
          <select
            id='selectTag'
            className={styles.categories}
          >
            <option className={styles.category}>need</option>
            <option className={styles.category}>vice</option>
            <option className={styles.category}>clothes</option>
            <option className={styles.category}>food</option>
            <option className={styles.category}>need</option>
          </select>
        </span>
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

