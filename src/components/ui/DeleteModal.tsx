import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { Alert } from "flowbite-react";

export function DeleteModal({table, id, setDeleteOpen = (value:any) => {value}}:any) {

  const handleSubmit = async () => {
    try {
        await fetch('https://localhost:44308/'+{table}.table+{id}.id, {
        method: 'DELETE'})
        .then(() =>(document.getElementById("alert") as HTMLInputElement).classList.remove("hidden"))
        .then(() => setTimeout(() => {
          setDeleteOpen(false)
          window.location.reload()
        }, 1200))
    } catch (error) {
      console.error('Błąd:', error);
    }
  };

  return (
    <>
      <Modal show={true} size="md" onClose={() => setDeleteOpen(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400" />
            <h3 className="mb-5 text-lg font-normal text-gray-500">
              Are you sure you want to delete this object?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={handleSubmit}>
                {"Yes, I'm sure"}
              </Button>
              <Button color="gray" onClick={() => setDeleteOpen(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
        <Alert color="success" className="mt-5 hidden" id="alert">
            <span className="font-medium text-lg">The object has been deleted!</span>
        </Alert>
      </Modal>
    </>
  );
}
