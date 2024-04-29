import { LayoutBaseDePagina } from "../../layouts/LayoutBaseDePagina";
import { FerramentasDeDetalhe } from "../../shared/components/ferramentas-de-detalhe/FerramentasDeDetalhe";

export const Dashboard: React.FC = () => {

    return (
        <LayoutBaseDePagina
            titulo="Página Inicial" 
            barraDeFerramentas={(
                <FerramentasDeDetalhe
                    mostrarBotaoSalvarEFechar
                />
                
            )}
        >
            testando
        </LayoutBaseDePagina>
    );
};