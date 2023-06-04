import { NextPage } from 'next';
import React from 'react';
import { useRouter } from 'next/router';
import DynamicComponent from '../../../components/body/DynamicComponent';
import Project from '../../../components/body/projects/Project';

const index:NextPage = () => {
  const router = useRouter();
  const projectId = router.query.id;
  return (
    <DynamicComponent>
        <Project />
    </DynamicComponent>
  )
}

export default index;