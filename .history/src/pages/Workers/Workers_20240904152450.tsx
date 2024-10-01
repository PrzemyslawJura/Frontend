import { FooterSite } from "../../components/ui/FooterSite"
import { NavbarSite } from "../../components/ui/NavbarSite"
import { SidebarSite } from "../../components/ui/SidebarSite"
import { TableSite } from "../../components/ui/TableSite"
import { PaginationSite } from "../../components/ui/PaginationSite"
import { SearchBar } from "../../components/ui/SearchBar"
import { Button} from "flowbite-react";
import { useEffect, useState } from 'react';
import { Filters } from "../../components/ui/Filter"
import { TableTest } from "../../components/ui/TableTest"
import DataTable from "react-data-table-component";
import { Button, TextInput } from "flowbite-react";

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

  const columns = [
    {
      name: 'Title',
      selector: (row:any) => row.id,
      sortable: true,
    },
    {
      name: 'Director',
      selector: (row:any) => row.director,
      sortable: true,
    },
    {
      name: 'Year',
      selector: (row:any) => row.year,
      sortable: true,
    },
  ];

  function handleFilter(event:any) {
    const newData = records.filter((row:any) => {
      return row.name.toLowerCase().includes(event.target.value.toLowerCase())
    })
    setRecords(newData)
  }

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
          <TextInput id="search" type="text" placeholder="..." required  className="flex-1"/>
          <DataTable title="Workers" columns={columns} data={workers} pagination />
            
            {/*<Filters/>
            <TableTest results={workers} keys={columns}/>
            <TableSite results={workers} keys={keys}/>
            <div className="mt-5">
              <PaginationSite/>
            </div>
            <div className="flex justify-between m-5">
              
              <Button className="flex-1 m-5">Create new worker</Button>
            </div>*/}
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