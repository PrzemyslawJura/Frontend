import { FooterSite } from "../../components/ui/FooterSite"
import { NavbarSite } from "../../components/ui/NavbarSite"
import { SidebarSite } from "../../components/ui/SidebarSite"
import { TableSite } from "../../components/ui/TableSite"
import { PaginationSite } from "../../components/ui/PaginationSite"
import { SearchBar } from "../../components/ui/SearchBar"
import { Button} from "flowbite-react";
import { useEffect, useState } from 'react';
import { Filters } from "../../components/ui/Filter"

function Workers() {
  const [workers, setWorkers] = useState([]);
  const [keys, setKeys] = useState(['']);

  useEffect(() => {
    fetch('https://localhost:7189/Administrator/Workers')
      .then((res) => res.json())
      .then((result) => {
        setWorkers(result);
        console.log(result)
        setKeys(Object.keys({result}.result[0]));
        console.log(keys)
      });
  }, [])

  return (
    <>
      <div className="flex h-screen">
        <div className="w-1/5">
          <SidebarSite></SidebarSite>
        </div>
        <div className="flex flex-col h-screen justify-between w-4/5">
          <div>
            <NavbarSite></NavbarSite>
          </div>
          <div>
            <TableTest/>
            {/*<Filters/>
            <TableSite results={workers} keys={keys}/>
            <div className="mt-5">
              <PaginationSite/>
            </div>
            <div className="flex justify-between m-5">
              <SearchBar></SearchBar>
              <Button className="flex-1 m-5">Create new worker</Button>
            </div>
            */}
          </div>
          <div>
            <FooterSite></FooterSite>
          </div>
        </div>
      </div>
    </>
  )
}

export default Workers