import { Email } from "./Email";
import { Username } from "./Username";
import { AddProperty } from "./AddProperty";
export function Info() {
  return (
    <div>
      <h3>Change Properties </h3>
      <Email />
      <Username />
      <AddProperty />
    </div>
  );
}
