import "./SearchBar.css"

const SearchBar = () => {
    
    return (
        <form className="search-form">
        <input type="text" placeholder="Search for a word..."></input>
        <select className="dropdown">
            <option>English</option>
            <option>Spanish</option>
            <option>Italian</option>
        </select>
        <button type="submit">Search</button>
        </form>
    )
}

export default SearchBar 