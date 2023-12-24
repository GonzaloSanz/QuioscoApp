import Image from 'next/image';
import React, { useContext } from 'react'
import QuioscoContext from '../context/QuioscoProvider';

const Categoria = ({ categoria }) => {
    const { categoriaActual, handleClickCategoria } = useContext(QuioscoContext);

    const { nombre, icono, id } = categoria;
    return (
        <button
            onClick={() => handleClickCategoria(id)}
            type='button'
            className={`w-full flex items-center gap-4 border p-5 ${categoriaActual?.id === id ? 'bg-amber-400' : ''} hover:bg-amber-400 hover:cursor-pointer transition-all`}
        >
            <Image
                width={60}
                height={60}
                src={`/assets/img/icono_${icono}.svg`}
                alt='Imagen Icono'
            />

            <span className='text-2xl font-bold'>{nombre}</span>
        </button>
    )
}

export default Categoria;