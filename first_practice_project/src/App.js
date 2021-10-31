import React, { useState, Fragment } from "react";
import NewUserForm from "./Components/NewUser/NewUserForm";
import UserList from "./Components/User/UserList";



const initialUsers = [
  {
    id: 'u1',
    name: 'Stati',
    age: 29
  },
  {
    id: 'u2',
    name: 'Balint',
    age: 30
  },
  {
    id: 'u3',
    name: 'Asderke',
    age: 15
  },
]

function App() {
  const [users, setUsers] = useState(initialUsers)

  const addUserHandler = (user) => {
    setUsers((prevState) => {
      return [user, ...prevState]
    });
  }

  return (
    <Fragment>
      <NewUserForm addUser={addUserHandler}/>
      <UserList users={users}/>
    </Fragment>
  );
}

export default App;
