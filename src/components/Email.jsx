import { useSelector, useDispatch } from "react-redux";
import { changeEmail } from "../redux/userSlice";

export function Email() {
  const email = useSelector((state) => state.user.email);
  const dispatch = useDispatch();

  return (
    <div>
      <label htmlFor="email">Email: </label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => dispatch(changeEmail(e.target.value))}
      />
    </div>
  );
}
