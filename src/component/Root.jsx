import React, { createContext, useState } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import NavBar from "./NavBar";

export const DataContext = createContext([]);
export const RightContext = createContext(0);
export const WrongContext = createContext(0);

const Root = () => {
  const datas = useLoaderData([]);
  const [right, setRight] = useState(0);
  const [wrong, setWrong] = useState(0);
  return (
    <DataContext.Provider value={datas}>
      <RightContext.Provider value={[right, setRight]}>
        <WrongContext.Provider value={[wrong, setWrong]}>
          <NavBar />
          <Outlet />
        </WrongContext.Provider>
      </RightContext.Provider>
    </DataContext.Provider>
  );
};

export default Root;
