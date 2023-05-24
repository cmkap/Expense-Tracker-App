import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

const URL = "https://jsonplaceholder.typicode.com/users";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] =useState('')

  interface User {
    id: number;
    name: string;
  }
  useEffect(() => {
    const fetchUsers = async () =>{
      try {
        const res = await axios.get<User[]>(URL)
        setUsers(res.data)
      } catch (error) {
        setError((error as AxiosError).message)
      }
      fetchUsers()
        // .then((response) => )
        // .catch((err) => 

    }
  }, []);

  return (
    <>
    {error && <p className="text-danger">{error}</p>}
    <ul>
      {users.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>

    </>
  );
}
export default App;
