// == Import
import Header from 'src/components/Header';
import SearchBar from 'src/components/SearchBar';
import Message from 'src/components/Message';

import './styles.scss';

// == Component
function App() {
  return (
    <div className="app">
      <Header />
      <SearchBar />
      <Message />
    </div>
  );
}

// == Export
export default App;
