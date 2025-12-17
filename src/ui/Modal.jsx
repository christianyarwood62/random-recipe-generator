import { createPortal } from "react-dom";
import styles from "./Modal.module.css";
import { useEffect, useRef } from "react";

function Modal({ formOpen, onClose, children }) {
  const dialogRef = useRef(null);

  // Opens and closes the modal dialog
  useEffect(() => {
    // When the component mounts, the ref gets assigned to the dialog node.
    const dialog = dialogRef.current;
    // Prevents running any effect if dialog doesnt get assigned
    if (!dialog) return;

    if (formOpen && !dialog.open) dialog.showModal();
    if (!formOpen && dialog.open) dialog.close();
  }, [formOpen]);

  // Keeps react state in line with the browser DOM
  useEffect(() => {
    // When the component mounts, the ref gets assigned to the dialog node.
    const dialog = dialogRef.current;
    // Prevents running any effect if dialog doesnt get assigned
    if (!dialog) return;

    function handleClose() {
      onClose();
    }

    // close event fires when escape clicked or backdrop is clicked
    dialog.addEventListener("close", handleClose);
    return () => dialog.removeEventListener("close", handleClose);
  }, [onClose]);

  if (!formOpen) return null;

  return createPortal(
    <dialog
      className={styles.dialog}
      ref={dialogRef}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          // the outside part of the dialog is the backdrop so counts as the dialog
          // Anything clicked on the actual dialog element would be the children nodes
          e.currentTarget.close();
        }
      }}
    >
      <div>{children}</div>
    </dialog>,
    document.body
  );
}

export default Modal;
