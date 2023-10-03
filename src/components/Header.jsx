import { useSelector } from "react-redux";

export function Header() {
  const user = useSelector((state) => state.user);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", paddingBlock: "20px" }}
    >
      <h1>My Profile</h1>

      <div>Name: {user.name}</div>
      <div>Username: {user.username}</div>
      <div>Email: {user.email}</div>
      <div>{user.property && <li>New Property: {user.property}</li>}</div>
    </div>
  );
}
