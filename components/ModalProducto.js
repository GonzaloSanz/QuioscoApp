import Image from "next/image";
import { useState, useEffect, useContext } from "react";
import QuioscoContext from "../context/QuioscoProvider";
import { formatearDinero } from "../helpers";

const ModalProducto = () => {
    const { producto, handleChangeModal, handleAgregarPedido, pedido } = useContext(QuioscoContext);
    const [cantidad, setCantidad] = useState(1);
    const [edicion, setEdicion] = useState(false);

    useEffect(() => {
        // Comprobar si el producto del modal está en el pedido
        if (pedido.some(productoState => productoState.id === producto.id)) {
            const productoEdicion = pedido.find(productoState => productoState.id === producto.id);

            setEdicion(true);
            setCantidad(productoEdicion.cantidad);
        }

    }, [producto, pedido]);

    return (
        <div>
            <div className="flex justify-end mb-4 md:mb-0">
                <button
                    type="button"
                    onClick={() => handleChangeModal()}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <div className="md:flex gap-10">
                <div className="md:w-1/3">
                    <Image
                        width={300}
                        height={400}
                        src={`/assets/img/${producto.imagen}.jpg`}
                        alt={`Imagen producto ${producto.nombre}`}
                        className="w-full"
                    />
                </div>

                <div className="md:w-2/3">
                    <h1 className="text-3xl font-bold mt-5">{producto.nombre}</h1>
                    <p className="mt-5 font-black text-5xl text-red-600">
                        {formatearDinero(producto.precio)}
                    </p>

                    <div className="flex items-center gap-4 mt-8">
                        <button
                            type="button"
                            onClick={() => {
                                if (cantidad <= 1) return;

                                setCantidad(cantidad - 1);
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                        </button>

                        <p className="text-3xl">{cantidad}</p>

                        <button
                            type="button"
                            onClick={() => {
                                if (cantidad >= 10) return;

                                setCantidad(cantidad + 1);
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                    </div>

                    <button
                        onClick={() => handleAgregarPedido({ ...producto, cantidad })}
                        type="button"
                        className="bg-blue-600 hover:bg-blue-700 transition-all px-5 py-2 mt-5 text-white font-bold rounded-md uppercase"
                    >
                        {edicion ? 'Guardar Cambios' : 'Añadir al Pedido'}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ModalProducto;