export const notA = (attribute) => {
  if (attribute === "" || attribute === "NULL" || attribute === undefined) {
    return true;
  } else {
    return false;
  }
};
export const getDate = (date) => {
  const today = new Date(date);
  const options = { year: "numeric", month: "short", day: "numeric" };
  return today.toLocaleDateString("en-US", options);
};
