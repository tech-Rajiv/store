import { Badge, X } from "lucide-react";
import React from "react";

function CuponCodeAdd() {
  return (
    <div className="p-3 md:p-5">
      <div className="flex items-center  justify-between rounded-xl border border-sky-200 bg-sky-50 px-5 py-4 text-sky-700">
        <p className="text-sm md:text-base">
          Use code
          <span className="font-semibold text-sky-600"> FIRSTORDER </span>
          to get <span className="font-semibold">50% off</span>.
        </p>

        <button
          className="rounded-full p-1 hover:bg-sky-100 transition-colors"
          aria-label="Close"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
}

export default CuponCodeAdd;
