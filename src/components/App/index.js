// == Import
import Header from 'src/components/Header';
import SearchBar from 'src/components/SearchBar';

import './styles.scss';

// == Component
function App() {
  return (
    <div className="app">
      <Header />
      <SearchBar />
    </div>
  );
}

// == Export
export default App;
