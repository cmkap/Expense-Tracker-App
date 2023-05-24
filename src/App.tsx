import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";

const URL = "https://jsonplaceholder.typicode.com/users";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  interface User {
    id: number;
    name: string;
  }
  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    axios
      .get<User[]>(URL, { signal: controller.signal })
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    // .finally(() => setLoading(false)) - this is the best solution but does not work in strict mode

    return () => controller.abort();
  }, []);

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <ul>
        {users.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </>
  );
}
export default App;
