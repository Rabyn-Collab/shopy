import React from 'react'
import { useSelector } from 'react-redux';
import { useGetOrderByUserQuery } from '../../features/orderApi';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Textarea, Button, Rating, Typography } from "@material-tailwind/react";
import { toast } from 'react-toastify';
import { useAddReviewMutation } from '../../features/productApi';



const AddReview = ({ product }) => {

  const reviewSchema = Yup.object().shape({
    comment: Yup.string().required('Required'),
    rating: Yup.string().required('Required')
  });

  const [addReview, { isLoading: load }] = useAddReviewMutation();
  const { user } = useSelector((store) => store.userInfo);
  const { isLoading, isError, data: orders } = useGetOrderByUserQuery(user.token);

  const order = orders?.map((order) => {
    return order?.orderItems?.find((or) => or.product === product._id);
  });



  const formik = useFormik({
    initialValues: {
      comment: '',
      rating: 0

    },
    onSubmit: async (val, { resetForm }) => {

      try {

        console.log({
          comment: val.comment,
          rating: val.rating,
          username: user.fullname
        });
        const response = await addReview({
          id: product._id,
          token: user.token,
          body: {
            comment: val.comment,
            rating: val.rating,
            username: user.fullname
          }
        }).unwrap();

        toast.success('successfully review  added');

      } catch (err) {
        toast.error(err.data);
      }



    },
    validationSchema: reviewSchema
  });

  if (isLoading) {
    return <h1>Loading....</h1>
  }


  return (
    <div>
      {order.length > 0 && <div>
        <h1 className="text-xl font-semibold tracking-wider mb-2">Add Reviews</h1>

        <form onSubmit={formik.handleSubmit} className="space-y-4 ">
          <div className="w-96">
            <Textarea

              name="comment"
              label="Comment"
              value={formik.values.comment}
              onChange={formik.handleChange}
            />
            {formik.errors.comment && formik.touched.comment && <h1 className='text-pink-700'>{formik.errors.comment}</h1>}

          </div>
          <div className="flex items-center gap-2">
            <Typography>
              Rate this item
            </Typography>
            <Rating
              name="rating"
              value={formik.values.rating}
              onChange={(v) => formik.setFieldValue('rating', v)} />
            {formik.errors.rating && formik.touched.rating && <h1 className='text-pink-700'>{formik.errors.rating}</h1>}

          </div>
          {load ? <Button type='submit' size="sm" color="blue-gray" className="mt-6 w-[200px]">
            <div className='h-7 w-7 border-2 border-t-white rounded-full animate-spin mx-auto '></div>
          </Button> :
            <Button type="submit" className="mt-6 w-[200px] " size="sm" color="blue-gray">
              Submit
            </Button>
          }


        </form>
      </div>
      }

    </div>
  )
}

export default AddReview
