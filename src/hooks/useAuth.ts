/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useCallback, useState } from "react";
import { User } from "../types/api/user";
import { useHistory } from "react-router-dom";
import { useMessage } from "./useMessage";

export const useAuth = () => {
  const history = useHistory();
  const { showMessage } = useMessage();
  const [loading, setLoading] = useState<boolean>(false);

  const login = useCallback((id: string) => {
    setLoading(true);

    axios
      .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if (res.data) {
          showMessage({ title: "ログインしました", status: "success" });
          history.push("/home");
        } else {
          showMessage({ title: "ユーザーが見つかりません", status: "error" });
        }
      })
      .catch(() => {
        showMessage({ title: "ログインができません", status: "error" });
      })
      .finally(() => setLoading(false));
  }, []);

  return { login, loading };
};
