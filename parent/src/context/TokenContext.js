import { createContext, useState } from "react";

const TokenContext = createContext();

export default TokenContext;

export function TokenProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem('parent-token'))

  const updateToken = (token) => {
    setToken(token)
    //console.log('context changed', child)
  }
  return (
    <TokenContext.Provider value={{ token, updateToken }}>
      {children}
    </TokenContext.Provider>
  )
}