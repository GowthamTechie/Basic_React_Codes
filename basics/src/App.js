
// import About from "./About";
// import Contact from "./Contact";

import Greetings from "./Greetings";

// import Home from "./Home";
function App() {
 
  return (
    <>
    <h1>Hello Gowtham Welcome to React Project</h1>
    {/* <Home name ={'Gowtham'} age = {24}/>
    <About/>
    <Contact/> */}
    <Greetings name={'Gowtham'}/>
    <Greetings name={'Lokesh'}/>
    <Greetings name={'Srinivas'}/>

    </>
  );
}

export default App;
