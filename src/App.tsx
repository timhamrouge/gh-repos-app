import GlobalStyle from './globalStyles';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <GlobalStyle/>
    <Routes>
      <Route  path="/" element={<>hello world</>} />
    </Routes>
    </>
  );
}

export default App;
