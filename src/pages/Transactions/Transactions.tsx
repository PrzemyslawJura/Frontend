import { FooterSite } from "../../components/ui/FooterSite"
import { NavbarSite } from "../../components/ui/NavbarSite"
import { SidebarSite } from "../../components/ui/SidebarSite"
import { DeleteModal } from "../../components/ui/DeleteModal"
import { Button} from "flowbite-react";
import { useEffect, useState } from 'react';
import { Filters } from "../../components/ui/Filter"
import DataTable from "react-data-table-component";
import { useNavigate } from 'react-router-dom';

function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [value, setValue] = useState("");
  const [results, setResults] = useState([]);
  const [isDeleteOpen, setDeleteOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [isVisibleFilters, setIsVisibleFilters] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://localhost:44308/Transactions')
      .then((res) => res.json())
      .then((result) => {
        setTransactions(result);
        setResults(result);
      });
  }, [])

  const handleTransactionClick = (id:any) => {
    navigate('/EditTransaction', { state: { TransactionId: id } });
  };

  const handleDeleteTransactionClick = (id:any) => {
    setDeleteOpen(true)
    setDeleteId(id); 
  };

  const customStyles = {
    rows: {
      style: {
        '@media (max-width: 640px)': { 
          display: 'block',
        },
      },
    },
    headCells: {
      style: {
        paddingLeft: '8px', 
        paddingRight: '8px',
        backgroundColor: 'rgba(240, 240, 240, 0.9)',
        fontWeight: '600',
        fontSize: '14px',
        '@media (max-width: 640px)': { 
          paddingLeft: '8px', 
          paddingRight: '8px',
        },
      },
    },
    cells: {
      style: {
        div: {
          whiteSpace: 'normal !important',
        },
        paddingLeft: '8px',
        paddingRight: '8px',
        '@media (max-width: 1100px)': { 
          paddingLeft: '8px', 
          paddingRight: '0px',
        },
        '@media (max-width: 640px)': { 
          minWidth: 'auto !important',
          fontWeight: '600',
        },
      },
    },
};

  const columns = [
    {
      name: 'Id',
      selector: (row:any) => row.transactionId,
      sortable: true,
    },
    {
      name: 'Transaction Quantity',
      selector: (row:any) => row.transactionQuantity,
      sortable: true,
    },
    {
      name: 'Transaction Type',
      selector: (row:any) => row.transactionType,
      sortable: true,
    },
    {
      name: 'Date',
      selector: (row: any) => {
        const date = new Date(row.date);
        return date.toISOString().split('T')[0];
      },
      sortable: true,
    },
    {
      name: 'Product Id',
      selector: (row:any) => row.productId,
      sortable: true,
    },
    {
      name: 'Warehouse Name',
      selector: (row:any) => row.warehouseName,
      sortable: true,
    },
    {
      name: 'Sector',
      selector: (row:any) => row.sector,
      sortable: true,
    },
    {
      name: 'Rack',
      selector: (row:any) => row.rack,
      sortable: true,
    },
    {
      name: 'Worker Id',
      selector: (row:any) => row.workerId,
      sortable: true,
    },
    {
      name: '',
      left: true,
      cell: (row:any, column:any,) => (
        column = 
          <div>
            <Button onClick={() => handleTransactionClick(row.transactionId)} className="h-[28px] w-20 mr-5 text-center flex items-center font-semibold m-1" >Edit</Button>
            <Button onClick={() => handleDeleteTransactionClick(row.transactionId)} color="failure" className="h-[28px] w-20 text-center flex items-center font-semibold m-1" >Delete</Button>
          </div>
      )
    },
  ];

  function handleFilter(event:any) {
    const newData = transactions.filter((row:any) => {
      return row.id.toLowerCase().includes(event.target.value.toLowerCase())
    })
    setValue(event.target.value)
    setResults(newData)
  }

  function onClear() {
    setValue("");
    return  setResults(transactions)
  }

  const toggleVisibilityFilters = () => {
    setIsVisibleFilters(!isVisibleFilters);
  };

  return (
    <>
      <div>
        <NavbarSite tableName="Transactions"/>
        <SidebarSite activeSidebarItem="0"/>
        <div className="flex flex-col justify-between mt-16 lg:mt-0 lg:ml-80 mr-5 mb-24 ml-5">
          <div>
            <div className="flex lg:mt-24 mt-5 mb-5 ml-12 lg:ml-0">
            <Button className="h-[34px] w-14 rounded-[5px] text-center flex items-center font-semibold mr-5" color="gray" onClick={toggleVisibilityFilters}>Filters</Button>
            <input className="h-[34px] w-48 rounded-l-[5px] rounded-r-none border border-solid border-gray-300" onChange={handleFilter} id="search" type="text" placeholder="Search By Id" required value={value}/>
            <Button className="h-[34px] w-14 rounded-r-[5px] rounded-l-none text-center flex items-center font-semibold" type="button" onClick={onClear}>
              Clear
            </Button>
            </div>
            {isVisibleFilters && (
              <div className="bg-slate-100 flex rounded p-5 my-5">
            <Filters/>
            <Button className="h-[42px] w-14 rounded-[5px] text-center flex items-center font-semibold" onClick={toggleVisibilityFilters}>Filter</Button>
            </div>
            )}
            <DataTable columns={columns} data={results} 		
                pagination
                customStyles={customStyles}/>
            <Button className="flex-1 my-5 font-semibold" href="/CreateTransaction">Create new transaction</Button>
          </div>
          {isDeleteOpen && <DeleteModal id={deleteId} setDeleteOpen={setDeleteOpen}  table="Transactions/"/>}
        </div>
        <FooterSite/>
      </div>
    </>
  )
}

export default Transactions