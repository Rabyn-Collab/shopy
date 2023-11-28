import { useNavigate } from "react-router";
import { Button } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { useAddOrderMutation } from "../../features/orderApi";
import { toast } from "react-toastify";
import { clearCart } from "../../features/userSlice";



const OrderPage = () => {
  const [addOrder, { isLoading }] = useAddOrderMutation();
  const { carts, user } = useSelector((store) => store.userInfo);

  const totals = carts.reduce((a, b) => {
    return a + b.qty * b.price
  }, 0);



  const nav = useNavigate();

  const dispatch = useDispatch();
  const orderAdd = async () => {
    try {
      const response = await addOrder({
        token: user.token,
        body: {
          orderItems: carts,
          totalPrice: totals
        }
      }).unwrap();
      dispatch(clearCart());

      toast.success('successfully added');
      nav('/');
    } catch (err) {
      console.log(err);
      toast.error(err.data);
    }
  }

  return (
    <div className="p-10 space-y-10">
      <h1>Delivery Address</h1>

      <p className="text-gray-700">{user.shippingAddress.address}, {user.shippingAddress.city}</p>

      <p>Total Amount is {totals}</p>

      {isLoading ? <Button className="mt-6 max-w-5xl">
        <div className='h-7 w-7 border-2 border-t-blue-gray-900 rounded-full animate-spin mx-auto '></div>
      </Button> :
        <Button type="submit" onClick={() => orderAdd()} className="mt-6 max-w-lg" >
          CheckOut
        </Button>
      }

    </div>

  )
}
export default OrderPage