import '../TodoCounter.css'
import React from 'react';

function TodoSearch({ searchValue, setSearchValue }) {
    return (
        <input className='todo-search' placeholder="Cortar Cebolla"
            value={searchValue}
            onChange={(event) => {
                setSearchValue(event.target.value);
            }}
        />
    );
}

export { TodoSearch }