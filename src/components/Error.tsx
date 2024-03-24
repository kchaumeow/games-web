// type FetchQueryError = {
//   status: number;
//   data: {
//     status_message: string;
//   };
// };
import {FetchBaseQueryError} from "@reduxjs/toolkit/query";
import {SerializedError} from "@reduxjs/toolkit";

export default function Error({
  error,
}: {
  error: FetchBaseQueryError | SerializedError;
}) {
  if (isFetchBaseQueryError(error))
    return (
      <div className="mx-auto mt-20 place-items-center flex flex-col gap-5">
        <h2 className="text-blue-500 text-4xl uppercase">
          Error {error.status}
        </h2>
        <p className="text-gray-600 text-4xl">Something went wrong</p>
        <p className="text-blue-500 text-4xl">{error.data?.status_message}</p>
      </div>
    );
}

function isFetchBaseQueryError(
  error: FetchBaseQueryError | SerializedError,
): error is FetchBaseQueryError {
  return error.hasOwnProperty("status") && error.hasOwnProperty("data");
}
