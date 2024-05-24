import { Breadcrumbs, BreadcrumbsProps } from "@nextui-org/react";

interface KappalBreadcrumbsProps extends BreadcrumbsProps {
  // Add any additional props you want to expose
  customProp?: string;
}

const KappalBreadcrumbs: React.FC<KappalBreadcrumbsProps> = ({ customProp, ...props }) => {

  return (
    <Breadcrumbs
      {...props}
    />
  );
};

export default KappalBreadcrumbs;
