import Image from "next/image";
import { formatearDinero } from "../helpers";
import axios from "axios";
import { toast } from "react-toastify";

export default function Orden({ orden }) {
    const { id, nombre, total, pedido } = orden;

    const completarOrden = async (id) => {
        try {
            await axios.post(`/api/ordenes/${id}`);
            toast.success('¡Orden Preparada!');

        } catch (error) {
            toast.error('Hubo un error');
        }
    }

    return (
        <div className="border p-10 space-y-5">
            <h2 className="text-2xl font-bold">Orden: {id}</h2>
            <p className="text-lg font-bold">Cliente: {nombre}</p>

            <div>
                {pedido.map(producto => (
                    <div key={producto.id} className="py-3 flex border-b last-of-type:border-0 items-center">
                        <div className="w-32">
                            <Image
                                width={400}
                                height={500}
                                src={`/assets/img/${producto.imagen}.jpg`}
                                alt={`Imagen producto ${producto.nombre}`}
                            />
                        </div>

                        <div className="p-5 space-y-2">
                            <h3 className="text-xl font-bold">{producto.nombre}</h3>
                            <p className="text-lg font-bold text-amber-600">Cantidad: {producto.cantidad}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="lg:flex lg:items-center lg:justify-between my-10">
                <p className="mt-5 font-bold text-3xl">
                    Total a Pagar: <span className="text-red-600">{formatearDinero(total)}</span>
                </p>

                <button
                    onClick={() => completarOrden(id)}
                    type="button"
                    className="bg-blue-600 hover:bg-blue-700 transition-all text-white mt-5 lg:mt-0 px-8 py-2 uppercase font-bold rounded-md"
                >
                    Completar Orden
                </button>
            </div>
        </div>
    )
}
