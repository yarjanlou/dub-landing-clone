import { useOutsideClick } from "@/hooks/useOutsideClick";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";

export default function HambergurMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useOutsideClick(() => setIsOpen(false));
  const iconVariants = {
    hidden: { rotate: -10, scale: 0.8, opacity: 0 },
    visible: { rotate: 0, scale: 1, opacity: 1 },
    exit: { rotate: 10, scale: 0.8, opacity: 0 },
  };

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      <button
        onClick={() => setIsOpen((s) => !s)}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        className="inline-flex items-center justify-center p-2 lg:hidden"
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.span
              key="cross"
              variants={iconVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.18, ease: "easeInOut" }}
              className="inline-block"
            >
              <RxCross2 className="stroke-[0.4] text-lg" />
            </motion.span>
          ) : (
            <motion.span
              key="hamburger"
              variants={iconVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.18, ease: "easeInOut" }}
              className="inline-block"
            >
              <RxHamburgerMenu className="stroke-[0.4] text-lg" />
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </>
  );
}
