import { Button} from "flowbite-react";
import { Dropdown } from "flowbite-react";

export function Filters() {
  return (
    <>
        <Button size="sm" color="gray">Filters</Button>
        <div className="bg-slate-300 w-full">
            <Dropdown label="Dropdown button" dismissOnClick={false}>
                <Dropdown.Item>Dashboard</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Item>Earnings</Dropdown.Item>
                <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
        </div>
    </>
  );
}
