/* eslint-disable react-hooks/exhaustive-deps */
import {
  Wrap,
  WrapItem,
  Box,
  Stack,
  Image,
  Text,
  Spinner,
  Center,
} from "@chakra-ui/react";
import { memo, useEffect, VFC } from "react";
import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";

export const UserManagement: VFC = memo(() => {
  const { getUsers, users, loding } = useAllUsers();

  useEffect(() => getUsers(), []);

  return (
    <>
      {loding ? (
        <Center>
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }} justify="center">
          {users.map((user) => (
            <WrapItem key={user.id}>
              <UserCard
                imageUrl="https://source.unsplash.com/random"
                userName={user.username}
                fullName={user.name}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
    </>
  );
});
