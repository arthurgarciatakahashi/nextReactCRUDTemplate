import { Box, Button, Divider, Icon, Paper, Skeleton, Theme, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

interface IFerramentasDeDetalheProps {
    textoBotaoNovo?: string;
    mostrarBotaoNovo?: boolean;
    mostrarBotaoApagar?: boolean;
    mostrarBotaoSalvar?: boolean;
    mostrarBotaoVoltar?: boolean;
    mostrarBotaoSalvarEFechar?: boolean;

    mostrarBotaoNovoCarregando?: boolean;
    mostrarBotaoApagarCarregando?: boolean;
    mostrarBotaoSalvarCarregando?: boolean;
    mostrarBotaoVoltarCarregando?: boolean;
    mostrarBotaoSalvarEFecharCarregando?: boolean;

    aoClicarEmNovo?: () => void;
    aoClicarEmVoltar?: () => void;
    aoClicarEmApagar?: () => void;
    aoClicarEmSalvar?: () => void;
    aoClicarEmSalvarEFechar?: () => void;
}

export const FerramentasDeDetalhe: React.FC<IFerramentasDeDetalheProps> = ({
    textoBotaoNovo = "Novo",
    mostrarBotaoNovo = true,
    mostrarBotaoApagar = true,
    mostrarBotaoSalvar = true,
    mostrarBotaoVoltar = true,
    mostrarBotaoSalvarEFechar = false,

    mostrarBotaoNovoCarregando = false,
    mostrarBotaoApagarCarregando = false,
    mostrarBotaoSalvarCarregando = false,
    mostrarBotaoVoltarCarregando = false,
    mostrarBotaoSalvarEFecharCarregando = false,

    aoClicarEmNovo,
    aoClicarEmVoltar,
    aoClicarEmApagar,
    aoClicarEmSalvar,
    aoClicarEmSalvarEFechar
}) => {
    const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
    const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

    const theme = useTheme();
    return (
        <Box
            height={theme.spacing(5)}
            marginX={1}
            padding={1}
            paddingX={2}
            display="flex"
            gap={1}
            alignItems="center"
            component={Paper}
        >
            {mostrarBotaoSalvar && !mostrarBotaoSalvarCarregando && (<Button
                variant="contained"
                color="primary"
                disableElevation
                onClick={aoClicarEmSalvar}
                startIcon={<Icon>save</Icon>}
            >
                <Typography variant="button" whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
                    Salvar
                </Typography>
            </Button>)}
            {mostrarBotaoSalvarCarregando && (<Skeleton width={110} height={60} />)}

            {mostrarBotaoSalvarEFechar && !mostrarBotaoSalvarEFecharCarregando && !smDown && !mdDown && (<Button
                variant="outlined"
                color="primary"
                disableElevation
                onClick={aoClicarEmSalvarEFechar}
                startIcon={<Icon>save</Icon>}
            >
                <Typography variant="button" whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
                    Salvar e Fechar
                </Typography>

            </Button>)}
            {(mostrarBotaoSalvarEFecharCarregando && !smDown && !mdDown) && (<Skeleton width={180} height={60} />)}

            {mostrarBotaoApagar && !mostrarBotaoApagarCarregando && !smDown && (<Button
                variant="outlined"
                color="primary"
                disableElevation
                onClick={aoClicarEmApagar}
                startIcon={<Icon>delete</Icon>}
            >
                <Typography variant="button" whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
                    Apagar
                </Typography>

            </Button>)}
            {(mostrarBotaoApagarCarregando && !smDown) && (<Skeleton width={110} height={60} />)}

            {mostrarBotaoNovo && !mostrarBotaoNovoCarregando && (<Button
                variant="outlined"
                color="primary"
                disableElevation
                onClick={aoClicarEmNovo}
                startIcon={<Icon>add</Icon>}
            >
                <Typography variant="button" whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
                    {textoBotaoNovo}
                </Typography>
            </Button>)}
            {mostrarBotaoNovoCarregando && (<Skeleton width={110} height={60} />)}

            {(
                mostrarBotaoVoltar &&
                (mostrarBotaoNovo || mostrarBotaoApagar || mostrarBotaoSalvar || mostrarBotaoSalvarEFechar)
            ) &&
                (<Divider variant="middle" orientation="vertical" />)
            }

            {mostrarBotaoVoltar && !mostrarBotaoVoltarCarregando && (<Button
                variant="outlined"
                color="primary"
                disableElevation
                onClick={aoClicarEmVoltar}
                startIcon={<Icon>arrow_back</Icon>}
            >
                <Typography variant="button" whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
                    Voltar
                </Typography>
            </Button>)}
            {mostrarBotaoVoltarCarregando && (<Skeleton width={110} height={60} />)}

        </Box>
    );
};