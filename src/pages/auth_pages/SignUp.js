import React from 'react'
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useNavigate } from 'react-router';
import { useFormik } from 'formik';
import * as Yup from 'yup';



const SignUp = () => {


  const registerSchema = Yup.object().shape({
    fullname: Yup.string().min(5).max(20).required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(5).max(20).required('Required')

  });

  const nav = useNavigate();


  const formik = useFormik({
    initialValues: {
      fullname: '',
      email: '',
      password: ''

    },
    onSubmit: async (val) => {



    },
    validationSchema: registerSchema
  });


  return (
    <Card color="transparent" shadow={false} className='mx-auto max-w-xl mt-12 space-y-9'  >
      <Typography variant="h4" color="blue-gray">
        SignUp Form
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4 flex flex-col gap-6">

          <Input
            name='fullname'
            onChange={formik.handleChange}
            value={formik.values.fullname}
            size="lg" label="UserName" />

          {formik.errors.fullname && formik.touched.fullname && <h1 className='text-pink-700'>{formik.errors.fullname}</h1>}


          <Input
            name='email'
            onChange={formik.handleChange}
            value={formik.values.email}
            size="lg" label="Email" />

          {formik.errors.email && formik.touched.email && <h1 className='text-pink-700'>{formik.errors.email}</h1>}


          <Input
            name='password'
            onChange={formik.handleChange}
            value={formik.values.password}
            type="password" size="lg" label="Password" />
          {formik.errors.password && formik.touched.password && <h1 className='text-pink-700'>{formik.errors.password}</h1>}
        </div>

        {/* {isLoading ? <Button type='submit' className="mt-6" fullWidth>
          <div className='h-7 w-7 border-2 border-t-blue-gray-900 rounded-full animate-spin mx-auto '></div>
        </Button> : */}

        <Button type='submit' className="mt-6" fullWidth>
          Submit
        </Button>
        {/* } */}



        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account ?{" "}
          <button type='button' onClick={() => nav(-1)}>  <h1

            className="font-medium text-blue-500 transition-colors hover:text-blue-700"
          >
            Login
          </h1>
          </button>
        </Typography>
      </form>
    </Card>
  )
}

export default SignUp