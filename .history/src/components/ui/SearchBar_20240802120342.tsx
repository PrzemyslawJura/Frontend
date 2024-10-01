import { Button, TextInput } from "flowbite-react";

export function SearchBar() {
  return (
    <form className="flex gap-4 w-1/2">
        <TextInput id="search" type="text" placeholder="..." required  className="w-auto"/>
        <Button type="submit">Search</Button>
    </form>
  );
}
