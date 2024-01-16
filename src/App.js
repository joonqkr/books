import './App.css';
import ThemeProvider from '@mui/material/AppBar';
import CssBaseline from '@mui/material/AppBar';
import TopBar from './components/TopBar';

function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <TopBar/>
      <main>
        {/* Hero unit */}
      </main>
      {/* Footer */}
      
      {/* End footer */}
    </ThemeProvider>
  );
}

export default App;
