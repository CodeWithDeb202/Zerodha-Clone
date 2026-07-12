import { useContext, createContext } from "react";

export const AuthContext = createContext({
  user: null,
  isCheckingAuth: true,
  logout: () => {},
});

export const useAuth = () =>{
    return useContext(AuthContext)
}