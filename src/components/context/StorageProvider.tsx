import React, { useState } from 'react';

export type StorageContextType = {
  setStorage: (value: string) => void;
  value: string
};

export const StorageContext = React.createContext<StorageContextType>({
  value: '',
  setStorage: () => void 0,
});

type StorageProviderProps = {
  fieldName: string;
};

export function StorageProvider({ children, fieldName }: React.PropsWithChildren<StorageProviderProps>) {
  const [value, setValue] = useState(localStorage.getItem(fieldName));

  const setStorage = function(newValue: string) {
    localStorage.setItem(fieldName, newValue);
    setValue(newValue);
  };

  return <StorageContext.Provider value={{
    value,
    setStorage,
  }}>
    {children}
  </StorageContext.Provider>;
}