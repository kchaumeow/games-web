interface APIError {
  status: number | string;
  data: {
    status_message?: string;
  };
}

interface ErrorProps {
  error: unknown;
}

export default function Error({ error }: ErrorProps) {
  return (
    <div className="mx-auto mt-20 place-items-center flex flex-col gap-5">
      <h2 className="text-blue-500 text-4xl uppercase">
        Error {isAPIError(error) && error.status}
      </h2>
      <p className="text-gray-600 text-4xl">Something went wrong</p>
      {isAPIError(error) && (
        <p className="text-blue-500 text-4xl">{error.data.status_message}</p>
      )}
    </div>
  );
}

function isAPIError(error: unknown): error is APIError {
  return (
    typeof error === "object" &&
    error !== null &&
    error.hasOwnProperty("status") &&
    error.hasOwnProperty("data")
  );
}
