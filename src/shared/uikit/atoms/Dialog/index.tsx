import classes from "./index.module.scss";

export function Dialog({
  children,
  isOpen,
  onClose,
}: {
  children: React.ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}) {
  return (
    <dialog
      open={isOpen}
      className={classes.dialog}
      onClick={(e) => {
        if ("tagName" in e.target && e.target.tagName === "DIALOG") {
          onClose?.();
        }
      }}
    >
      {children}
    </dialog>
  );
}
