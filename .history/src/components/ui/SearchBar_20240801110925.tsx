import { Button, TextInput } from "flowbite-react";

export function SearchBar() {
  return (
    <form className="flex gap-4">
        <TextInput id="search" type="text" placeholder="text" required />
        <Button type="submit">Search</Button>
    </form>
  );
}
