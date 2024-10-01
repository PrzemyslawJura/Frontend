import { Navbar } from "flowbite-react";

export function NavbarSite() {
  return (
    <Navbar fluid rounded className="bg-cyan-700">
      <Navbar.Brand href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-2xl font-bold text-white">Workers</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#" className="text-white font-semibold">Settings</Navbar.Link>
        <Navbar.Link href="#" className="text-white font-semibold">Log Out</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
