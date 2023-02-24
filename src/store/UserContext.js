import React from "react";

const UserContext = React.createContext({
  pagesData: {},
  setPagesData: () => {},
  isView: {},
  setIsView: () => {},
  selected: {},
  setSelected: () => {},
});
export const UserContextProvider = (props) => {
  const [pagesData, setPagesData] = React.useState();
  const [isView, setIsView] = React.useState("");
  const [selected, setSelected] = React.useState();
  const contextValue = {
    pagesData,
    setPagesData,
    isView,
    setIsView,
    selected,
    setSelected,
  };
  return (
    <UserContext.Provider value={contextValue}>
      {props.children}
    </UserContext.Provider>
  );
};
export default UserContext;
