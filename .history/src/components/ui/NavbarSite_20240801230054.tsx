import { Navbar } from "flowbite-react";

export function NavbarSite() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Workers</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#">Settings</Navbar.Link>
        <Navbar.Link href="#">Log Out</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
