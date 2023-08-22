"use client";

import React, { ReactNode, useState, createContext } from "react";

interface ListProps {
  children: ReactNode;
}

export const ListContext = createContext(null);

export const List = ({ children }: ListProps) => {
  const [listState, setListState] = useState(null);

  return (
    <ListContext.Provider value={listState}>
      <ul>{children}</ul>;
    </ListContext.Provider>
  );
};
