import { ThemeContext } from "@emotion/react";
import { DarkTheme, LightTheme } from "../themes";
import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { Box } from "@mui/system";
import { ThemeProvider } from "@mui/material";


interface IThemeContextData {
    themeName: "light" | "dark";
    toggleTheme: () => void;
}

interface IThemeProviderProps {
    children: React.ReactNode
}

const themeContext = createContext({} as IThemeContextData);

export const useAppThemeContext = () => {
    return useContext(themeContext);
}

export const AppThemeProvider: React.FC<IThemeProviderProps> = ({ children }) => {
    const [themeName, setThemeName] = useState<"light" | "dark">("light");
    const toggleTheme = useCallback(() => {
        setThemeName(oldThemeName => oldThemeName === "light" ? "dark" : "light");
    }, []);

    const theme = useMemo(() => {
        if (themeName === "light") return LightTheme;
        return DarkTheme;
        
    }, [themeName]);

    return (
        <ThemeContext.Provider value={{ themeName, toggleTheme }}>
            <ThemeProvider theme={theme}>
                <Box width="100vw" height="100vh" bgcolor={theme.palette.background.default}>
                    {children}
                </Box>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}

