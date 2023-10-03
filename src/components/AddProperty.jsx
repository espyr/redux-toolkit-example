import { useSelector, useDispatch } from "react-redux";
import { addProperty } from "../redux/userSlice";

export function AddProperty() {
  const dispatch = useDispatch();
  const property = useSelector((state) => state.user.property);

  return (
    <div>
      <label htmlFor="property">Add Property: </label>
      <input
        id="property"
        placeholder="Add Property"
        type="text"
        value={property}
        onChange={(e) => dispatch(addProperty(e.target.value))}
      />
    </div>
  );
}
