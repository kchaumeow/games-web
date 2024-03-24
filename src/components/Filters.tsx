import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Filters({
  onChange,
  value,
}: {
  onChange: (value: string) => void;
  value: string;
}) {
  return (
    <Select onValueChange={onChange} value={value}>
      <SelectTrigger className="bg-gray-800 border-neutral-600">
        <SelectValue
          placeholder="Select sorting"
          className="bg-gray-800 border-neutral-600 "
        />
      </SelectTrigger>
      <SelectContent className="bg-gray-800 text-white border-neutral-600">
        <SelectGroup>
          <SelectLabel>Sort by</SelectLabel>
          <SelectItem value="release_date">Release date</SelectItem>
          <SelectItem value="relevance">Relevance</SelectItem>
          <SelectItem value="alphabetical">Alphabetical</SelectItem>
          <SelectItem value="popularity">Popularity</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
