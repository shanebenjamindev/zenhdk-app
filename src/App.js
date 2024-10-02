import { Suspense } from 'react';
import './App.css';
import { BrowserRouter, Routes } from 'react-router-dom';
import renderRoutes from './routes';

function App() {

  return (
    <div className="App">
      <Suspense fallback={<>Loading...</>}>
        <BrowserRouter>
          <Routes>
            {renderRoutes()}
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
