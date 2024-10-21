import { Label } from "flowbite-react";
import { Checkbox, TextInput } from "flowbite-react";
import { FooterSite } from "../../components/ui/FooterSite"
import { NavbarSite } from "../../components/ui/NavbarSite"
import { SidebarSite } from "../../components/ui/SidebarSite"
import { Button} from "flowbite-react";
import { useLocation, useNavigate } from 'react-router-dom';
import { Alert } from "flowbite-react";

function EditWarehouse() {
    const location = useLocation();
    const navigate = useNavigate();
    const { WarehouseId } = location.state;

    const handleSubmit = async (e:any) => {
      e.preventDefault();
      try {
        const response = await fetch('https://localhost:44308/Administrator/WarehouseSize', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({  "id": WarehouseId,
                                  "name":  (document.getElementById("form_name") as HTMLInputElement).value,
                                  "sectorNumber": (document.getElementById("form_sectorNumber") as HTMLInputElement).value,
                                  "rackQuantity": (document.getElementById("form_rackQuantity") as HTMLInputElement).value}),
        });
        await response.json();

        if(response.status == 200)
          {
            (document.getElementById("alert") as HTMLInputElement).classList.remove("hidden")
            setTimeout(() => {
              navigate('/Warehouses'); 
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
            <div className="font-semibold text-xl">Edit warehouse</div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="form" value="Name" />
              </div>
              <TextInput id="form_name" type="text" placeholder="Name" required shadow />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="form" value="Sector number" />
              </div>
              <TextInput id="form_sectorNumber" type="text" placeholder="Sector number" pattern="^[1-9][0-9]*$" required shadow />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="form" value="Rack quantity" />
              </div>
              <TextInput id="form_rackQuantity" type="text" placeholder="Rack quantity" pattern="^[1-9][0-9]*$" required shadow />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="agree" required/>
              <Label htmlFor="agree" className="flex">
                I confirm that the data provided is true
              </Label>
            </div>
              <Button type="submit">Change warehouse info</Button>
          </form>
          <div className="max-w-md mt-5">
            <Button color="failure" href="/Warehouses">Back</Button>
          </div>
          <Alert color="success" className="mt-5 hidden" id="alert">
            <span className="font-medium text-lg">The information about warehouses has been changed!</span>
          </Alert>
        </div>
        <FooterSite/>
      </div>
    </>
  )
}

export default EditWarehouse