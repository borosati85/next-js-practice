"use client";

import React, { ReactNode, useState, createContext } from "react";
import classes from './list.module.css';

interface ListProps {
  children: ReactNode;
}

export const ListContext = createContext(null);

export const List = ({ children }: ListProps) => {
  const [listState, setListState] = useState(null);

  return (
    <ListContext.Provider value={listState}>
      <ul className={classes.list}>{children}</ul>;
    </ListContext.Provider>
  );
};
