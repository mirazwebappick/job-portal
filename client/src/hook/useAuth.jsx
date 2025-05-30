import React, { use } from "react";
import { AuthContext } from "../contexts/AuthContext";

const useAuth = () => {
  return use(AuthContext);
};

export default useAuth;
