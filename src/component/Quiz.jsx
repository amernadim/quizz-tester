import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizDetails from "./QuizDetails";

const Quiz = () => {
  const data = useLoaderData([]);
  const quizData = data.data;
  const questions = quizData.questions;

  // const ddd = questions.map(dd => dd.options)
  // console.log(ddd);

  return (
    <div className="mt-[90px]">
      <h1 className="text-center text-4xl font-bold">
        Quiz Of {quizData.name}
      </h1>

      <div>
        {questions.map((ques) => (
          <QuizDetails 
          key={ques.id}
          ques={ques}
          ></QuizDetails>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
