import Counter from "./Counter";
import Userform from "./Userform";


function Container() {
    return (
        <div>
            <Userform />
            <Counter count={10} prop2={'Pariwesh'} />
        </div>
    )
}
export default Container;