// == Import
import { useState } from 'react';
import axios from 'axios';
import Header from 'src/components/Header';
import SearchBar from 'src/components/SearchBar';
import Message from 'src/components/Message';
import ReposResults from 'src/components/ReposResults';

import './styles.scss';

function filterResults(items) {
  return items.map((item) => ({
    id: item.id,
    title: item.full_name,
    imageUrl: item.owner.avatar_url,
    owner: item.owner.login,
    description: item.description,
  }));
}

// == Component
function App() {
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState('');

  const loadResults = async () => {
    try {
      const response = await axios.get(`https://api.github.com/search/repositories?q=${search}`);
      setResults(response.data.items);
    }
    catch (error) {
      console.error(error);
    }
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
      <ReposResults results={filterResults(results)} />
    </div>
  );
}

// == Export
export default App;
