import { useSelector } from "react-redux";


function Counter(props) {
    const counter = useSelector((state)=> state);//connect to redux store to receive fresh global state
    console.log(counter);
    return <div>Counter:{counter}</div>
}

export default Counter;