import { Select, SelectContent, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckBox, CheckBoxOutlineBlank } from "@mui/icons-material";
import { PartialSelectedCheckBox, SelectedCheckBox, UnSelectedCheckBox } from "./CheckBoxes";

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
      //null cindition will be taken care in the base condition
      getAllChildCategoryIds(children[category].children, res);
    });
  };
  const handleChange = (
    // checked: Boolean | string,
    categoryId: string,
    children: CategoryMap | null
  ) => {
    console.log({ categoryId });
    if (selectedCategories.includes(categoryId) === false) {
      //these tempSelectedCategories has to be added in the selected ones
      let tempSelectedCategories = [...selectedCategories, categoryId];
      // onChange([...selectedCategories, categoryId]);
      if (children != null) {
        getAllChildCategoryIds(children, tempSelectedCategories);
      }
      onChange(tempSelectedCategories);
    } else if (selectedCategories.includes(categoryId)) {
      //these categoriesToBeRemoved has to be removed;
      let categoriesToBeRemoved = [categoryId];
      // onChange(selectedCategories.filter((category) => category != categoryId));
      if (children != null) {
        getAllChildCategoryIds(children, categoriesToBeRemoved);
      }
      onChange(selectedCategories.filter((category) => !categoriesToBeRemoved.includes(category)));
    }
  };

  const RenderNestedChild = ({ relationShips }: { relationShips: CategoryMap }) => {
    return (
      <div className="ml-5">
        {Object.keys(relationShips)
          .filter((category) => relationShips[category].categoryValue.indexOf("diffnode") === -1)
          .map((category) => (
            <div key={category} className="flex flex-col">
              <div
                onClick={() => handleChange(category, relationShips?.[category]?.children)}
                key={category}
                className="flex flex-row items-center gap-2 p-1 pl-4 hover:bg-gray-100 rounded"
              >
                <RenderCheckBox relationShips={relationShips[category]} category={category} />
                {/* <Checkbox
                    checked={
                      !relationShips?.[category]?.children && selectedCategories.includes(category)
                    }
                  /> */}
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

  const RenderCheckBox = ({
    relationShips,
    category,
  }: {
    relationShips: Category | null;
    category: string;
  }) => {
    const allChildrenIds = Object.keys(relationShips?.children || {});

    if (allChildrenIds.length === 0) {
      return selectedCategories.includes(category) ? <SelectedCheckBox /> : <UnSelectedCheckBox />;
    }

    const selectedChildrenCount = allChildrenIds.filter((childId) =>
      selectedCategories.includes(childId)
    ).length;

    if (selectedChildrenCount === allChildrenIds.length) {
      // All children are selected
      return <SelectedCheckBox />;
    }

    if (selectedChildrenCount > 0) {
      // Some children are selected
      return <PartialSelectedCheckBox />;
    }

    // No children are selected
    return <UnSelectedCheckBox />;
  };

  return (
    <div className="w-full flex flex-row justify-center items-center">
      <Select>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Select categories" />
        </SelectTrigger>
        <SelectContent className="w-[350px] p-1">
          {Object.keys(relationShips)
            .filter((category) => relationShips[category].categoryValue.indexOf("diffnode") === -1)
            .map((category) => (
              <div key={category} className="flex flex-col">
                <div
                  onClick={() => handleChange(category, relationShips?.[category]?.children)}
                  key={category}
                  className="flex flex-row items-center gap-2 p-1 pl-4 hover:bg-gray-100 rounded"
                >
                  <RenderCheckBox relationShips={relationShips[category]} category={category} />
                  {/* <Checkbox
                    checked={
                      !relationShips?.[category]?.children && selectedCategories.includes(category)
                    }
                  /> */}
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
