import Workers from './pages/Workers/Workers';
import CreateWorker from './pages/Workers/CreateWorker';
import EditWorker from './pages/Workers/EditWorker';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Transactions from './pages/Transactions/Transactions';
import CreateTransaction from './pages/Transactions/CreateTransaction';
import EditTransaction from './pages/Transactions/EditTransaction';
import Products from './pages/Products/Products';
import CreateProduct from './pages/Products/CreateProduct';
import EditProduct from './pages/Products/EditProduct';
import Warehouses from './pages/Warehouses/Warehouses';
import CreateWarehouse from './pages/Warehouses/CreateWarehouse';
import EditWarehouse from './pages/Warehouses/EditWarehouse';
import WarehouseRacks from './pages/WarehouseRacks/WarehouseRacks';
import CreateWarehouseRack from './pages/WarehouseRacks/CreateWarehouseRack';
import EditWarehouseRack from './pages/WarehouseRacks/EditWarehouseRack';


export default function App() {
    return (
        <Routes>
            <Route path="" element={<Login/>}/>

            <Route path="/Transactions" element={<Transactions/>}/>
            <Route path="/CreateTransaction" element={<CreateTransaction/>}/>
            <Route path="/EditTransaction" element={<EditTransaction/>}/>

            <Route path="/Products" element={<Products/>}/>
            <Route path="/CreateProduct" element={<CreateProduct/>}/>
            <Route path="/EditProduct" element={<EditProduct/>}/>

            <Route path="/Warehouses" element={<Warehouses/>}/>
            <Route path="/CreateWarehouse" element={<CreateWarehouse/>}/>
            <Route path="/EditWarehouse" element={<EditWarehouse/>}/>

            <Route path="/WarehouseRacks" element={<WarehouseRacks/>}/>
            <Route path="/CreateWarehouseRack" element={<CreateWarehouseRack/>}/>
            <Route path="/EditWarehouseRack" element={<EditWarehouseRack/>}/>

            <Route path="/Workers" element={<Workers/>}/>
            <Route path="/CreateWorker" element={<CreateWorker/>}/>
            <Route path="/EditWorker" element={<EditWorker/>}/>
        </Routes>
    )
  }