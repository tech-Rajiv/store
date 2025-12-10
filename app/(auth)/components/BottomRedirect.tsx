import Link from "next/link";

function BottomRedirect({ content, url }: { content: string; url: string }) {
  return (
    <div className="flex justify-center ">
      <Link
        href={url}
        className="text-sm text-gray-600 hover:text-blue-500 transition-colors duration-200"
      >
        {content}
      </Link>
    </div>
  );
}

export default BottomRedirect;
