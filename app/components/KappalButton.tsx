import { Button, ButtonProps, useButton } from "@nextui-org/react";

interface KappalButtonProps extends ButtonProps {
  // Add any additional props you want to expose
  customProp?: string;
}

const KappalButton: React.FC<KappalButtonProps> = ({ customProp, ...props }) => {

  return (
    <Button
      {...props}
    />
  );
};

export default KappalButton;
