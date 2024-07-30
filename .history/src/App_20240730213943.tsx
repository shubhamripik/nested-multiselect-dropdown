import { useEffect, useState } from "react";
import SelectCategoryDropdown from "./common/SelectCategoryDropdown";
import { idToNameMap, categoryRelation } from "./common/sample-data";
import { Button } from "@/components/ui/button";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

function App() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCategoriesChange = (value: string[]): void => {
    console.log(value);
  };

  return (
    <div className="bg-red-100">
      <div>
        <Button>Click me</Button>
      </div>
      <SelectCategoryDropdown
        defaultSelectedCategories={[]}
        selectedCategories={selectedCategories}
        onChange={handleCategoriesChange}
        categoriesMap={idToNameMap}
        relationShips={categoryRelation.relationships}
      />
    </div>
  );
}

export default App;
