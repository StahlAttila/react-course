import React from 'react'
import styles from './User.module.css'

const User = (props) => {
  return (
    <li className={styles.container}>
      <div className={styles.text}>{props.name}</div>
      <div className={styles.text}>({props.age} years old)</div>
    </li>
  )
}

export default User
