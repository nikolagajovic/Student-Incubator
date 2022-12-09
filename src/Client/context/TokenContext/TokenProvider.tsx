import { createContext, useContext, useState } from "react";

export const TokenContext = createContext("") as any;

interface ITokenProvider {
  token: string;
  setToken: (token: string) => {};
}

export const TokenProvider = ({ children }: any) => {
  const [token, setToken] = useState(localStorage.getItem("token") ?? "");

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
};

export function useToken(): ITokenProvider {
  return useContext(TokenContext)
} 