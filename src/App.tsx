import GlobalStyle from './globalStyles';
import { Routes, Route } from 'react-router-dom';

import SearchPage from './components/pages/SearchPage';
import RepoPage from './components/pages/RepoPage';
import Header from './components/Header';


function App() {
  return (
    <>
    <GlobalStyle/>
    <Header/>
    <Routes>
      <Route path="/" element={<SearchPage/>} />
      <Route path="/repo/:repo_owner_name/:repo_name" element={<RepoPage/>}/>
    </Routes>
    </>
  );
}

export default App;
