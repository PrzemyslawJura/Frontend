import Workers from './pages/Workers/Workers';
import Transactions from './pages/Transactions/Transactions';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App: React.FC = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Workers/>} />
			<Route path="users/:id" element={<Transactions />} />
		</Routes>
	</BrowserRouter>
);
