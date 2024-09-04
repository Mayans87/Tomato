import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#33c7ff',
        },
        secondary:{
            main: '#2f9cc6'
        },
        black:{
             main: '#242B2E'
        },
        background:{
                main: '#000000',
                default: '#0D0D0D',
                paper: '#0D0D0D',
        },
        textColor: {
            main: '#111111'
        }
    },
    
});