import { Environment } from "../../../environment";
import { Api } from "../axios-config";


interface IListagemPessoa {
    id: number;
    nomeCompleto: string;
    email: string;
    cidadeId: number;
}
interface IDetalhePessoa {
    id: number;
    nomeCompleto: string;
    email: string;
    cidadeId: number;
}

type IPessoasComTotalCount = {
    data: IListagemPessoa[];
    totalCount: number;
}
const getAll = async (page = 1, filter = ""): Promise<IPessoasComTotalCount | Error> => {
    try {
        const urlRelativa = `/pessoas?_page=${page}&_limit=${Environment.LIMITE_DE_LINHAS}&nomeCompleto_like=${filter}`;
        const {data, headers} = await Api.get(urlRelativa);

        if (data) {
            return {
                data,
                totalCount: headers["x-total-count"] || Environment.LIMITE_DE_LINHAS,
            };
        }
        return new Error("Erro ao listar os registros.");
    } catch (error) {
        console.error(error);
        return new Error((error as {message: string}).message || "Erro ao listar os registros.");
    }
};

const getById = async (id: number): Promise<IDetalhePessoa | Error> => {
    try {
        const urlRelativa = `/pessoas/${id}`;
        const {data} = await Api.get(urlRelativa);

        if (data) {
            return data;
        }
        return new Error("Erro ao consultar registro.");
    } catch (error) {
        console.error(error);
        return new Error((error as {message: string}).message || "Erro ao consultar registro.");
    }
};

const create = async (dados: Omit<IDetalhePessoa, `id`>): Promise<number | Error> => {
    try {
        const urlRelativa = `/pessoas`;
        const {data} = await Api.post<IDetalhePessoa>(urlRelativa, dados);

        if (data) {
            return data.id;
        }
        return new Error("Erro ao criar registro.");
    } catch (error) {
        console.error(error);
        return new Error((error as {message: string}).message || "Erro ao criar registro.");
    }
};

const updateById = async (id: number, dados: IDetalhePessoa): Promise<void | Error> => {
    try {
        const urlRelativa = `/pessoas/${id}`;
        await Api.put<IDetalhePessoa>(urlRelativa, dados);

    } catch (error) {
        console.error(error);
        return new Error((error as {message: string}).message || "Erro ao atualizar registro.");
    }
};

const deleteById = async (id: number): Promise<void | Error> => {
    try {
        const urlRelativa = `/pessoas/${id}`;
        await Api.delete<IDetalhePessoa>(urlRelativa);

    } catch (error) {
        console.error(error);
        return new Error((error as {message: string}).message || "Erro ao excluir registro.");
    }
};

export const PessoasService = {
    getAll,
    create,
    getById,
    deleteById,
    updateById,
}