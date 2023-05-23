import axios from "axios";
import { useEffect, useState } from "react";

const URL = "https://jsonplaceholder.typicode.com/users";

function App() {
  const [users, setUsers] = useState<User[]>([]);

  interface User {
    id: number;
    name: string;
  }
  useEffect(() => {
    axios.get<User[]>(URL).then((response) => setUsers(response.data));
  }, []);

  return (
    <ul>
      {users.map(({ id, name, }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
}
export default App;
