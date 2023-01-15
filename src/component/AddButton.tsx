import { MembersCards } from "./MembersCards";
import { members } from "../membersDetails";
import { useState } from "react";

export const Add = () => {
  const [input, setInput] = useState(true);
  const [name, setName] = useState("");
  const [memberss, setMemberss] = useState<string[]>([]);
  const [details, setDetails] = useState<string[]>([]);
  const onClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setName("");
    setMemberss([...memberss, name]);
    setDetails([...details, name]);
    setInput(false);
  };
  return (
    <div className="z-30">
      {/* <div className="items-center justify-items-center z-50  m-auto flex">
        <h1>Inter your name, please</h1>
        <form onSubmit={onClick}>
          <input
            type={"text"}
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          ></input>
          <h2>Describe yourself please</h2>

          <input
            type={"text"}
            placeholder="details"
            value={details}
            onChange={(e) => setName(e.target.value)}
            required
            max={2000}
          ></input>
          <h2>upload your photo</h2>

          <button type="submit">Add Me</button>
        </form>
      </div> */}
      <div>
        <div>
          {members.map((each) => (
            <MembersCards props={each} />
          ))}
        </div>
      </div>
    </div>
  );
};
