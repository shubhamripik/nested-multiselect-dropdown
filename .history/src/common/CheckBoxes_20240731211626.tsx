import React from "react";
import { CheckBox, CheckBoxOutlineBlank } from "@mui/icons-material";

export const PartialSelectedCheckBox = () => {
  return <CheckBox sx={{ color: "gray" }} />;
};

export const SelectedCheckBox = () => {
  return <CheckBox sx={{ color: "black" }} />;
};

export const UnSelectedCheckBox = () => {};
