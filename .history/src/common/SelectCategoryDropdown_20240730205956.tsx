import React from "react";

const SelectCategoryDropdown = ({
  defaultSelectedCategories,
  selectedCategories,
  onChange,
  categoriesMap,
}: {
  defaultSelectedCategories: string[];
  selectedCategories: string[];
  onChange: (_: string[]) => void;
  categoriesMap: Record<string, string> | undefined;
}) => {
  return <div>{JSON.stringify(categoriesMap, null, 2)}</div>;
};

export default SelectCategoryDropdown;
