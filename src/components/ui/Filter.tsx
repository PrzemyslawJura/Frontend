import { Dropdown } from "flowbite-react";

export function Filters() {
  return (
    <>
            <div className="bg-slate-100 flex rounded p-5">
                <div className="mr-5 ml-5">
                    <Dropdown label="Dropdown button" dismissOnClick={false} color="gray">
                        <Dropdown.Item>Dashboard</Dropdown.Item>
                        <Dropdown.Item>Settings</Dropdown.Item>
                        <Dropdown.Item>Earnings</Dropdown.Item>
                        <Dropdown.Item>Sign out</Dropdown.Item>
                    </Dropdown>
                </div>
                <div>
                    <Dropdown label="Dropdown button" dismissOnClick={false} color="gray">
                        <Dropdown.Item>Dashboard</Dropdown.Item>
                        <Dropdown.Item>Settings</Dropdown.Item>
                        <Dropdown.Item>Earnings</Dropdown.Item>
                        <Dropdown.Item>Sign out</Dropdown.Item>
                    </Dropdown>
                </div>          
            </div>
    </>
  );
}
