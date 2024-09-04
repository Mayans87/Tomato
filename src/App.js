import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './theme/DarkTheme'


function App() {
  return (//32:00
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <div className="text-3xl">
        Hello World
      </div>
      </ThemeProvider>
      );
}
export default App;
