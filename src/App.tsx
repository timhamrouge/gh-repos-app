import GlobalStyle from './globalStyles';
import { Routes, Route } from 'react-router-dom';

import SearchPage from './components/pages/SearchPage';

function App() {
  return (
    <>
    <GlobalStyle/>
    <Routes>
      <Route path="/" element={<SearchPage/>} />
    </Routes>
    </>
  );
}

export default App;
