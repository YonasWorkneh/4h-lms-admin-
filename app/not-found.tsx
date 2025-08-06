import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center px-4 h-full">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-green-600">404</h1>
        <h2 className="text-4xl font-semibold mt-4 mb-6">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
