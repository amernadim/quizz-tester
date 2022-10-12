import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import QuizDetails from "./QuizDetails";
import { RightContext, WrongContext } from "./Root";

const Quiz = () => {
  const data = useLoaderData([]);
  const quizData = data.data;
  const questions = quizData.questions;

  const [right , setRight ] = useContext(RightContext)
  const [wrong , setWrong] = useContext(WrongContext)

  return (
    <div className="mt-[90px]">
      <h1 className="text-center text-4xl font-bold">
        Quiz Of {quizData.name}
      </h1>
      <div className="grid md:grid-cols-3">

        <div className="md:col-span-2">
          {questions.map((ques) => (
            <QuizDetails key={ques.id} ques={ques}></QuizDetails>
          ))}
        </div>

        <div className="md:col-span-1 mt-8 w-full mx-auto ">
          <div className="flex flex-col p-6 space-y-4 rounded bg-gray-900 text-gray-100">
            <h2 className="text-2xl font-semibold">Result</h2>
            <ul className="pt-4">
              <li className="flex justify-between">
                <h3> Correct : </h3>
                <p className="text-sm text-violet-400">{right}</p>              
              </li>
              <li className="flex justify-between">
                <h3> Wrong: </h3>
                <p className="text-sm text-red-400">{wrong}</p>              
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
