import React from 'react';

const QuizDetails = ({ques}) => {
  const {correctAnswer,id,options,question} = ques; 
  const [optionOne , optionTwo , optionThree , optionFour] = options

  let orginalQuestion = question.slice(3,-4)

  // console.log(optionOne);
  return (
        <div className="bg-blue-400 p-4 mt-3">
        <h2 className="text-center text-xl">{orginalQuestion}</h2>
    
          <div className="grid grid-cols-2 gap-4 mt-3">
            <div className="flex bg-white p-2 rounded items-center ">
              <input type="radio" name="radio-1" className="radio" value={optionOne} />
              <p className="ml-2">{optionOne}</p>
            </div>

            <div className="flex bg-white p-2 rounded items-center ">
              <input type="radio" name="radio-1" className="radio" value={optionTwo} />
              <p className="ml-2">{optionTwo}</p>
            </div>

           
            <div className="flex bg-white p-2 rounded items-center ">
              <input type="radio" name="radio-1" className="radio" value={optionThree}/>
              <p className="ml-2">{optionThree}</p>
            </div>

            <div className="flex bg-white p-2 rounded items-center ">
              <input type="radio" name="radio-1" className="radio" value={optionFour} />
              <p className="ml-2">{optionFour}</p>
            </div>

          </div>

       </div>
  );
};

export default QuizDetails;