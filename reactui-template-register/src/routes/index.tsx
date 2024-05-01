import { Navigate, Route, Routes } from "react-router-dom";
import { useDrawerContext } from "../shared/contexts";
import { useEffect } from "react";
import { Dashboard, ListagemDePessoas } from "../pages";


export const AppRoutes = () => {
    const { setDrawerOptions } = useDrawerContext();
    useEffect(() => {
        /**
         * atualizar aqui os itens de menu
         */
        setDrawerOptions([
            {
                icon: "home",
                path: "/pagina-inicial",
                label: "Página Inicial",
            },
            {
                icon: "people",
                path: "/pessoas",
                label: "Pessoas",
            }
        ])
    })

    return (
        <Routes>
            <Route path="/pagina-inicial" element={<Dashboard />} />
            <Route path="/pessoas" element={<ListagemDePessoas />} />
            <Route path="*" element={<Navigate to="/pagina-inicial" />} />
        </Routes>
    )
}