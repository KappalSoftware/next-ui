import { Avatar, AvatarProps } from "@nextui-org/react";

interface KappalAvatarProps extends AvatarProps {
  // Add any additional props you want to expose
  customProp?: string;
}

const KappalAvatar: React.FC<KappalAvatarProps> = ({ customProp, ...props }) => {

  return (
    <Avatar
      {...props}
    />
  );
};

export default KappalAvatar;
