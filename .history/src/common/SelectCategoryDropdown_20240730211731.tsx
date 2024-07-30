import React from "react";

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
  categoryRelation,
}: {
  defaultSelectedCategories: string[];
  selectedCategories: string[];
  onChange: (_: string[]) => void;
  categoriesMap: Record<string, string> | undefined;
  categoryRelation: CategoryMap;
}) => {
  return <div className="w-full flex flex-row justify-center items-center">shubham</div>;
};

export default SelectCategoryDropdown;
