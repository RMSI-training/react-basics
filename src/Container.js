import Counter from "./Counter";
import Userform from "./Userform";
import UserList from "./UserList";
function Container() {
    return (
        <div>
            <Userform />
            <UserList />
            {/* <Counter count={10} prop2={'Pariwesh'} /> */}
        </div>
    )
}
export default Container;