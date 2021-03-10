import React from "react";
import styled from "styled-components";
import { Suspense, lazy } from 'react';


import Sidebar from "./Sidebar";

const Feed = lazy(() => import('./Feed'))

const DashboardWrapper = styled.nav`
  display: grid;
  grid-template-columns: 1fr 3fr;
`;

export default function Dashboard() {
  return (
    <React.Fragment>
      <DashboardWrapper>
        <Sidebar />
        <Suspense fallback={<h1>Still Loading…</h1>}>
        <Feed />
        </Suspense>
      </DashboardWrapper>
    </React.Fragment>
  );
}
