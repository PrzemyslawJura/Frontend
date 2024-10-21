import { Label, Select } from "flowbite-react";
import { Checkbox, TextInput } from "flowbite-react";
import { FooterSite } from "../../components/ui/FooterSite"
import { NavbarSite } from "../../components/ui/NavbarSite"
import { SidebarSite } from "../../components/ui/SidebarSite"
import { useNavigate } from 'react-router-dom';
import { Button} from "flowbite-react";
import { Alert } from "flowbite-react";

function CreateWorker() {
  const navigate = useNavigate();

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      const response = await fetch('https://localhost:44308/Administrator/Worker', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({  "firstName":  (document.getElementById("form_firstName") as HTMLInputElement).value,
                                "lastName": (document.getElementById("form_secondName") as HTMLInputElement).value,
                                "role": (document.getElementById("form_role") as HTMLInputElement).value}),
      });
      await response.json();

      if(response.status == 201)
        {
          (document.getElementById("alert") as HTMLInputElement).classList.remove("hidden")
          setTimeout(() => {
            navigate('/Workers'); 
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
            <div className="font-semibold text-xl">Create new worker </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="form" value="First name" />
                </div>
                <TextInput id="form_firstName" type="text" placeholder="First name" pattern="^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]+(-[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]+)?$" required shadow />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="form" value="Last name" />
                </div>
                <TextInput id="form_secondName" type="text" placeholder="Last name" pattern="^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]+(-[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]+)?$" required shadow />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="roles" value="Select worker role" />
                </div>
                <Select id="form_role" required>
                  <option>Regular</option>
                  <option>Admin</option>
                </Select>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="agree" required/>
                <Label htmlFor="agree" className="flex">
                  I confirm that the data provided is true
                </Label>
              </div>
              <Button type="submit">Create new worker</Button>
          </form>
          <div className="max-w-md mt-5">
            <Button color="failure" href="/Workers">Back</Button>
          </div>
          <Alert color="success" className="mt-5 hidden" id="alert">
            <span className="font-medium text-lg">New worker has been created!</span>
          </Alert>
        </div>
        <FooterSite/>
      </div>
    </>
  )
}

export default CreateWorker