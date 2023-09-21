// import MenuItem from "../../../../../interface/MenuItem"

export const DetailCartLine = ({menuitem}) => {

  console.log(menuitem)
  return (
    <div className="font-tahoma font-bold text-sm text-black mx-4">
      <div className="overflow-hidden h-50 overflow-y-scroll">

        <div className="flex mt-6  ">
          <div className="mr-4   flex  flex-col items-center relative pt-4">
            <h4 className="bg-chocolate-brown  rounded-full w-5 h-5 font-bold text-white flex items-center justify-center absolute top-2  ">
              {menuitem.amount}
            </h4>
            <div>
              <img
                className="w-20 h-20 object-cover"
                src="https://www.infobae.com/new-resizer/xHORBTTOvi76_TX7OOanBUblR-0=/1200x900/filters:format(webp):quality(85)//arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/FJKXKQKMMJBV7KQ7XQ3YNFO7LU.jpg"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-2 leading-none">
            <h2>{menuitem.product.itemName}</h2>
            <h2 className="text-intense-orange">Compo</h2>
            <h2 className="text-fire-red">Descripción</h2>
            {menuitem?.product.BeverageItemGroups?.map((BeverageItemGroup) => (
            <div>
              <h3 className="">{BeverageItemGroup.name}</h3>
              {BeverageItemGroup?.beverages?.map((beverage) => (
                <h4 className="font-normal">{beverage.itemName} {beverage.price}</h4>
                ))}
              
            </div>
            ))}
           
            
          </div>
          <div className="flex-1 text-moss-green">
            <span>${menuitem.product.price}</span>
          </div>
        </div>

      </div>

    </div>
  );
};
