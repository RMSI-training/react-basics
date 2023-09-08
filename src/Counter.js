import { useSelector } from "react-redux";


function Counter(props) {
    const counter = useSelector((state)=> state);
    console.log(counter);
    return <div>{counter}</div>
}

export default Counter;