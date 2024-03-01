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

    console.log(formData);

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
                <input type="text" id="nombreApellido" name="nombreApellido" value={formData.nombreApellido} onChange={handleChange} required />
            </div>
            <div>
                <label htmlFor="telefono">Teléfono de Contacto:</label>
                <input type="tel" id="telefono" name="telefono" value={formData.telefono} onChange={handleChange} required />
            </div>
            <div>
                <label htmlFor="email">Mail de Contacto:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div>
                <label htmlFor="mensaje">Mensaje:</label>
                <textarea id="mensaje" name="mensaje" value={formData.mensaje} onChange={handleChange} required></textarea>
            </div>
            <button type="submit">ENVIAR</button>
        </form>
    )
}

export default Formulario