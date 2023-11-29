import { useParams } from "react-router";
import { baseUrl } from "../../features/constant";

import { useSelector } from "react-redux";
import { useGetOrderByIdQuery } from "../../features/orderApi";

const OrderDetail = () => {

  const { id } = useParams();

  const { user } = useSelector((store) => store.userInfo);

  const { isLoading, isError, error, data } = useGetOrderByIdQuery({
    id,
    token: user.token
  });

  console.log(data);

  if (isLoading) {
    return <h1>Loading....</h1>;
  }
  return (
    <div className="p-5">



      <div className="grid grid-cols-3">

        <div className=" col-span-2">
          {data && data.orderItems.map((order) => {
            return <div key={order._id} className="grid grid-cols-2 gap-5 mb-5">
              <img className="h-[150px]" src={`${baseUrl}${order.image}`} alt="" />


              <div className="flex flex-col justify-between">
                <h1>{order.name}</h1>
                <p>Rs.{order.price}</p>
                <p>{order.qty}</p>
              </div>
            </div>

          })}
        </div>



        <div className=" ">
          <h1 className="text-2xl font-bold mb-2">Delivery Address</h1>
          <p>{data?.user.shippingAddress.address}</p>
          <p>{data?.user.shippingAddress.city}</p>
        </div>


      </div>







      <div className="bg-black text-white flex justify-between py-2 px-5 mt-10">
        <h1 className="text-xl">Total:-</h1>
        <h1>Rs. {data.totalPrice}</h1>

      </div>

    </div >
  )
}
export default OrderDetail