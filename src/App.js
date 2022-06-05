import './App.css';
import TodoApp from "./Components/TodoApp";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});
function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <Box sx={{display: "flex", justifyContent: "center", marginTop: "5rem",}}>
                < TodoApp />
            < /Box>
        </ThemeProvider>

);
}

export default App;
