import { Button, Label, TextInput } from "flowbite-react";
import { useNavigate } from 'react-router-dom';
import { Alert } from "flowbite-react";

export function LoginForm() {
  const navigate = useNavigate();

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      fetch('https://localhost:44308/Administrator/'+(document.getElementById("uid") as HTMLInputElement).value)
        .then((res) => res.json())
        .then((result) => {
          onLogIn(result.status)
      });
    } catch (error) {
      console.error('Błąd:', error);
    }
  };

  function onLogIn(response:any) {
    console.log(response)
    if(response == 404)
      {
        (document.getElementById("alert") as HTMLInputElement).classList.remove("hidden")
      }
    else
    {
      navigate('/Transactions'); 
    }
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <div>
        <div className="mb-2 block">
          <Label className="font-semibold" htmlFor="uid" value="Your UID" />
        </div>
        <TextInput id="uid" type="text" placeholder="Id" pattern="^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$" value="91d6348a-641f-4533-a27f-0418891d69bb" required />
      </div>
      <Button type="submit">Log In</Button>
      <Alert color="success" className="mt-5 hidden" id="alert">
            <span className="font-medium text-lg">UID is wrong!</span>
      </Alert>
    </form>
  );
}
