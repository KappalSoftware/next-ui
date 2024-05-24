import { Badge, BadgeProps } from "@nextui-org/react";

interface KappalBadgeProps extends BadgeProps {
  // Add any additional props you want to expose
  customProp?: string;
}

const KappalBadge: React.FC<KappalBadgeProps> = ({ customProp, ...props }) => {

  return (
    <Badge
      {...props}
    />
  );
};

export default KappalBadge;
