import { Label, Select } from "flowbite-react";
import { Checkbox, TextInput } from "flowbite-react";
import { FooterSite } from "../../components/ui/FooterSite"
import { NavbarSite } from "../../components/ui/NavbarSite"
import { SidebarSite } from "../../components/ui/SidebarSite"
import { useNavigate } from 'react-router-dom';
import { Button} from "flowbite-react";
import { Alert } from "flowbite-react";
import { useEffect, useState } from 'react';

function CreateWarehouseRack() {
  const [warehouses, setWarehouses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://localhost:44308/Administrator/WarehousesSizes')
      .then((res) => res.json())
      .then((result) => {
        setWarehouses(result);
      });
  }, [])

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      const response = await fetch('https://localhost:44308/WarehouseRacks/WarehouseRack', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({  "sector":  (document.getElementById("form_sector") as HTMLInputElement).value,
                                "rack": (document.getElementById("form_rack") as HTMLInputElement).value,
                                "quantity": (document.getElementById("form_quantity") as HTMLInputElement).value,
                                "warehouseSizeId": (document.getElementById("form_warehouseSizeId") as HTMLInputElement).value}),
      });
      await response.json();

      if(response.status == 201)
        {
          (document.getElementById("alert") as HTMLInputElement).classList.remove("hidden")
          setTimeout(() => {
            navigate('/WarehouseRack'); 
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
            <div className="font-semibold text-xl">Create new warehouse rack </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="form" value="Sector" />
                </div>
                <TextInput id="form_sector" type="text" placeholder="Sector" pattern="^[1-9][0-9]*$" required shadow />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="form" value="Rack" />
                </div>
                <TextInput id="form_rack" type="text" placeholder="Rack" pattern="^[1-9][0-9]*$" required shadow />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="form" value="Quantity" />
                </div>
                <TextInput id="form_quantity" type="text" placeholder="Quantity" pattern="^[1-9][0-9]*$" required shadow />
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
              <div className="flex items-center gap-2">
                <Checkbox id="agree" required/>
                <Label htmlFor="agree" className="flex">
                  I confirm that the data provided is true
                </Label>
              </div>
              <Button type="submit">Create new warehouse rack</Button>
          </form>
          <div className="max-w-md mt-5">
            <Button color="failure" href="/WarehouseRacks">Back</Button>
          </div>
          <Alert color="success" className="mt-5 hidden" id="alert">
            <span className="font-medium text-lg">New warehouse rack has been created!</span>
          </Alert>
        </div>
        <FooterSite/>
      </div>
    </>
  )
}

export default CreateWarehouseRack