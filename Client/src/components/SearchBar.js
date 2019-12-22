
import React from 'react';

export function SearchBar(props) {
return (                
<form>
    <input type="text" className="input" onChange={handleSearchBarChange.bind(props)}
     placeholder="Search by name" />
</form>);
}

function handleSearchBarChange(e) {
    this.onFiterQueryChange(e.target.value);
}  