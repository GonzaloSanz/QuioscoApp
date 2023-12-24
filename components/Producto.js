import Image from "next/image";
import { formatearDinero } from "../helpers";
import { useContext } from "react";
import QuioscoContext from "../context/QuioscoProvider";

const Producto = ({ producto }) => {
    const { handleSetProducto, handleChangeModal } = useContext(QuioscoContext);
    const { nombre, imagen, precio } = producto;

    return (
        <div>
            <Image
                width={400}
                height={500}
                src={`/assets/img/${imagen}.jpg`}
                alt={`Imagen ${nombre}`}
                className="w-full"
            />

            <div className="p-4 border">
                <h2 className="text-2xl font-bold">{nombre}</h2>
                <p className="mt-5 font-black text-4xl text-red-600">
                    {formatearDinero(precio)}
                </p>

                <button
                    onClick={() => {
                        handleChangeModal();
                        handleSetProducto(producto);
                    }}
                    type="button"
                    className="w-full mt-5 p-3 rounded-md uppercase text-white font-bold bg-blue-600 hover:bg-blue-700 transition-all"
                >
                    Agregar
                </button>
            </div>
        </div>
    )
}

export default Producto