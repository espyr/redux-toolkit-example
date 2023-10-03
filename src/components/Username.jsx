import { useSelector, useDispatch } from "react-redux";
import { changeUsername } from "../redux/userSlice";

export function Username() {
  const username = useSelector((state) => state.user.username);
  const dispatch = useDispatch();

  return (
    <div>
      <label htmlFor="username">Username: </label>
      <input
        id="username"
        type="text"
        value={username}
        onChange={(e) => dispatch(changeUsername(e.target.value))}
      />
    </div>
  );
}
