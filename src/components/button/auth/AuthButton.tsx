import { useContext } from "react";
import { AuthContext } from "../../../state/auth/AuthContext";

export interface IAuthButton extends React.ComponentPropsWithoutRef<"button"> {}

export const AuthButton: React.FC<IAuthButton> = ({ className, ...props }) => {
  const { isAuthenticated, login, logOut } = useContext(AuthContext);
  return (
    <button
      className={`${className} border-1 p-2 px-4 sm:px-6 bg-blue-500 rounded text-white w-28`}
      onClick={isAuthenticated ? logOut : login}
      {...props}
    >
      {isAuthenticated ? "Sign Out" : "Sign In"}
    </button>
  );
};
