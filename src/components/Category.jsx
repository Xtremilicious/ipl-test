import React from "react";
import { IconContext } from "react-icons";
import { GiCricketBat } from "react-icons/gi";
import { BiTennisBall } from "react-icons/bi";
import { BiFlag } from "react-icons/bi";

export default function Category({ data, index, filterEnabled, filter }) {
  const giveAlert = () => {
    alert("Filter logic not implemented.");
  };

  const filterChecked = (category, attribute) => {
    if (filter !== undefined && filter[category] !== undefined) {
      return filter[category].includes(attribute);
    } else return false;
  };

  return (
    <div className="categories">
      <div
        className="category"
        data-toggle="collapse"
        data-target={"#cat" + index}
        aria-expanded="true"
        aria-controls={"cat" + index}
        id={"heading" + index}
      >
        <IconContext.Provider
          value={{ color: "#819FF7", className: "global-className-name" }}
        >
          {data[0] === "Batting_Hand" ? (
            <GiCricketBat />
          ) : data[0] === "Bowling_Skill" ? (
            <BiTennisBall />
          ) : data[0] === "Country" ? (
            <BiFlag />
          ) : (
            ""
          )}
        </IconContext.Provider>
        <span className="ml-1">
          {data[0]} <span className="count">[{data[1].length}]</span>
        </span>
      </div>
      <div
        id={"cat" + index}
        className="collapse show"
        aria-labelledby={"heading" + index}
      >
        {data[1].map((attribute, inputindex) => (
          <div className="attributes" key={"att" + inputindex}>
            <div className="form-check attribute">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id={"cat" + index + "flexCheck" + inputindex}
                onClick={() => giveAlert()}
                defaultChecked={
                  filterEnabled && filterChecked(data[0], attribute)
                }
              />
              <label
                className="form-check-label"
                htmlFor={"cat" + index + "flexCheck" + inputindex}
              >
                <div className="">{attribute}</div>
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
