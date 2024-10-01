import { Button} from "flowbite-react";
import { Dropdown } from "flowbite-react";
import { useState } from 'react';

export function Filters() {
    const [isVisibleFilters, setIsVisibleFilters] = useState(false);

    const toggleVisibilityFilters = () => {
        setIsVisibleFilters(!isVisibleFilters);
      };

  return (
    <>

            <div className="flex">
                <div className="mr-5">
                    <Button size="sm" color="gray" onClick={toggleVisibilityFilters}>Filters</Button>
                </div>
            </div>
            {isVisibleFilters && (
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
                <Button size="sm" className="ml-5" onClick={toggleVisibilityFilters}>Filter</Button>
            </div>
            )}
    </>
  );
}
