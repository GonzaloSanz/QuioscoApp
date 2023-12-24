import { useContext } from "react";
import Layout from "../layout/layout";
import QuioscoContext from "../context/QuioscoProvider";
import { formatearDinero } from "../helpers";

export default function Total() {
    const { pedido, nombre, setNombre, total, colocarOrden } = useContext(QuioscoContext);

    const comprobarPedido = () => {
        return pedido.length === 0 || nombre === '' || nombre.length < 3;
    }

    return(
        <Layout pagina="Total y Confirmar Pedido">
            <h1 className="text-4xl font-black">Total y Confirmar Pedido</h1>
            <p className="text-2xl my-6">Confirma tu Pedido a Continuación</p>
        
            <form onSubmit={colocarOrden}>
                <div>
                    <label htmlFor="nombre" className="block uppercase text-slate-800 font-bold text-xl">Nombre:</label>
                
                    <input 
                        id="nombre"
                        type="text"
                        className="w-full lg:w-1/3 bg-gray-200 mt-3 px-3 py-2 rounded-md"
                        placeholder="Nombre"
                        value={nombre ?? ''}
                        onChange={ e => setNombre(e.target.value)}
                    />
                </div>

                <div className="mt-10">
                    <p className="text-2xl">Total a Pagar: <span className="font-bold">{formatearDinero(total)}</span></p>
                </div>

                <div>
                    <input 
                        type="submit"
                        value="Confirmar Pedido"
                        disabled={comprobarPedido()}
                        className={`${ comprobarPedido() ? 'bg-indigo-100' : 'bg-blue-600 hover:bg-blue-700'} w-full lg:w-auto transition-all cursor-pointer text-center mt-5 px-5 py-2 rounded-md uppercase font-bold text-white`}
                    />
                </div>
            </form>
        
        </Layout>
    );
}