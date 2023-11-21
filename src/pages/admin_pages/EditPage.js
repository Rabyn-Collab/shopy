import React from 'react'
import { useParams } from 'react-router';
import { useGetProductByIdQuery } from '../../features/productApi';
import EditForm from './EditForm';

const EditPage = () => {
  const { id } = useParams();
  const { data, error, isLoading, isError } = useGetProductByIdQuery(id);

  if (isLoading) {

  }

  if (isError) {

  }
  return (
    <>
      {data && <EditForm product={data} />}

    </>
  )
}

export default EditPage
