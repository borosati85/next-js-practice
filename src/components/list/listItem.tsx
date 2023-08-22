"use client";

import { useContext, ReactNode } from "react";
import { ListContext } from "./list";

interface ListItemProps {
  children: ReactNode;
}

export const ListItem = ({ children }: ListItemProps) => {
  const context = useContext(ListContext);
  return <li>{children}</li>;
};
