import { useNavigate, useParams } from "react-router-dom";
import { LayoutBaseDePagina } from "../../layouts";
import { FerramentasDeDetalhe } from "../../shared/components";
import { useEffect, useState } from "react";
import { PessoasService } from "../../shared/services/api/pessoas/PessoasService";
import { Form } from "@unform/web";
import { VTextField } from "../../shared/forms";


export const DetalheDePessoas: React.FC = () => {

    const { id = 'novo' } = useParams<'id'>();
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [nome, setNome] = useState('');

    useEffect(() => {
        if (id !== 'novo') {
            setIsLoading(true);

            PessoasService.getById(Number(id))
                .then((result) => {
                    setIsLoading(false);

                    if (result instanceof Error) {
                        alert(result.message)
                        navigate('/pessoas')
                    } else {
                        console.log(result);
                    }
                })
        }
    }, [id])
    const handleSave = () => {

    }
    const handleDelete = (id: number) => {
    // eslint-disable-next-line no-restricted-globals
      if (window.confirm('Realmente deseja excluir?')) {
          PessoasService.deleteById(id)
              .then(result => {
                  if (result instanceof Error) {
                      alert(result.message);
                  } else {

                      alert('Registro apagado com sucesso!');
                      navigate('/pessoas');
                  }
              });
      }
  };

    return (
        <LayoutBaseDePagina
            titulo={id === 'novo' ? 'Novo item' : nome}
            barraDeFerramentas={
                <FerramentasDeDetalhe
                    textoBotaoNovo='ADD Novo item'
                    mostrarBotaoSalvarEFechar
                    mostrarBotaoNovo={id !== 'novo'}
                    mostrarBotaoApagar={id !== 'novo'}

                    aoClicarEmSalvar={() => { }}
                    aoClicarEmSalvarEFechar={() => handleSave}
                    aoClicarEmApagar={() => handleDelete(Number(id))}
                    aoClicarEmNovo={() => navigate('/pessoas/detalhe/novo')}
                    aoClicarEmVoltar={() => navigate('/pessoas')}


                />
            }
        >

            {/* <Form onSubmit={(dados) => console.log(dados)}>
                <VTextField name="nomeCompleto"/>
                <VTextField name="email"/>
                <VTextField name="cidadeId"/>

                <button type='submit'>Submit</button>
            </Form> */}

            <p>DetalheDePessoas {id}</p>
        </LayoutBaseDePagina>

    );
};
