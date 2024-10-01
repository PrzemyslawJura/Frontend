import { Button} from "flowbite-react";
import { Dropdown } from "flowbite-react";
import { useState } from 'react';

export function Filters() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
      };

  return (
    <>
        <div className="m-5">
            <div className="flex m-5">
                <div className="mr-5">
                    <Button size="sm" color="gray" onClick={toggleVisibility}>Filters</Button>
                </div>
                <Button size="sm" color="gray">Sort</Button>
            </div>
            {isVisible && (
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
                <Button size="sm" className="ml-5" onClick={toggleVisibility}>Filter</Button>
            </div>
            )}
        </div>
    </>
  );
}
