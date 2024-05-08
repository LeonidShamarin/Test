import React from "react";

function MyModal({ open, disableGlobalScroll, children }) {
  React.useEffect(() => {
    if (open && disableGlobalScroll) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open, disableGlobalScroll]);

  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 1000,
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "4px",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      }}
    >
      {children}
    </div>
  );
}

export default MyModal;
