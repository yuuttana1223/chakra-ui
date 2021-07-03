import {
  createContext,
  Dispatch,
  SetStateAction,
  ReactNode,
  VFC,
  useState,
} from "react";
import { User } from "../types/api/user";

type LoginUser = User & {
  isAdmin: boolean;
};

export type LoginUserContextType = {
  // Userの型 + LoginUserの型を両方持っている
  loginUser: (User & LoginUser) | null;
  setLoginUser: Dispatch<SetStateAction<LoginUser | null>>;
};

export const LoginUserContext = createContext<LoginUserContextType>(
  {} as LoginUserContextType // 入れる具体的なものはないから型だけ指定
);

type Props = {
  children: ReactNode;
};

export const LoginUserProvider: VFC<Props> = ({ children }) => {
  const [loginUser, setLoginUser] = useState<LoginUser | null>(null);
  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  );
};
