// interface ITestProps {
//   name: string;
//   last: string;
//   conditions: string;
//   age: number;
// }

// export const Test: React.FC<ITestProps> = (props) => {
//   return (
//     <div className="z-10">
//       <h2>hello {props.name} and good job</h2>
//       <p>looks great</p>
//     </div>
//   );
// };

// type TestProps = {
//   name: string;
//   last: string;
//   conditions: string;
//   age: number;
// };

// export const Test: React.FC<TestProps> = (props) => {
//   return (
//     <div className="z-10">
//       <h2>hello {props.name} and good job</h2>
//       <p>looks great</p>
//     </div>
//   );
// };

// interface ITestProps {
//   name: string;
//   last: string;
//   conditions: string;
//   age: number;
// }

// export const Test = (props: ITestProps) => {
//   return (
//     <div className="z-10">
//       <h2>hello {props.name} and good job</h2>
//       <p>looks great</p>
//     </div>
//   );
// };

/////////////////////////////////////////////////////////////

// type TestProps = {
//   detail: {
//     name: string;
//     last: string;
//     conditions: string;
//     age: number;
//     ifIsLog: boolean;
//   };
// };
type TopClothesProps = {
  top: {
    id: number;
    img: string;
    brands: string;
    color: string;
    size: number;
  }[];
};

export const TopClothes = (props: TopClothesProps) => {
  return (
    <div className="z-10">
      {props.top.map((koko) => {
        return (
          <div key={koko.id}>
            <img src={koko.img} alt="pic" />
            <h2>{koko.brands}</h2>
            <h4>{koko.color}</h4>
            <h4>{koko.size}</h4>
          </div>
        );
      })}

      {/* <h2>
        {props.detail.ifIsLog
          ? `welsome to ${props.detail.name}`
          : "you are guess"}
      </h2> */}
    </div>
  );
};
