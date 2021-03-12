import React from "react";
import styled from "styled-components";

import { GrFilter } from "react-icons/gr";
import Category from "../components/Category";

import { connect } from "react-redux";

const SidebarWrapper = styled.div`
  display: flex;
  height: 100vh;
  overflow-y: scroll;
  flex-direction: column;
  padding: 1.5em;
  border-right: 1px solid #e6e6e6;
  .navheader {
    display: flex;
    align-items: center;
    font-size: 1.5em;
    .headtitle {
      margin-left: 0.3em;
    }
  }
  .categories {
    margin-top: 1em;
    font-size: 1.4em;
    font-weight: 500;
    input {
      cursor: pointer;
    }
    .category {
      display: flex;
      align-items: center;
      cursor: pointer;
    }
    .count {
      color: grey;
      font-weight: 200;
    }
    .attributes {
      font-weight: normal;
      .attribute {
        margin: 0.5rem;
      }
    }
  }
`;

function Sidebar(state) {
  let { categories, filterEnabled, filter } = state;
  return (
    <SidebarWrapper>
      <div className="navheader">
        <GrFilter />
        <span className="headtitle">FILTERS</span>
      </div>
      <div className="sidebar-content accordion" id="accordionExample">
        {Object.entries(categories).map((category, index) => (
          <Category data={category} key={index} index={index} filterEnabled={filterEnabled} filter={filter} />
        ))}
      </div>
    </SidebarWrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    categories: state.data.categories,
  };
};

export default connect(mapStateToProps, {})(Sidebar);
