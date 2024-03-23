export default function Error({ error }: { error: unknown }) {
  return (
    <div className="mx-auto my-auto place-items-center flex flex-col gap-5">
      <h2 className="text-blue-500 text-4xl uppercase">Error {error.status}</h2>
      <p className="text-gray-600 text-4xl">Something went wrong</p>
      <p className="text-blue-500 text-4xl">{error.data?.status_message}</p>
    </div>
  );
}
