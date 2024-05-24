import { Input, InputProps } from "@nextui-org/react";

interface KappalInputProps extends InputProps {
    customProp?: string;
}

const KappalInput: React.FC<KappalInputProps> = ({ customProp, ...props }) => {

    return (
        <Input
            {...props} // Spread other input-related props
            variant="underlined"
        />
    );
};

export default KappalInput;
