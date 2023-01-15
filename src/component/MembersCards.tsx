import { Imembers } from "../membersDetails";

interface IMembersCardsProps {
  props: Imembers;
}

export const MembersCards: React.FC<IMembersCardsProps> = ({ props }) => {
  return (
    <div className="flex flex-col ">
      <div
        key={props.id}
        className=" shadow-md  my-8 mx-5 p-2 bg-transparent backdrop-blur-md"
      >
        <img
          src={props.pic}
          alt=""
          className="w-36 rounded-full m-auto mt-4 shadow-black shadow-md"
        />
        <div className="pt-10 w-full px-2 ">
          <p className="text-white text-center mb-9 text-2xl font-bold ">
            {props.name}
          </p>
          <p className="mb-4 justify-start text-[#EFF5F5] px-4 pt-1 rounded m-auto font-sans font-medium w-4/12">
            <span className="text-xl text-indigo-600">Bio:</span> {props.bio}
          </p>
          <p className=" mb-4 justify-start text-[#EFF5F5] px-4 pt-1 rounded w-3/12 m-auto font-sans font-medium">
            <span className="text-xl text-indigo-600">Hobbies:</span>{" "}
            {props.hobbies.map((hobby) => {
              return <p>{hobby}</p>;
            })}
          </p>
        </div>
      </div>
    </div>
  );
};
