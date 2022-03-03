// == Import
import { useState } from 'react';
import axios from 'axios';
import Header from 'src/components/Header';
import SearchBar from 'src/components/SearchBar';
import Message from 'src/components/Message';
import ReposResults from 'src/components/ReposResults';

import './styles.scss';

// == Component
function App() {
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState('');

  const loadResults = () => {
    console.log(`calling API`);
  };

  return (
    <div className="app">
      <Header />
      <SearchBar
        inputValue={search}
        onInputChange={setSearch}
        onInputSubmit={loadResults}
      />
      <Message />
      <ReposResults />
    </div>
  );
}

// == Export
export default App;
