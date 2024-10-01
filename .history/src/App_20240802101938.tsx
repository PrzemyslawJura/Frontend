import Workers from './pages/Workers/Workers';
import Transactions from './pages/Transactions/Transactions';
import { Routes, Route } from 'react-router-dom';

export default function App() {
    return (
        <Routes>
          <Route path="" element={<Workers/>}/>
          <Route path="/a" element={<Transactions/>}/>
        </Routes>
    )
  }