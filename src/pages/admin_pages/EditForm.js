import React from 'react'
import { Card, Input, Button, Typography, Textarea } from "@material-tailwind/react";
import { useNavigate } from 'react-router';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { Select, Option } from "@material-tailwind/react";
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { baseUrl, imageBase } from '../../features/constant';
import { useUpdateProductMutation } from '../../features/productApi';


const EditForm = ({ product }) => {
  const nav = useNavigate();

  const [updateProduct, { isLoading }] = useUpdateProductMutation();

  const { user } = useSelector((store) => store.userInfo);

  const valSchema = Yup.object().shape({
    product_name: Yup.string().min(5, 'too short').max(50, 'max character 50').required(),
    product_detail: Yup.string().min(10, 'too short').max(200, 'max character 200').required(),
    product_price: Yup.string().min(1, 'too short').max(5, 'max character 5').required(),
    // product_image: Yup.mixed().test('fileType', 'Invalid file type', (value) =>
    //   value && ['image/jpeg', 'image/png', 'image/jpg'].includes(value.type)
    // ).test('fileSize', 'File too large', (value) =>
    //   value && value.size <= 10 * 1024 * 1024
    // ),
    brand: Yup.string().min(4, 'too short').max(200, 'max character 200').required(),
    category: Yup.string().min(5, 'too short').max(20, 'max character 20').required(),
    countInStock: Yup.string().min(1, 'too short').max(3, 'max character 3').required()
  });




  const formik = useFormik({
    initialValues: {
      product_name: product.product_name,
      product_detail: product.product_detail,
      product_price: product.product_price.toString(),
      product_image: null,
      brand: product.brand,
      category: product.category,
      countInStock: product.countInStock,
      preview: `${imageBase}${product.product_image}`,
    },
    onSubmit: async (val) => {
      let formData = new FormData();
      formData.append('product_name', val.product_name);
      formData.append('product_detail', val.product_detail);
      formData.append('product_price', Number(val.product_price));
      formData.append('brand', val.brand);
      formData.append('category', val.category);
      formData.append('countInStock', Number(val.countInStock));

      try {

        if (val.product_image === null) {
          const response = await updateProduct({
            body: formData,
            token: user.token,
            id: product._id
          }).unwrap();
          toast.success('successfully add');
          nav(-1);
        } else {
          formData.append('product_image', val.product_image);
          formData.append('imagePath', product.product_image);
          const response = await updateProduct({
            body: formData,
            token: user.token,
            id: product._id
          }).unwrap();
          toast.success('successfully updated');
          nav(-1);
        }

      } catch (err) {
        toast.error(err.data);
      }
    },
    validationSchema: valSchema
  });



  return (
    <div className='max-w-sm mt-[15px]  mx-auto pb-4 '>
      <div>
        <Card className='place-self-center' color="transparent" shadow={false} >
          <Typography variant="h4" color="blue-gray">
            Add Product
          </Typography>

          <form onSubmit={formik.handleSubmit} className="mt-5 mb-2 ">
            <div className="space-y-7 flex flex-col ">

              <div>
                <Input
                  name='product_name'
                  id='product_name'
                  type='text'
                  onChange={formik.handleChange}
                  value={formik.values.product_name}
                  size="lg" label="Name" />
                {formik.errors.product_name && formik.touched.product_name ? <h1 className='mt-2 text-red-600'>{formik.errors.product_name}</h1> : null}

              </div>


              <div>
                <Input
                  name='product_price'
                  id='product_price'
                  type='number'
                  onChange={formik.handleChange}
                  value={formik.values.product_price}
                  size="lg" label="Price" />
                {formik.errors.product_price && formik.touched.product_price ? <h1 className='mt-2 text-red-600'>{formik.errors.product_price}</h1> : null}
              </div>


              <div>
                <Input
                  name='brand'
                  id='brand'
                  type='text'
                  onChange={formik.handleChange}
                  value={formik.values.brand}
                  size="lg" label="Brand" />
                {formik.errors.brand && formik.touched.brand ? <h1 className='mt-2 text-red-600'>{formik.errors.brand}</h1> : null}

              </div>


              <div>
                <p>Select an Image</p>
                <input
                  name='product_image'
                  onChange={(e) => {
                    const file = e.currentTarget.files[0];
                    formik.setFieldValue('product_image', file);
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.addEventListener('load', () => {
                      formik.setFieldValue('preview', reader.result);
                    })
                  }} type="file" />
                {formik.errors.product_image && formik.touched.product_image ? <h1 className='mt-2 text-red-600'>{formik.errors.product_image}</h1> : null}
                <div className='border border-gray-600 h-[150px] my-1 w-full'>
                  {formik.values.preview !== null && <img src={formik.values.preview} alt="" className='object-cover h-full w-full' />}
                </div>
              </div>



              <div className="w-72">
                <Select value={product.category} label="Select Category" name='category' onChange={(e) => formik.setFieldValue('category', e)}>
                  <Option value='sports' >Sports</Option>
                  <Option value='clothes'>Clothes</Option>
                  <Option value='tech'>Tech</Option>
                  <Option value='games'>Games</Option>
                  <Option value='beauty products'>Beauty Products</Option>
                </Select>
              </div>




              <div>
                <Input
                  name='countInStock'
                  id='countInStock'
                  type='number'
                  onChange={formik.handleChange}
                  value={formik.values.countInStock}
                  size="lg" label="Count In Stock" />
                {formik.errors.countInStock && formik.touched.countInStock ? <h1 className='mt-2 text-red-600'>{formik.errors.countInStock}</h1> : null}
              </div>



              <div>
                <Textarea
                  name='product_detail'
                  id='product_detail'
                  type='text'
                  onChange={formik.handleChange}
                  value={formik.values.product_detail}
                  label="Description"
                />
                {formik.errors.product_detail && formik.touched.product_detail ? <h1 className='mt-2 text-red-600'>{formik.errors.product_detail}</h1> : null}



              </div>


            </div>



            {
              isLoading ? <Button disabled className="mt-6 relative py-2 flex justify-center" fullWidth>
                <div className='h-7 w-7 border-2  rounded-full border-t-gray-900 animate-spin'>
                </div>
              </Button> :


                <Button type='submit' className="mt-6" fullWidth>
                  Submit
                </Button>


            }

          </form>
        </Card>
      </div>
    </div>
  )
}

export default EditForm