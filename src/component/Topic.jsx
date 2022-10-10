import React from "react";

const Topic = ({ topic }) => {
  // console.log(topic);
  const { id, name, logo, total } = topic;
  return (
    <div className="max-w-xs rounded-md shadow-md ">
      <img
        src={logo}
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72 "
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">
           {name}
          </h2>
          <p className="dark:text-gray-100">
           Quizs : {total}
          </p>
        </div>
        <button
          type="button"
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-blue-400 text-gray-900"
        >
          See Quiz
        </button>
      </div>
    </div>
  );
};

export default Topic;
