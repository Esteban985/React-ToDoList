import React from "react";
import { TodoIcon } from "../TodoIcon";

function CompleteIcon ({onComplete,completed}) {
    return (
        <TodoIcon 
        type = 'check'
        color = {completed ? 'green': 'gray'}
        onComplete={onComplete}
        />
    )
}

export {CompleteIcon}