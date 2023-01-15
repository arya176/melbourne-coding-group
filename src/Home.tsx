import { About } from "./component/About";
import { Heading } from "./component/Heading";
// import { MembersCards } from "./component/MembersCards";
// import { members } from "./membersDetails";
import { ContactUs } from "./component/ContacUs";
import { Add } from "./component/AddButton";
import { TopClothes } from "./component/TopClothes";
import { BottomClothes } from "./component/BottomClothes";

export const Home = () => {
  // let details = {
  //   name: "moris",
  //   last: "koolik",
  //   conditions: "good",
  //   age: 25,
  //   ifIsLog: false,
  // };
  // const clothesTops = [
  //   {
  //     id: 1,
  //     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSisAz1dpKNQyL0pBtYBOrhJ63LLoDsG_V1ZQ&usqp=CAU",
  //     brands: "connor",
  //     color: " Black",
  //     size: 32,
  //   },
  //   {
  //     id: 2,
  //     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm6AziAHomDlEIqe0zHZNfQgykFgbEmmv2lgSrVGbil_DPOWDjzG6mQk5mHkN_ALuhoxA&usqp=CAU",
  //     brands: "nike",
  //     color: "White",
  //     size: 30,
  //   },
  //   {
  //     id: 3,
  //     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT93ZipAZWoB0O5NDm8_av-Ll-pAGFXYyS81JZVSr6U9BOUvz8wE-CFmL_35CmyzK4j3kA&usqp=CAU",
  //     brands: "jacket",
  //     color: "Navy",
  //     size: 48,
  //   },
  // ];
  // const clothesBottom = [
  //   {
  //     id: 1,
  //     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRbJfXse1XhF2ieCQv8SgJArhzlA8t8ySj0A&usqp=CAU",
  //     brands: "Zara",
  //     color: "Black",
  //     size: 30,
  //   },
  //   {
  //     id: 2,
  //     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsNe2lmdpuOoCU6L7EWRaiyTh7W78JVg5S_Q&usqp=CAU",
  //     brands: "Raw",
  //     color: "mixed",
  //     size: 31,
  //   },
  //   {
  //     id: 3,
  //     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2byYcJvKilCfOh3f8X_grh9dorqnoyYbYqQ&usqp=CAU",
  //     brands: "Levis",
  //     color: "blue",
  //     size: 9,
  //   },
  // ];

  return (
    <div className=" bg-cover bg-center t-0 bg-no-repeat scroll-m-2 w-full m-auto tracking-widest flex flex-col">
      <Heading />
      <img
        src="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2020/01/09151859/coding-bootcamp-1024x486.png"
        alt=""
        className="bg-fixed bg-cover h-screen w-screen fixed z-0"
      />

      <About />

      {/* <TopClothes top={clothesTops} />
      <BottomClothes bottom={clothesBottom} /> */}
      <Add />
      {/* <div>
        <div>
          {members.map((each) => (
            <MembersCards props={each} />
          ))}
        </div>
      </div> */}

      <ContactUs />
    </div>
  );
};
