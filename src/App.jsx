import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Partnership } from "./components/Partnership";
import { Projects } from "./components/Projects";

const App = () => {
  return(
    <div className="relative flex flex-col items-center bg-white h-fit w-full">
      <Header/>
      <Hero/>
      <Partnership/>
      <Projects/>
    </div>
  )
}

export default App;