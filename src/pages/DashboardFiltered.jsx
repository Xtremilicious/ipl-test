import React, { lazy, Suspense } from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import Loading from "../components/Loading";
const Feed = lazy(() => import("./Feed"));

const DashboardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
`;

export default function DashboardFiltered(props) {
  const filter = {
    Batting_Hand: ["Left_Hand"],
    Country: ["England", "Pakistan"],
  };

  return (
    <React.Fragment>
      <DashboardWrapper>
        <Sidebar filterEnabled={true} filter={filter}/>
        <Suspense fallback={<Loading/>}>
          <Feed filter={filter} />
        </Suspense>
      </DashboardWrapper>
    </React.Fragment>
  );
}
