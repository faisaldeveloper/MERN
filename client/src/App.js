import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";
import Table from 'react-bootstrap/Table'; //Also import in index.js file: import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [username, setUsername] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/getUsers").then((response) => {
      setListOfUsers(response.data);
    });
  }, []);

  const createUser = () => {
    Axios.post("http://localhost:3001/createUser", {
      name,
      age,
      username,
    }).then((response) => {
      setListOfUsers([
        ...listOfUsers,
        {
          name,
          age,
          username,
        },
      ]);
    });
  };

  return (
    <div className="App">

       {/* Show list of users */}
      <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Age</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody className="usersDisplay">
        {listOfUsers.map((user, key) => {
          return (           
            <tr key={key}>
            <td>{ key+1 }</td>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>{user.username}</td>
          </tr>
          );
        })}
        </tbody>
        </Table>  
        

      {/* Add new user code */}
      <div>
        <input
          type="text"
          placeholder="Name..."
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Age..."
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Username..."
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <button onClick={createUser}> Create User </button>
      </div>
    </div>
  );
}

export default App;