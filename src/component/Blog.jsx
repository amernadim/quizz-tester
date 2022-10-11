import React from "react";

const Blog = () => {
  return (
    <section className="bg-gray-800 text-gray-100 mt-[80px]">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        {/* <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
          How it works
        </p> */}
        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
          Some Questions
        </h2>
        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
            What is the purpose of react router?
            </summary>
            <div className="px-4 pb-4">
              <p>
              React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
            How does Context Api works?
            </summary>
            <div className="px-4 pb-4">
              <p>
              The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
             About useRef
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>
              useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Blog;
