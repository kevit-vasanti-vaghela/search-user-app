// import { useState } from "react"

const SearchUser = ({ searchTerm, setSearchTerm }) => {
    
    return <div className="search-user">
        <input type="text" id="u-search" name="u-search"  onChange={(e) =>setSearchTerm(e.target.value)}  placeholder="Search User"/>
    </div>
}
export default SearchUser;