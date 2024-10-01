import { Button, Navbar } from "flowbite-react";

export function NavbarSite() {
  return (
    <Navbar fluid rounded className="bg-cyan-700">
      <Navbar.Brand href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-2xl font-bold text-white">Workers</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <div className="font-semibold">
          <Button>Settings</Button>
        </div>
        <div>
          <Button>Log Out</Button>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}
