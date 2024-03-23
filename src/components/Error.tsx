import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";

export default function Error({
  error,
}: {
  error: FetchBaseQueryError | SerializedError;
}) {
  return (
    <div className="h-full flex flex-col place-content-center place-items-center">
      <h2 className="text-blue-500 text-4xl uppercase">Error</h2>
      <p className="text-gray-600 text-4xl">Something went wrong</p>
      <p className="text-blue-500 text-2xl">{JSON.stringify(error)}</p>
    </div>
  );
}
