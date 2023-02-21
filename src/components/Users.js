import User from "./User";
const Users = ({users}) => {
   
    return <ul>
       {
        users.map((user) => (<User key={user.id} name={user.name}/> ))
       }
        
      
       
    </ul>
}
export default Users;