import { useEffect, useState, useCallback } from "react";
import Users from "./components/Users";
function App() {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchUsers = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      setUsers(data);
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    // setTimeOut(fetchUsers(),3000)
    setIsLoading(true)
    setTimeout(() => {
      fetchUsers()
    },3000)
  },[fetchUsers])

  return (
    <div>
      <div>hello</div>
      {isLoading && <p>Loading...</p>}
      {!isLoading && <Users users={users} />}
    </div>
  );
}

export default App;
