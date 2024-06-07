import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@ui/components/ui/select';

type CustomSelectProps = {
  data: { label: string; value: string }[];
  onSelect?: (value: string) => void;
  initialValue?: string;
};

export default function CustomSelect({
  data,
  onSelect,
  initialValue,
}: CustomSelectProps): JSX.Element {
  return (
    <Select defaultValue={initialValue} onValueChange={onSelect}>
      <SelectTrigger
        id="custom_select"
        className="w-full rounded-[4px] border-DEFAULT border-[#e9e9e933] bg-transparent px-8 py-6 text-white hover:border-white"
      >
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {data.map((item, i) => (
            <SelectItem key={`item-${i}`} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
