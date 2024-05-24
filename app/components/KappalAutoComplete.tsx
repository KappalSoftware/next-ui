import { Autocomplete, AutocompleteProps } from "@nextui-org/react";

interface KappalAutoCompleteProps extends AutocompleteProps {
  customProp?: string;
}

const KappalAutoComplete: React.FC<KappalAutoCompleteProps> = ({ customProp, ...props }) => {

  return (
    <Autocomplete
      {...props}
    />
  );
};

export default KappalAutoComplete;
