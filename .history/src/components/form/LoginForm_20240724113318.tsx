"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";

export function LoginForm() {
  return (
    <form className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Your UID" />
        </div>
        <TextInput id="email1" type="text" placeholder="0b509b8c-ca0a-4b4f-b628-6ae2fbd2f384" required />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
}
