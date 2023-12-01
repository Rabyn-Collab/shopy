import { PencilIcon, UserPlusIcon, TrashIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Avatar,
  IconButton,
  Tooltip,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { useNavigate } from "react-router";
import { products } from "../../dummy/products";
import { useState } from "react";
import { useGetProductsQuery, useRemoveProductByIdMutation } from "../../features/productApi";
import { baseUrl, imageBase } from "../../features/constant";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";



const TABLE_HEAD = ["Products", "Price", "Created At", "Edit", "Delete"];




const ProductList = () => {

  const { isLoading, isError, data, error } = useGetProductsQuery();
  const [removeProduct, { isLoading: isLoad }] = useRemoveProductByIdMutation();
  const [pId, setPId] = useState(0);
  const { user } = useSelector((store) => store.userInfo);

  if (isLoading) {

  }


  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  const nav = useNavigate();

  const remove = async (id) => {
    handleOpen();

    try {
      await removeProduct({ token: user.token, id }).unwrap();
      toast.success('successfully removed');
    } catch (err) {
      toast.error(err.data);
    }
  }


  return (
    <>
      <Card className="h-full w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-5 flex items-center justify-between gap-8">
            <div>
              <Typography variant="h5" color="blue-gray">
                Product List
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                See information about all products
              </Typography>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">

              <Button onClick={() => nav('/admin/productAdd')} className="flex items-center gap-3" color="blue" size="sm">
                <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add Product
              </Button>
            </div>
          </div>

        </CardHeader>
        <CardBody className="overflow-scroll px-0">
          <table className="mt-4 w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th key={head} className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data && data.map(({ product_image, product_name, createdAt, _id, product_price }, index) => {
                const isLast = index === products.length - 1;
                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                return <tr key={_id} >
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      <Avatar src={`${imageBase}${product_image}`} size="sm" />
                      <div className="flex flex-col">
                        <Typography variant="small" color="blue-gray" className="font-normal">
                          {product_name}
                        </Typography>

                      </div>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="flex flex-col">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        Rs.{product_price}
                      </Typography>
                    </div>
                  </td>

                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {createdAt}
                    </Typography>
                  </td>


                  <td className={classes}>
                    <Tooltip content="Edit Product">
                      <IconButton onClick={() => nav(`/admin/productEdit/${_id}`)} variant="text" color="blue-gray">
                        <PencilIcon className="h-4 w-4" />
                      </IconButton>
                    </Tooltip>
                  </td>

                  <td className={classes}>



                    <Tooltip content="Remove Product">
                      <IconButton onClick={() => {
                        setPId(_id);
                        handleOpen();
                      }} variant="text" color="red">
                        <TrashIcon className="h-4 w-4" />
                      </IconButton>
                    </Tooltip>







                  </td>




                </tr>

              })}
            </tbody>
          </table>
        </CardBody>
      </Card>

      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Its a simple dialog.</DialogHeader>
        <DialogBody divider>
          The key to more success is to have a lot of pillows. Put it this way, it took me
          twenty five years to get these plants, twenty five years of blood sweat and tears, and
          I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan
          luv.
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={() => remove(pId)}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  )
}




export default ProductList