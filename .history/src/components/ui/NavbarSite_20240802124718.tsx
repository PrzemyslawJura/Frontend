import { Button, Navbar } from "flowbite-react";

export function NavbarSite() {
  return (
    <Navbar fluid rounded className="bg-cyan-700">
      <Navbar.Brand href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-2xl font-bold text-white">Workers</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Button>Settings</Button>
        <Button>Log Out</Button>
      </Navbar.Collapse>
    </Navbar>
  );
}
