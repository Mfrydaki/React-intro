
import ArrowFuctionalComponent from "./components/ArrowFuctionalComponent";
import ClassComponent from "./components/ClassComponent";
import FunctionalComponent from "./components/fuctionalComponent";
import { ArrowFuctionalComponentWithProps } from "./components/ArrowFuctionalComponentWithProps";


function App() {

  return(
    <>
    <ClassComponent/>
    <FunctionalComponent/>
    <ArrowFuctionalComponent/>
    <ArrowFuctionalComponentWithProps title="Is an Arrow Fuctional Component with Props! "/>
    </>

  )
}
  

export default App
