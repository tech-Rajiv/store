import { Info } from "lucide-react";
import { formattedErrors } from "../constants";

function ErrorNextAuthSigning({
  nextAuthError,
}: {
  nextAuthError: string | null;
}) {
  if (!nextAuthError) return null;
  const errorFormated =
    formattedErrors[nextAuthError] || "Something went wrong";

  return (
    <div className="flex items-start gap-3 bg-red-50 border border-red-200 p-3 rounded-lg text-red-600">
      <Info size={18} className="mt-0.5 shrink-0" />
      <span className="text-sm leading-5">{errorFormated}</span>
    </div>
  );
}

export default ErrorNextAuthSigning;
