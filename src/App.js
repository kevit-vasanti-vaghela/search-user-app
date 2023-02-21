import { useEffect, useState, useCallback } from "react";
import Users from "./components/Users";
function App() {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')



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
    },1000)
  },[fetchUsers])

  const filteredData = users.filter(user => {
      return user.name.toLowerCase().includes(searchTerm.toLowerCase())
    })
    



  return (
    <div className="app">
       <input type="search" id="u-search" name="u-search"  onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm} placeholder="Search User"/>
      {!isLoading && <Users users={filteredData}  />}
      {isLoading && <p>Loading...</p>}
    </div>
  );
}

export default App;
