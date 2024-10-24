import { createContext, useState } from "react";

const ParentContext = createContext();

export default ParentContext;

export function ParentProvider({ children }) {
  const [parentData, setParentData] = useState(localStorage.getItem('parent-data'))

  const updateParentData  = (parentData) => {
    setParentData(parentData)
    //console.log('context changed', child)
  }
  return (
    <ParentContext.Provider value={{ parentData, updateParentData }}>
      {children}
    </ParentContext.Provider>
  )
}