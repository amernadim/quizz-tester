import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blog from "./component/Blog";
import ErrorPage from "./component/ErrorPage";
import Home from "./component/Home";
import Quiz from "./component/Quiz";
import Root from "./component/Root";
import Statistics from "./component/Statistics"

const router = createBrowserRouter([
  {path : '/' ,
   element: <Root/> ,
   errorElement: <ErrorPage/>,
   loader : () => fetch('https://openapi.programming-hero.com/api/quiz'),
   children : [
    {path : '/' , 
    element : <Home/>},
    {path : '/home' , element : <Home/>},
    {path : '/statistics' , element : <Statistics/>},
    {path : '/blog' , element : <Blog/>},
    {path : '/home/:id' ,
    loader : async({params}) => {
      return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
    }, 
    element : <Quiz/>
    }
  ]}
])

function App() {
  return <RouterProvider router={router}/>
}

export default App;

