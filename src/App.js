import { useEffect, useState, useCallback } from "react";
import Users from "./components/Users";
function App() {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchUsers = useCallback(async () => {
    setIsLoading(true);
    // setError(null);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      // const loadedUsers = [];

      // for (const key in data) {
      //   loadedMovies.push({
      //     id: key ,
      //     title: data[key].title,
      //     openingText: data[key].openingText,
      //     releaseDate: data[key].releaseDate,
      //   })
      // }

      setUsers(data);
    } catch (error) {
      // setError(error.message);
      console.log(error)
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchUsers()
  },[fetchUsers])

  return (
    <div>
      <div>hello</div>
      {!isLoading && <Users users={users} />}
    </div>
  );
}

export default App;
