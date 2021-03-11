import React, { lazy, Suspense } from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import Loading from "../components/Loading"
const Feed = lazy(() => import("./Feed"));

const DashboardWrapper = styled.nav`
  display: grid;
  grid-template-columns: 1fr 3fr;
`;

export default function Dashboard() {
  return (
    <React.Fragment>
      <DashboardWrapper>
        <Sidebar />
        <Suspense fallback={Loading}>
          <Feed />
        </Suspense>
      </DashboardWrapper>
    </React.Fragment>
  );
}
