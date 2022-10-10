import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  // console.error(error);
  return (
    <div className='flex flex-col justify-center items-center mt-20'>
      <h1 className='text-2xl text-gray-500'>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className='text-red-600'>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;