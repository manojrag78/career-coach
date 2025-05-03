import { childrenInterface } from "@/lib/interfaces/interfaces";

const AuthLayout = ({ children } : childrenInterface) => {
    return <div className="flex justify-center pt-40">{children}</div>;
  };
  
  export default AuthLayout;
  