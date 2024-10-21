import { Dropdown } from "flowbite-react";

export function Filters() {
  return (
    <>
        <div className="bg-slate-100 flex rounded mr-5">
            <div className="mr-5 ml-5">
                <Dropdown label="Dropdown button" dismissOnClick={false} color="gray">
                    <Dropdown.Item>One</Dropdown.Item>
                    <Dropdown.Item>Two</Dropdown.Item>
                </Dropdown>
            </div>
            <div>
                <Dropdown label="Dropdown button" dismissOnClick={false} color="gray">
                    <Dropdown.Item>One</Dropdown.Item>
                    <Dropdown.Item>Two</Dropdown.Item>
                </Dropdown>
            </div>          
        </div>
    </>
  );
}
