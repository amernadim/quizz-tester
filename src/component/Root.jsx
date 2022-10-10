import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import NavBar from './NavBar';

export const DataContext = createContext([])
 
const Root = () => {
  const datas = useLoaderData([]);
  return (
    <DataContext.Provider value={datas}>
         <NavBar/>
         <Outlet/>
    </DataContext.Provider>
  );
};

export default Root;