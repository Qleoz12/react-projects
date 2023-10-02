import { DetailCartLine } from "../DetailCartLine";


export const DetailCart = ({detail}) => {
  return (
    <div className="font-tahoma font-bold text-sm text-black mx-4">
      <div className="overflow-hidden h-96 overflow-y-scroll">
      {detail.map((item,index) => (
          <DetailCartLine  menuitem={item} key={index} ></DetailCartLine>
        ))}
      </div>
    </div>
  );
};
