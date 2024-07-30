import * as React from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

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
  return <div className="w-full flex flex-row justify-center items-center"></div>;
};

export default SelectCategoryDropdown;
