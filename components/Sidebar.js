import Image from "next/image";
import { useContext } from "react";
import QuioscoContext from "../context/QuioscoProvider";
import Categoria from "./Categoria";

const Sidebar = () => {
    const { categorias } = useContext(QuioscoContext);

    return (
        <div>
            <div className="px-5 pt-3">
                <Image width={300} height={100} src="/assets/img/logo.svg" alt="Imagen logotipo" />
            </div>

            <nav className="mt-10 md:h-full">
                {categorias.map(categoria => (
                    <Categoria
                        key={categoria.id}
                        categoria={categoria}
                    />
                ))}
            </nav>

        </div>
    );
}

export default Sidebar;