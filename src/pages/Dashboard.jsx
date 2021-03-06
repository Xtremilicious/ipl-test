import React, { lazy, Suspense } from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import Loading from "../components/Loading";
const Feed = lazy(() => import("./Feed"));

const DashboardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
`;

export default function Dashboard(props) {
  return (
    <React.Fragment>
      <DashboardWrapper>
        <Sidebar filterEnabled={false} />
        <Suspense fallback={<Loading />}>
          <Feed />
        </Suspense>
      </DashboardWrapper>
    </React.Fragment>
  );
}
