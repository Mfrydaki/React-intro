type Props ={
    title: string;
}

export const ArrowFuctionalComponentWithProps =({title}: Props) =>{
    return <h1 className="text-center text-xl font-bold mt-12">{title}</h1>

}
