import { Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout";
import Connection from './routes/Connetion';
import Home from "./routes/Home";
import Rangkings from './routes/Rangkings';

function App() {
  return (
    <>
      <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rankings" element={<Rangkings />} />
        <Route path="/connection" element={<Connection />} />
      </Routes>
      </Layout>
    </>
  );
}

export default App;
