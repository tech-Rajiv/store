"use client";

import { createCategory } from "@/app/server-actions/category/create";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function NewCategoryForm() {
  const handleCreateCategory = async () => {
    const res = await createCategory("ram", "whattever", "ok");

    console.log(res, "resss");
  };
  return (
    <div className="max-w-md flex flex-col gap-2 p-5">
      <h2>NewCategoryForm</h2>
      <Input type="text" placeholder="category name" />
      <Input type="file" />
      <Button onClick={handleCreateCategory}>Submit</Button>
    </div>
  );
}

export default NewCategoryForm;
