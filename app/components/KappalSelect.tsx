import React, { ChangeEvent } from "react";
import { Select, SelectItem } from "@nextui-org/react";
// import { animals } from "./data";
interface KappalSelectProps {
    items: Array<{ key: string; label: string; description?: string }>;
    onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
    label: string;
    placeholder?: string;
}

export const KappalSelect: React.FC<KappalSelectProps> = ({ items, label, onChange }) => {
    return (
        <Select
            items={items}
            label={label}
        // label="Favorite Animal"
        // placeholder="Select an animal"
        >
            {(item) => <SelectItem key={item.key}>{item.label}</SelectItem>}
        </Select>
    );
}
