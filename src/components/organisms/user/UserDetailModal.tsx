import { memo, VFC, useState, useEffect, ChangeEvent } from "react";
import { Modal, ModalFooter } from "@chakra-ui/react";
import {
  Stack,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { User } from "../../../types/api/user";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";

type Props = {
  user: User | null;
  isOpen: boolean;
  isAdmin?: boolean;
  onClose: () => void;
};

export const UserDetailModal: VFC<Props> = memo(
  ({ user, isOpen, isAdmin = false, onClose }) => {
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    useEffect(() => {
      setUsername(user?.username || "");
      setName(user?.name || "");
      setEmail(user?.email || "");
      setPhone(user?.phone || "");
    }, [user]);

    const onClickUpdata = () => alert("aa");

    const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) =>
      setUsername(e.target.value);
    const onChangeName = (e: ChangeEvent<HTMLInputElement>) =>
      setName(e.target.value);
    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) =>
      setEmail(e.target.value);
    const onChangePhone = (e: ChangeEvent<HTMLInputElement>) =>
      setPhone(e.target.value);

    return (
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        autoFocus={false}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent pb={isAdmin ? 2 : 6}>
          <ModalHeader>ユーザー詳細</ModalHeader>
          <ModalCloseButton />
          <ModalBody mx={4}>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>名前</FormLabel>
                <Input
                  value={username}
                  onChange={onChangeUserName}
                  isReadOnly={!isAdmin}
                />
              </FormControl>
              <FormControl>
                <FormLabel>フルネーム</FormLabel>
                <Input
                  value={name}
                  onChange={onChangeName}
                  isReadOnly={!isAdmin}
                />
              </FormControl>
              <FormControl>
                <FormLabel>メールアドレス</FormLabel>
                <Input
                  value={email}
                  onChange={onChangeEmail}
                  isReadOnly={!isAdmin}
                />
              </FormControl>
              <FormControl>
                <FormLabel>電話番号</FormLabel>
                <Input
                  value={phone}
                  onChange={onChangePhone}
                  isReadOnly={!isAdmin}
                />
              </FormControl>
            </Stack>
          </ModalBody>
          {isAdmin && (
            <ModalFooter>
              <PrimaryButton onClick={onClickUpdata}>更新</PrimaryButton>
            </ModalFooter>
          )}
        </ModalContent>
      </Modal>
    );
  }
);
