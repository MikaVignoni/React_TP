"use client"

import { useState } from 'react';
import styles from "../styles/Home.module.css";

const Formulario = () => {
    const [formData, setFormData] = useState({
        nombreApellido: '',
        telefono: '',
        email: '',
        mensaje: ''
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    const handleChange = (e) => {
        setFormData(form =>{
            return {
                ...form,
                [e.target.name]: e.target.value
            }
        })
        
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="nombreApellido">Nombre y Apellido:</label>
                <input type="text" id="nombreApellido" name="nombreApellido" value={formData.nombreApellido} onChange={handleChange} required/>
            </div>
            <div>
                <label htmlFor="telefono">Teléfono de Contacto:</label>
                <input type="tel" id="telefono" name="telefono" value={formData.telefono} onChange={handleChange} required/>
            </div>
            <div>
                <label htmlFor="email">Mail de Contacto:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required/>
            </div>
            <div>
                <label htmlFor="mensaje">Mensaje:</label>
                <textarea id="mensaje" name="mensaje" value={formData.mensaje} onChange={handleChange} required/>
            </div>
            <button type="submit">ENVIAR</button>
        </form>
    )
}
<styles jsx>
 .form-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    font-weight: bold;
  }
  
  input[type="text"],
  input[type="tel"],
  input[type="email"],
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
    margin-top: 5px;
  }
  
  button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #4CAF50;
    color: white;
    font-weight: bold;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  
  </styles>
  
export default Formulario