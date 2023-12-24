import { useContext } from "react";
import Layout from "../layout/layout";
import QuioscoContext from "../context/QuioscoProvider";
import Producto from "../components/Producto";

export default function Home() {
  const { categoriaActual } = useContext(QuioscoContext);

  return (
    <Layout pagina={`Menú ${categoriaActual?.nombre}`}>
      <h1 className="text-4xl font-black">{categoriaActual?.nombre}</h1>
      <p className="text-2xl my-5">Elige y personaliza tu pedido a continuación</p>

      <div className="grid gap-4 lg:gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {categoriaActual?.productos?.map(producto => (
          <Producto
            key={producto.id}
            producto={producto}
          />
        ))}
      </div>
    </Layout>
  )
}
