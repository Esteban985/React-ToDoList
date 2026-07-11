import React from "react";
import { TodoContext } from "../TodoContext";
import './index.css'

const TodoForm = () => {
    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext)

    const [newTodoValue, setNewTodoValue] = React.useState('')

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(false)
    }

    const onCancel = () => {
        setOpenModal(false)
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }

    return (
        <div className="modal-overlay">
            {/* Cambiamos el div contenedor por un tag form */}
            <form
                className="modal-container"
                onSubmit={onSubmit}
            >
                {/* Botón de cerrar (X) en la esquina - Importante: type="button" para que no envíe el formulario */}
                <button
                    type="button"
                    className="modal-close-icon"
                    onClick={onCancel}
                >
                    &times;
                </button>

                <div className="modal-header">
                    <h2>Nueva Tarea</h2>
                    <p>Organiza tu día agregando un nuevo pendiente.</p>
                </div>

                <div className="modal-body">
                    <label htmlFor="task-input">¿Qué tienes pendiente?</label>
                    <input
                        value={newTodoValue}
                        onChange={onChange}
                        id="task-input"
                        type="text"
                        placeholder="Ej. Terminar el componente de React..."
                        className="modal-input"
                        autoFocus
                        required // Opcional: evita que agreguen tareas vacías
                    />
                </div>

                <div className="modal-footer">
                    {/* Botón Cancelar - También con type="button" para evitar el envío */}
                    <button
                        type="button"
                        className="btn-modal btn-cancel"
                        onClick={onCancel}
                    >
                        Cancelar
                    </button>

                    {/* Botón Agregar Tarea - Al ser type="submit", dispara el onSubmit del form */}
                    <button
                        type="submit"
                        className="btn-modal btn-submit"
                    >
                        Agregar Tarea
                    </button>
                </div>
            </form>
        </div>
    );
}

export { TodoForm };