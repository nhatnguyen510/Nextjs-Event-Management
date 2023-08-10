import react from "react";
import { Avatar } from "@mui/material";

interface UserAvatarProps {
  size?: "small" | "normal";
  avatarLink?: string;
}

export const UserAvatar: react.FC<UserAvatarProps> = ({
  size = "normal",
  avatarLink,
}) => {
  return (
    <Avatar
      src={avatarLink}
      sx={size === "small" ? { width: 24, height: 24 } : {}}
    />
  );
};
