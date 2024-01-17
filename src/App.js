import './App.css';
import ThemeProvider from '@mui/material/AppBar';
import CssBaseline from '@mui/material/AppBar';
import TopBar from './components/TopBar';
import BookCard from './components/BookCard';

import DATA from './data/books.json';

const books = DATA['books'];

function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <TopBar/>
      {books.map(book => {
        return <BookCard book={book}/>
      })}
    </ThemeProvider>
  );
}

export default App;
