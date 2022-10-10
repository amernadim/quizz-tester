import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {
  const quizs = useLoaderData([])
  const quiz = quizs.data
  console.log(quiz);
  return (
    <div className='mt-[80px]'>
      <h1 className='text-center text-2xl font-bold'>Quiz Of {quiz.name}</h1>
      {/* <div>
        {

        }
      </div> */}
    </div>
  );
};

export default Quiz;