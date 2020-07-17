import React, { useState, createContext } from 'react';

export const StoreContext = createContext({});
export const StoreContextProvider = (props: any) => {
  const [msisdnStore, setMsisdnStore] = useState(undefined);
  const store = {
    msisdnStore: [msisdnStore, setMsisdnStore],
  };

  return (
    <StoreContext.Provider value={store}>
      {props.children}
    </StoreContext.Provider>
  );
};
