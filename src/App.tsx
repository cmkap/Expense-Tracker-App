import axios, { CanceledError } from "axios";
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
    const controller = new AbortController()
    axios
      .get<User[]>(URL, { signal: controller.signal})
      .then((response) => setUsers(response.data))
      .catch((err) => {
        if(err instanceof CanceledError) return;
        setError(err.message)
      })

    return () => controller.abort()
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
