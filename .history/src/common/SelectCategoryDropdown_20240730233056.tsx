import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectTrigger, SelectValue } from "@/components/ui/select";

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
  const getAllChildCategoryIds = (children: CategoryMap | null, res: string[]) => {
    if (children === null) {
      return;
    }
    Object.keys(children).forEach((category) => {
      res.push(category);
      //Null cindition will be taken care in the base condition
      getAllChildCategoryIds(children[category].children, res);
    });
  };
  const handleChange = (
    checked: Boolean | string,
    categoryId: string,
    children: CategoryMap | null
  ) => {
    if (checked && !selectedCategories.includes(categoryId)) {
      let tempSelectedCategories = [...selectedCategories, categoryId];
      // onChange([...selectedCategories, categoryId]);
      if (children != null) {
        getAllChildCategoryIds(children, tempSelectedCategories);
      }
    } else if (!checked && selectedCategories.includes(categoryId)) {
      onChange(selectedCategories.filter((category) => category != categoryId));
    }
  };

  const RenderNestedChild = ({ relationShips }: { relationShips: CategoryMap }) => {
    return (
      <div className="ml-5">
        {Object.keys(relationShips)
          .filter((category) => relationShips[category].categoryValue.indexOf("diffnode") === -1)
          .map((category) => (
            <div className="flex flex-col">
              <div
                key={category}
                className="flex flex-row items-center gap-2 p-1 pl-4 hover:bg-gray-100 rounded"
              >
                <Checkbox
                  checked={selectedCategories.includes(category)}
                  onCheckedChange={(checked) =>
                    handleChange(checked, category, relationShips?.[category]?.children)
                  }
                />
                <p className="text-[15px]">{categoriesMap?.[category]}</p>
              </div>
              {relationShips?.[category]?.children && (
                <RenderNestedChild relationShips={relationShips[category].children} />
              )}
            </div>
          ))}
      </div>
    );
  };
  return (
    <div className="w-full flex flex-row justify-center items-center">
      <Select>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Select categories" />
        </SelectTrigger>
        <SelectContent className="w-[350px] p-1 ml-5">
          {Object.keys(relationShips)
            .filter((category) => relationShips[category].categoryValue.indexOf("diffnode") === -1)
            .map((category) => (
              <div className="flex flex-col">
                <div
                  key={category}
                  className="flex flex-row items-center gap-2 p-1 pl-4 hover:bg-gray-100 rounded"
                >
                  <Checkbox
                    checked={selectedCategories.includes(category)}
                    name={category}
                    onCheckedChange={(checked) =>
                      handleChange(checked, category, relationShips?.[category]?.children)
                    }
                  />
                  <p className="text-[15px]">{categoriesMap?.[category]}</p>
                </div>
                {relationShips?.[category]?.children && (
                  <RenderNestedChild relationShips={relationShips[category].children} />
                )}
              </div>
            ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectCategoryDropdown;
