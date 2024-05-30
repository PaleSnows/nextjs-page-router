import React from "react";
import { useRouter } from "next/router";

const ClientProjectPage = () => {
  const router = useRouter();
  console.log(router.query);

  function loadProjectHandler() {
    router.push({
        pathname:'/clients/[id]/[clientprojectid]',
        query:{id:"1",clientprojectid:"2"}
    });
  }
  return (
    <div>
      <h1>ClientProjectPage</h1>
      <button onClick={loadProjectHandler}>Load project A</button>
    </div>
  );
};

export default ClientProjectPage;
