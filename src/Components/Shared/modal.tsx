import * as React from "react";
import { Desc, Message, ModalBody, ModalContent } from "./style";
import { Button } from "../style";
import Sheep  from "./../../assets/images/sheep.gif";

interface sharedModalBundle {
  open: boolean;
  setOpen: (open: boolean) => void;
  component: React.ReactElement;
  inputValue: string;
}

interface ModalProps {
  onSubmit?: () => void;
  onCancel?: () => void;
  loading?: boolean;
  children?: React.ReactElement;
  head?: React.ReactElement;
  heading?: string;
  description?: string;
  animationData?: any;
  back?: any;
}

export function SharedModal(props: ModalProps): sharedModalBundle {
  const [open, setOpen] = React.useState<boolean>(false);
  const [inputValue, setInputValue] = React.useState<string>("");
  const {
    loading,
    children,
    onCancel,
    heading,
    description,
    head,
    onSubmit,
    back,
  } = props;

  const handleClickOutside = (e: any) => {
    if (e.target === e.currentTarget && !loading) {
      setOpen(false);
    }
  };

  const component = (
    <ModalBody show={open}>
      <ModalContent
        withMargin={!description ? "true" : "false"}
        back={back ? "true" : "false"}
      >
        <img src={Sheep}/>
        {heading ? (
          <Message withMargin={head ? "true" : "false"}>{heading}</Message>
        ) : null}
        {description ? <Desc>{description}</Desc> : null}
        {onSubmit ? (
          <Button onClick={onSubmit}>
            <div>Confirm</div>
          </Button>
        ) : null}
        {children ? children : null}
        <Button onClick={onCancel ? onCancel : () => setOpen(false)}>OK</Button>
      </ModalContent>
    </ModalBody>
  );

  return { open, setOpen, component, inputValue };
}
