import { useSearchParams } from "react-router-dom";
import { FerramentasDaListagem } from "../../shared/components";
import { useEffect, useMemo } from "react";
import { PessoasService } from "../../shared/services/api/pessoas/PessoasService";
import { LayoutBaseDePagina } from "../../layouts";

export const ListagemDePessoas: React.FC = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const busca = useMemo(() =>{
        return searchParams.get(`busca`) || ``;
    }, [searchParams]);


    useEffect(() => {
        PessoasService.getAll(1, busca)
            .then((result) => {
                if (result instanceof Error) {
                    alert(result.message);
                } else {
                    console.log(result);
                }
            });
    }, []);

    return (
        <LayoutBaseDePagina
            titulo="Listagem de pessoas"
            barraDeFerramentas={
                <FerramentasDaListagem
                    textoBotaoNovo="Nova"
                    mostrarInputBusca
                    textoDaBusca={busca}
                    aoMudarTextoDaBusca={texto => setSearchParams({busca: texto},{replace: true})}
                />
            }
        >
            testando
        </LayoutBaseDePagina>
    );
}