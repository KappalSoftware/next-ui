// components/LoginModalContent.tsx
import React, { useState } from 'react';
import { ModalHeader, ModalBody, ModalFooter, Button, Modal, ModalContent } from "@nextui-org/react";

interface KappalModalProps {
    onOpenChange: () => void;
    onClose: () => void;
    onOpen?: () => void;
    onSave: () => void;
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "full";
    headerText: string;
    saveText?: 'Save' | 'Add' | 'Update';
    closeText?: 'Close';
    children: React.ReactNode;
    isOpen: boolean;

}

const KappalModal: React.FC<KappalModalProps> = ({ size = "4xl", saveText = "Save", closeText = "Close", children, ...props }) => {
    return (
        <Modal
            size={size}
            isOpen={props.isOpen}
            onClose={props.onClose}
            onOpenChange={props.onOpenChange}
            backdrop="opaque"
            placement="top-center"
            isDismissable={false}
            isKeyboardDismissDisabled = {false}
            classNames={{
                body: "py-6",
                backdrop: "bg-gray-700/80 backdrop-blur-xl",
                base: "bg-white dark:bg-slate-900 text-[#a8b0d3]",
                header: "border-b-[1px] border-white dark:border-slate-900",
                footer: "border-t-[1px] border-white dark:border-slate-900" ,
                closeButton: "hover:bg-white/5 active:bg-white/10",
              }}
              motionProps={{
                variants: {
                  enter: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      duration: .4,
                      ease: "easeOut",
                    },
                  },
                  exit: {
                    y: -20,
                    opacity: 0,
                    transition: {
                      duration: 0.2,
                      ease: "easeIn",
                    },
                  },
                }
              }}
        >
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">{props.headerText}</ModalHeader>
                        <ModalBody>
                            {children}
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="flat" onPress={props.onClose}>
                                {closeText}
                            </Button>
                            <Button color="success" onPress={props.onSave}>
                                {saveText}
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};

export default KappalModal;
