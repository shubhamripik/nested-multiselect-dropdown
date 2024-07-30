import { useEffect, useState } from "react";
import SelectCategoryDropdown from "./common/SelectCategoryDropdown";
import { idToNameMap, categoryRelation } from "./common/sample-data";

function App() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCategoriesChange = (value: string[]): void => {
    setSelectedCategories(value);
  };

  return (
    <div className="mt-4">
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
