import axios from "axios";
import { useEffect, useState } from "react";

const URL = "https://jsonplaceholder.typicode.com/cusers";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] =useState('')

  interface User {
    id: number;
    name: string;
  }
  useEffect(() => {
    axios
      .get<User[]>(URL)
      .then((response) => setUsers(response.data))
      .catch((err) => setError(err.message));
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
