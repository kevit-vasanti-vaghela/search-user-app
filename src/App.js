import { useEffect, useState, useCallback, useMemo } from "react";
import Users from "./components/Users";
function App() {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [showNoResult, setShowNoResult] = useState(false)



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

  // const filteredData = users.filter(user => {
  //     return user.name.toLowerCase().includes(searchTerm.toLowerCase())
  //   })
    
  const getFilteredUsers = (searchTerm,users) => {
      return users.filter((user) => 
       user.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }   
  
const onChangehandler = (e) => {
  setSearchTerm(e.target.value)
  setIsLoading(true)
  setTimeout(() => {
    setIsLoading(false)
  },500)
}

 const filteredData = getFilteredUsers(searchTerm,users)
  

  return (
    <div className="app">
       <input type="search" id="u-search" name="u-search"  onChange={onChangehandler} value={searchTerm} placeholder="Search User"/>
      {!isLoading && <Users users={filteredData}  />}
      {isLoading && <p>Loading...</p>}
      {showNoResult && <p>No Result Found.</p>}
    </div>
  );
}

export default App;
