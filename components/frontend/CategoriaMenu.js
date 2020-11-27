import React from 'react';

const CategoriaMenu = ({categoria}) => {
    const { id } = categoria;
    const { nombre } = categoria.data();
    return(
        <option value={id}>{nombre}</option>
    );
}

export default CategoriaMenu;