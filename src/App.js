import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './theme/DarkTheme'
import Homepage from './pages/homepage'


function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <div className="text-3xl">
       <Homepage/>
      </div>
      </ThemeProvider>
      );
}
export default App;
