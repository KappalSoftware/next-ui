import { Card, CardProps } from "@nextui-org/react";

interface KappalCardProps extends CardProps {
  customProp?: string;
}

const KappalCard: React.FC<KappalCardProps> = ({ customProp, ...props }) => {

  return (
    <Card
      {...props}
    />
  );
};

export default KappalCard;
