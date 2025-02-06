// import { useSelector, useDispatch } from "react-redux";
// import { RootState } from "./store/store";
// import { increment, decrement } from "./store/counterSlice";

// const App = () => {
//   const count = useSelector((state: RootState) => state.counter.value);
//   const dispatch = useDispatch();

//   return (
//     <div style={{ textAlign: "center", marginTop: "200px" }}>
//       <h1>Vite + React + TypeScript + Redux</h1>
//       <h2>Counter: {count}</h2>
//       <button onClick={() => dispatch(increment())}>Increment</button>
//       <button onClick={() => dispatch(decrement())}>Decrement</button>
//     </div>
//   );
// }

import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header/index";
import Nav from "./components/Nav";
import Skills from "./components/Skills";
import Work from "./components/Work";

const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Work />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
