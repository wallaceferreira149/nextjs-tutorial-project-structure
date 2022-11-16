import { createContext, ReactNode, useState } from "react";

interface IAuthContext {
  isAuthenticated: boolean;
  login: () => void;
  logOut: () => void;
}

const defautlValue: IAuthContext = {
  isAuthenticated: false,
  login: () => undefined,
  logOut: () => undefined,
};

interface IProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<IAuthContext>(defautlValue);

export const AuthProvider: React.FC<IProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    defautlValue.isAuthenticated
  );
  const login = () => setIsAuthenticated(true);
  const logOut = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
