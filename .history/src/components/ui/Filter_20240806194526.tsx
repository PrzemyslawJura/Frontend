import { Button} from "flowbite-react";
import { Dropdown } from "flowbite-react";

export function Filters() {
  return (
    <>
        <div className="m-5">
            <div className="flex m-5">
                <div className="mr-5">
                    <Button size="sm" color="gray">Filters</Button>
                </div>
                <Button size="sm" color="gray">Sort</Button>
            </div>
            <div className="bg-slate-300 flex">
                <div className="mr-5">
                    <Dropdown label="Dropdown button" dismissOnClick={false}>
                        <Dropdown.Item>Dashboard</Dropdown.Item>
                        <Dropdown.Item>Settings</Dropdown.Item>
                        <Dropdown.Item>Earnings</Dropdown.Item>
                        <Dropdown.Item>Sign out</Dropdown.Item>
                    </Dropdown>
                </div>
                <div>
                    <Dropdown label="Dropdown button" dismissOnClick={false}>
                        <Dropdown.Item>Dashboard</Dropdown.Item>
                        <Dropdown.Item>Settings</Dropdown.Item>
                        <Dropdown.Item>Earnings</Dropdown.Item>
                        <Dropdown.Item>Sign out</Dropdown.Item>
                    </Dropdown>
                </div>
            </div>
        </div>
    </>
  );
}
