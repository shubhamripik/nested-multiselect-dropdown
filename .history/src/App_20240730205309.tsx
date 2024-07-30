import { useEffect, useState } from "react";
import SelectCategoryDropdown from "./common/SelectCategoryDropdown";
import { idToNameMap, categoryRelation } from "./common/sample-data";

function App() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const handleCategoriesChange = () => {};
  return (
    <div className="bg-red-100">
      <SelectCategoryDropdown
        defaultSelectedCategories={[]}
        selectedCategories={selectedCategories}
        onChange={handleCategoriesChange}
        categoriesMap={idToNameMap}
      />
    </div>
  );
}

export default App;
