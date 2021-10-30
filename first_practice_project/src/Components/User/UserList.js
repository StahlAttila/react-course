import React from 'react'
import User from './User'
import Card from '../UI/Card'
import styles from './UserList.module.css';

const UserList = (props) => {
  return (
    <Card>
      <ul className={styles['user-list']}>
      {props.users.map(user => <li><User key={user.id} name={user.name} age={user.age}/></li>)}
      </ul>
    </Card>
  )
}

export default UserList
