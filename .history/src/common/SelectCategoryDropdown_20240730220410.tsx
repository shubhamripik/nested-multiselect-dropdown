import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Category = {
  categoryId: string;
  children: Record<string, Category> | null;
  categoryValue: string;
};

type CategoryMap = {
  [key: string]: Category;
};

const SelectCategoryDropdown = ({
  defaultSelectedCategories,
  selectedCategories,
  onChange,
  categoriesMap,
  relationShips,
}: {
  defaultSelectedCategories: string[];
  selectedCategories: string[];
  onChange: (_: string[]) => void;
  categoriesMap: Record<string, string> | undefined;
  relationShips: CategoryMap;
}) => {
  return (
    <div className="w-full flex flex-row justify-center items-center">
      <Select>
        <SelectTrigger className="w-[250px]">
          <SelectValue placeholder="Select categories" />
        </SelectTrigger>
        <SelectContent className="w-[300px] p-2">
          {Object.keys(relationShips).map((category) => (
            <div className="flex flex-row items-center gap-2 p-[5px] hover:bg-gray-100 rounded">
              <Checkbox />
              <div>{categoriesMap?.[category]}</div>
            </div>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectCategoryDropdown;
