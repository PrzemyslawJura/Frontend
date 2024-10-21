import { Navbar } from "flowbite-react";
import image from '../../assets/logo.png'

export function NavbarSite({tableName}:any) {
  return (
    <Navbar fluid className="bg-cyan-700 h-16 fixed top-0 w-full z-50">
      <Navbar.Brand href="/Transactions">
        <img src={image} alt="logo" width="50" className="mr-5" /> 
        <span className="text-4xl font-bold text-white font-sans">Warehouse::</span> 
        <span className="text-4xl text-white font-sans">{tableName}</span>
      </Navbar.Brand>
    </Navbar>
  );
}
