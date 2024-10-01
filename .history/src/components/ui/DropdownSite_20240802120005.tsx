import { Dropdown } from "flowbite-react";

export function DropdownSite() {
  return (
    <Dropdown label="Sort" dismissOnClick={false}>
      <Dropdown.Item>Dashboard</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Item>Sign out</Dropdown.Item>
    </Dropdown>
  );
}