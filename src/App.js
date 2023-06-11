import Layout from './component/Layout';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './dashboard';

function App() {
  return (
    <div>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </div>
  );
}

export default App;
