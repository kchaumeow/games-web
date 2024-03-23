export default function ListItem({
  characteristic,
  value,
}: {
  characteristic: string;
  value: string;
}) {
  return (
    <p className="text-xl font-medium">
      {characteristic + ": "}
      <span className="text-blue-400">{value}</span>
    </p>
  );
}
