const logo = "./images/x.svg";
export const Heading = () => {
  const handleClick = () => {
    console.log("added");
  };
  return (
    <div className="py-6 bg-indigo-600 top-0 drop-shadow-md z-20 sticky flex flex-row justify-center content-center">
      <div className="flex-1 ml-2">
        <img src={logo} alt="logo" className="w-16" />
      </div>
      <h1 className="text-5xl font-bold flex-[9_9_0%] text-center ">
        Refugees Code Melbourne
      </h1>
      <div className="mr-2">
        <button
          onClick={handleClick}
          className="py-1 px-6 rounded-2xl text-black border  border-slate-100"
        >
          ADD
        </button>
      </div>
    </div>
  );
};
