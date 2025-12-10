"use client";

import ErrorValidation from "@/app/(auth)/components/ErrorValidation";
import { categoryZodValidation } from "@/app/lib/zodValidations";
import { createCategory } from "@/app/server-actions/category/create";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

function NewCategoryForm() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    thumbnail: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState("");
  const onChangeFn = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors("");
  };
  const handleCreateCategory = async () => {
    setLoading(true);
    const validSchema = categoryZodValidation.safeParse(formData);
    if (!validSchema.success) {
      const err = validSchema.error.flatten().fieldErrors;
      const firstError = err.name?.[0] || "Invalid feilds";
      setErrors(firstError);
      return;
    }
    console.log("validSchema: ", validSchema);
    const res = await createCategory({ ...formData });
    setLoading(false);
    if (res.success) {
      console.log("created", res);
    } else {
      console.log("failed", res);
    }
  };
  return (
    <div className="wrapper">
      <div className="max-w-md mx-auto bg-white flex flex-col gap-4 p-5 md:p-10 shadow rounded-xl ">
        <h2 className=" font-medium text-xl text-center">New Category Form</h2>
        <p className="text-sm text-gray-500 text-center mb-5">
          * marked feilds are required feilds, rest are optional.
        </p>
        <div>
          <Label>Category name *</Label>
          <Input
            type="text"
            onChange={onChangeFn}
            name="name"
            className="mt-2"
          />
        </div>
        <div>
          <Label>
            Description<span className="text-xs text-gray-500">(optional)</span>
          </Label>
          <Input
            type="text"
            onChange={onChangeFn}
            name="description"
            className="mt-2"
          />
        </div>
        <div>
          <Label>
            Image<span className="text-xs text-gray-500">(optional)</span>
          </Label>
          <Input
            type="file"
            onChange={onChangeFn}
            name="file"
            className="mt-2"
          />
        </div>

        <ErrorValidation errors={errors} />
        <Button onClick={handleCreateCategory}>Submit</Button>
      </div>
    </div>
  );
}

export default NewCategoryForm;
