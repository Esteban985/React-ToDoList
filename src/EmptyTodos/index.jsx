import React from "react";
import './index.css'

const EmptyTodos = () => {
    return (
        <div className="todo-not-found">
            <div className="matrix-bg">
                {/* Capas para simular las líneas de código binario */}
                <div className="binary-line">01101001 01101110 01110100 01100101</div>
                <div className="binary-line delay-1">10010110 11100111 01010101 00110011</div>
                <div className="binary-line delay-2">01110100 01101111 01100100 01101111</div>
                <div className="binary-line delay-3">11010011 00110111 11100101 01101001</div>
            </div>

            <div className="matrix-content">
                <div className="matrix-icon">
                    <span className="scanner-line"></span>
                    🔍
                </div>
                <h3 className="matrix-title">TODO NO ENCONTRADO</h3>
                <p className="matrix-text">Crea uno nuevo presionando el botón '+' de abajo</p>
            </div>
        </div>
    );
}

export { EmptyTodos };