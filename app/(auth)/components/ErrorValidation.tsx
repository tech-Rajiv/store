import { Info } from "lucide-react";
import React from "react";

function ErrorValidation({ errors }: { errors: string | null }) {
  if (!errors) return null;
  return (
    <div className="flex items-start gap-3 bg-red-50 border border-red-100 p-2 rounded-lg text-red-500">
      <Info size={18} className="mt-0.5 shrink-0" />
      <span className="text-sm leading-5">{errors}</span>
    </div>
  );
}

export default ErrorValidation;
