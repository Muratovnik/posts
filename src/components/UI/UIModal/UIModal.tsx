import { useMemo, ReactElement } from "react";
import classes from "./UIModal.module.css";

interface Props {
  children: ReactElement | ReactElement[];
  isVisible: boolean;
  setIsVisible: (value: boolean) => void;
}

const UIModal = ({ children, isVisible, setIsVisible }: Props) => {
  const rootClasses = useMemo(() => {
    return isVisible
      ? [classes.UIModal, classes.active].join(" ")
      : classes.UIModal;
  }, [isVisible]);

  return (
    <div className={rootClasses} onClick={() => setIsVisible(false)}>
      <div
        className={classes.myModalContent}
        onClick={(evt) => evt.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default UIModal;
