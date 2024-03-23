import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function Filters({
  onChange,
  value,
}: {
  onChange: (value: string) => void;
  value: string;
}) {
  return (
    <RadioGroup
      defaultValue="release_date"
      onValueChange={onChange}
      value={value}
    >
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="release_date" id="r1" />
        <Label htmlFor="r1">Release date</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="relevance" id="r2" />
        <Label htmlFor="r2">Relevance</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="alphabetical" id="r3" />
        <Label htmlFor="r3">Alphabetical</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="popularity" id="r3" />
        <Label htmlFor="r3">Popularity</Label>
      </div>
    </RadioGroup>
  );
}
