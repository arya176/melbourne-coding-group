type BottomClothesProps = {
  bottom: {
    id: number;
    img: string;
    brands: string;
    color: string;
    size: number;
  }[];
};

export const BottomClothes = (props: BottomClothesProps) => {
  return (
    <div className="z-10">
      {props.bottom.map((koko) => {
        return (
          <div key={koko.id}>
            <img src={koko.img} alt="pic" />
            <h2>{koko.brands}</h2>
            <h4>{koko.color}</h4>
            <h4>{koko.size}</h4>
          </div>
        );
      })}
    </div>
  );
};
