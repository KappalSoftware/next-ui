import React, { ChangeEvent } from "react";
import { Select, SelectItem } from "@nextui-org/react";

interface KappalSelectProps {
    items: Array<{ key: string; label: string; description?: string }>;
    onChange?: (label: string, key: string) => void;
    label: string;
    placeholder?: string;
}

export const KappalSelect: React.FC<KappalSelectProps> = ({ items, label, onChange }) => {
    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedItem = items.find(item => item.key === event.target.value);
        if (selectedItem && onChange) {
            onChange(selectedItem.label, selectedItem.key);
        }
    };
    return (
        <Select
            items={items}
            label={label}
            size="sm"
            onChange={handleChange}
        >
            {(item) => <SelectItem key={item.key}>{item.label}</SelectItem>}
        </Select>
    );
}
