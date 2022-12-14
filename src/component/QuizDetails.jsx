import Swal from "sweetalert2";
import { EyeIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { RightContext, WrongContext } from "./Root";

const QuizDetails = ({ ques }) => {
  const [right , setRight ] = useContext(RightContext);
  const [wrong , setWrong] = useContext(WrongContext)

  const { correctAnswer, options, question } = ques;
  const [optionOne, optionTwo, optionThree, optionFour] = options;


  let orginalQuestion = question.slice(3, -4);

  const handleAnswer = (option) => {
    if (option === correctAnswer) {
      Swal.fire("Good job!", "Your Answer Is Correct!", "success");
      setRight(right + 1)
    } else {
      Swal.fire("Oops...", "Your Answer Is Wrong!", "error");
      setWrong(wrong + 1)
    }
  };

  const seeCorrectAns = () => {
    Swal.fire(`Answers: 
    ${correctAnswer}`)
  }
   


  // console.log(optionOne);
  return (
    <div className="bg-gray-900 rounded p-4 mt-8 w-10/12 mx-auto">

      <div onClick={seeCorrectAns}>
        <p>
          <EyeIcon className="h-6 w-6 text-blue-500" />
        </p>
      </div>

      <h2 className="text-center text-xl text-white mt-2">
        <span>Quiz  :</span>
        <span> {orginalQuestion}</span>
        </h2>
      <div className="grid md:grid-cols-2 gap-4 mt-3">
        <div className="flex bg-white p-2 rounded items-center ">
          <input
            type="radio"
            name="radio-1"
            className="radio"
            onClick={() => handleAnswer(optionOne)}
          />
          <p className="ml-2">{optionOne}</p>
        </div>

        <div className="flex bg-white p-2 rounded items-center ">
          <input
            type="radio"
            name="radio-1"
            className="radio"
            onClick={() => handleAnswer(optionTwo)}
          />
          <p className="ml-2">{optionTwo}</p>
        </div>

        <div className="flex bg-white p-2 rounded items-center ">
          <input
            type="radio"
            name="radio-1"
            className="radio"
            onClick={() => handleAnswer(optionThree)}
          />
          <p className="ml-2">{optionThree}</p>
        </div>

        <div className="flex bg-white p-2 rounded items-center ">
          <input
            type="radio"
            name="radio-1"
            className="radio"
            onClick={() => handleAnswer(optionFour)}
          />
          <p className="ml-2">{optionFour}</p>
        </div>
      </div>
    </div>
  );
};

export default QuizDetails;
