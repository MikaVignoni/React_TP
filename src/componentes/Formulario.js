import Adoptar from "../componentes/Adoptar";
import { useState } from 'react';
import styles from "../styles/Home.module.css";

const formulario = () => {
    const [formData, setFormData] = useState({
        nombreApellido: '',
        telefono: '',
        email: '',
        mensaje: ''
    });

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

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
    );
};

export default formulario