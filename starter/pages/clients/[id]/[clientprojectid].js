import React from "react";
import {useRouter} from 'next/router'

const SelectedClientProjectPage = () => {
    const router = useRouter()
    console.log(router.query);
  return (
    <div>
      <h1>The project page for a specific project for a selected client {router.query.clientprojectid}</h1>
    </div>
  );
};


export default SelectedClientProjectPage;
