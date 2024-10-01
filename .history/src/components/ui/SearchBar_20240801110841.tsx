import { Button, TextInput } from "flowbite-react";

export function SearchBar() {
  return (
    <form className="flex gap-4">
        <TextInput id="uid" type="text" placeholder="0b509b8c-ca0a-4b4f-b628-6ae2fbd2f384" required />
        <Button type="submit">Log In</Button>
    </form>
  );
}
