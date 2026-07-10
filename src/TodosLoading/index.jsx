import React from "react";
import './TodosLoading.css'

const TodosLoading = () => {
    return (
        <li className="LoadingTodo-container">
            <span className="LoadingTodo-completeIcon"></span>

            <span className="LoadingTodo-Text"></span>

            <span className="LoadingTodo-deleteIcon"></span>
        </li>
    );
}

export { TodosLoading };