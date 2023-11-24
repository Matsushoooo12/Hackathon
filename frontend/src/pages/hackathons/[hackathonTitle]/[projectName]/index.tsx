import { useRouter } from "next/router";
import React from "react";

const MyProject = () => {
  const router = useRouter();
  const { projectName } = router.query;
  return <div>{projectName}</div>;
};

export default MyProject;
