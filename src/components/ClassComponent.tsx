import { Component, type ReactNode } from "react";

class ClassComponent extends Component{
    render(): ReactNode {
        const title = "It's a Class Component"       
         return <h1 className="text-center mt-12 text-xl fond-bold">{title}</h1>
    }
}
export default ClassComponent;