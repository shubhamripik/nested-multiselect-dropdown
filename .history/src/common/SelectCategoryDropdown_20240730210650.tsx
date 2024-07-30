import React from "react";

const SelectCategoryDropdown = ({
  defaultSelectedCategories,
  selectedCategories,
  onChange,
  categoriesMap,
  categoryRelation,
}: {
  defaultSelectedCategories: string[];
  selectedCategories: string[];
  onChange: (_: string[]) => void;
  categoriesMap: Record<string, string> | undefined;
  categoryRelation: any;
}) => {
  return <div></div>;
};

export default SelectCategoryDropdown;
