// import { useState } from "react"

const SearchUser = ({ onSearch }) => {
    // const [searchTerm, setSearchTerm] = useState('')
    const searchUserHandler = (e) => {
        // setSearchTerm(e.target.value)
        onSearch(e.target.value)
    }
    return <div className="search-user">
        <input type="text" id="u-search" name="u-search"  onChange={searchUserHandler} placeholder="Search User"/>
    </div>
}
export default SearchUser;