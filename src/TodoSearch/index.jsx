import { TodoContext } from '../TodoContext';
import '../TodoCounter.css'
import React from 'react';

function TodoSearch() {
    const {
        searchValue,
        setSearchValue
    } = React.useContext(TodoContext)

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