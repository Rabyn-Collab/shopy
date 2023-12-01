
import {
  Rating, Typography,
  CardHeader,
  CardBody,
  Card,

} from "@material-tailwind/react";

import { useNavigate } from "react-router";
import AddReview from "../pages/user_pages/AddReview";



const Review = ({ product }) => {






  const nav = useNavigate();





  return (
    <div className="p-5 ">
      <AddReview product={product} />






      <div className="my-7">
        <hr />
      </div>


      {product.reviews.map((data) => {
        return <Card key={data._id} color="transparent" shadow={false} className="w-full max-w-sm">
          <CardHeader
            color="transparent"
            floated={false}
            shadow={false}
            className=" flex gap-5 items-start"
          >
            <div className="bg-black text-white rounded-full h-9 w-9 flex items-center justify-center">
              <p>{data.username.substring(0, 1)}</p>
            </div>


            <Typography variant="h5" color="blue-gray">
              {data.username}
            </Typography>

            <Rating value={data.rating} readonly />



          </CardHeader>
          <CardBody className="mb-6 p-0">
            <Typography className="pl-[70px]">
              {data.comment}
            </Typography>
          </CardBody>
        </Card>
      })}

    </div>
  )
}
export default Review