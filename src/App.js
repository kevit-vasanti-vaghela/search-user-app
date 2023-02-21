import { useEffect, useState, useCallback } from "react";
import Users from "./components/Users";
import SearchUser from "./components/SearchUser";
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

  const userSearchHandler = (searchTerm) => {
    let filteredUsers = users.filter(user => {
      return user.name.toLowerCase().includes(searchTerm.toLowerCase())
    })
    return filteredUsers
  }
    
  return (
    <div className="app">
       <SearchUser onSearch={userSearchHandler} />
      {!isLoading && <Users users={users}  />}
      {isLoading && <p>Loading...</p>}
    </div>
  );
}

export default App;
