import React, { useContext } from "react";
import Lottie from "lottie-react";
import animation from "../assets/animation.json";
import { useLoaderData } from "react-router-dom";
import Topic from "./Topic";
import { DataContext } from "./Root";

const Home = () => {
  const datas = useContext(DataContext)
  const data = datas.data
  // console.log(data);
  return (
    <div className="mt-[80px]">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col justify-between lg:flex-row justify-center items-center">
          <div className="mb-12 lg:max-w-lg lg:pr-5 lg:mb-0">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                As Much As the Quiz Will Solve,
                <br className="hidden md:block" />
                The Knowledge{" "}
                <span className="inline-block text-blue-600">
                  Will Increase
                </span>
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                Assessment, instruction, and practice that motivate every
                student to mastery
              </p>
            </div>
          </div>

          <div className="px-5 pt-6 pb-5 text-center border border-gray-300 rounded lg:w-2/5">
            <Lottie animationData={animation} loop={true} />
          </div>
        </div>
      </div>
      <hr className="mb-6 border-gray-300" />
      <div className="grid md:grid-cols-2 w-8/12 gap-4 mx-auto">
        {data.map((topic) => (
          <Topic key={topic.id} topic={topic}></Topic>
        ))}
      </div>
    </div>
  );
};

export default Home;
