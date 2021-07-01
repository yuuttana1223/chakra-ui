/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useCallback } from "react";
import axios from "axios";
import { User } from "../types/api/user";
import { useMessage } from "./useMessage";

export const useAllUsers = () => {
  const { showMessage } = useMessage();

  const [loding, setLoding] = useState<boolean>(false);
  const [users, setUsers] = useState<User[]>([]);

  const getUsers = useCallback(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch(() => {
        showMessage({ title: "ユーザー取得に失敗しました。", status: "error" });
      })
      .finally(() => {
        setLoding(false);
      });
  }, []);
  return { getUsers, loding, users };
};
