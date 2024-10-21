import { Label, Select } from "flowbite-react";
import { Checkbox, TextInput } from "flowbite-react";
import { FooterSite } from "../../components/ui/FooterSite"
import { NavbarSite } from "../../components/ui/NavbarSite"
import { SidebarSite } from "../../components/ui/SidebarSite"
import { useNavigate } from 'react-router-dom';
import { Button} from "flowbite-react";
import { Alert } from "flowbite-react";
import { useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function CreateTransaction() {
  const [products, setProducts] = useState([]);
  const [warehouses, setWarehouses] = useState([]);
  const [workers, setWorkers] = useState([]);
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    fetch('https://localhost:44308/Products')
    .then((res) => res.json())
    .then((result) => {
      setProducts(result)})

    fetch('https://localhost:44308/Administrator/WarehousesSizes')
      .then((res) => res.json())
      .then((result) => {
        setWarehouses(result)})

    fetch('https://localhost:44308/Administrator/Workers')
      .then((res) => res.json())
      .then((result) => {
          setWorkers(result)})
  }, [])

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      const response = await fetch('https://localhost:44308/Transactions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({  "productId":  (document.getElementById("form_productId") as HTMLInputElement).value,
                                "transactionQuantity": (document.getElementById("form_transactionQuantity") as HTMLInputElement).value,
                                "transactionType": (document.getElementById("form_transactionType") as HTMLInputElement).value,
                                "date":  (document.getElementById("form_date") as HTMLInputElement).value,
                                "warehouseSizeId": (document.getElementById("form_warehouseSizeId") as HTMLInputElement).value,
                                "sector": (document.getElementById("form_sector") as HTMLInputElement).value,
                                "rack":  (document.getElementById("form_rack") as HTMLInputElement).value,
                                "workerId": (document.getElementById("form_workerId") as HTMLInputElement).value}),
      });
      await response.json();

      if(response.status == 201)
        {
          (document.getElementById("alert") as HTMLInputElement).classList.remove("hidden")
          setTimeout(() => {
            navigate('/Transactions'); 
          }, 1200);
        }
    } catch (error) {
      console.error('Błąd:', error);
    }
  };

  return (
    <>
      <div>
        <NavbarSite/>
        <SidebarSite/>
        <div className="flex flex-col justify-between mt-20 lg:ml-80 mr-5 mb-24 ml-20">
          <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
            <div className="font-semibold text-xl">Create new transacton</div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="roles" value="Select product" />
                </div>
                <Select id="form_productId" required>
                  {products.map((product:any) =>
                  <option>{product.id}</option>)}
                </Select>
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="form" value="Transaction quantity" />
                </div>
                <TextInput id="form_transactionQuantity" type="text" placeholder="Transaction quantity" pattern="^[1-9][0-9]*$" required shadow />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="roles" value="Select transaction type" />
                </div>
                <Select id="form_transactionType" required>
                  <option>In</option>
                  <option>Out</option>
                </Select>
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="roles" value="Select transaction date" />
                </div>
                <DatePicker wrapperClassName="w-full" className="w-full border disabled:cursor-not-allowed disabled:opacity-50 border-gray-300 bg-gray-50 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 p-2.5 text-sm rounded-lg" id="form_date" dateFormat="yyyy-MM-dd" selected={startDate} onChange={(date:any) => setStartDate(date)} />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="roles" value="Select warehouse" />
                </div>
                <Select id="form_warehouseSizeId" required>
                  {warehouses.map((warehouse:any) =>
                  <option>{warehouse.id}</option>)}
                </Select>
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="form" value="Select warehouse sector"/>
                </div>
                <TextInput id="form_sector" type="text" placeholder="Warehouse sector" pattern="^[1-9][0-9]*$" required shadow />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="form" value="Select warehouse rack"/>
                </div>
                <TextInput id="form_rack" type="text" placeholder="Warehouse rack" pattern="^[1-9][0-9]*$" required shadow />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="roles" value="Select worker" />
                </div>
                <Select id="form_workerId" required>
                  {workers.map((worker:any) =>
                  <option>{worker.id}</option>)}
                </Select>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="agree" required/>
                <Label htmlFor="agree" className="flex">
                  I confirm that the data provided is true
                </Label>
              </div>
              <Button type="submit">Create new transaction</Button>
          </form>
          <div className="max-w-md mt-5">
            <Button color="failure" href="/Transactions">Back</Button>
          </div>
          <Alert color="success" className="mt-5 hidden" id="alert">
            <span className="font-medium text-lg">New transaction has been created!</span>
          </Alert>
        </div>
        <FooterSite/>
      </div>
    </>
  )
}

export default CreateTransaction