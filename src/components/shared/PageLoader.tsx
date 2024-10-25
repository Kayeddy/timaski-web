"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Image, Spinner } from "@nextui-org/react";
import { BlurImage } from "../ui/blur-image";

const PageLoader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Disable scrolling when loading starts
    document.body.style.overflow = "hidden";

    // Select all non-SVG images on the page
    const images = Array.from(document.querySelectorAll("img")).filter(
      (img) => !img.src.includes(".svg")
    ) as HTMLImageElement[];
    let loadedImages = 0;

    const checkImagesLoaded = () => {
      loadedImages += 1;
      if (loadedImages === images.length) {
        setTimeout(() => {
          setIsLoading(false);
          // Ensure the scroll position is reset to the top
          window.scrollTo({ top: 0, behavior: "instant" });
          document.body.style.overflow = ""; // Re-enable scrolling
        }, 2000);
      }
    };

    images.forEach((img) => {
      if (img.complete) {
        checkImagesLoaded();
      } else {
        img.addEventListener("load", checkImagesLoaded);
        img.addEventListener("error", checkImagesLoaded);
      }
    });

    if (images.length === 0) {
      setTimeout(() => {
        setIsLoading(false);
        // Ensure the scroll position is reset to the top
        window.scrollTo({ top: 0, behavior: "instant" });
        document.body.style.overflow = ""; // Re-enable scrolling
      }, 2000);
    }

    // Cleanup event listeners and reset overflow on unmount
    return () => {
      images.forEach((img) => {
        img.removeEventListener("load", checkImagesLoaded);
        img.removeEventListener("error", checkImagesLoaded);
      });
      document.body.style.overflow = ""; // Re-enable scrolling
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[999] flex h-screen w-screen items-center justify-center bg-s1"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="faq-line_after absolute left-44 top-0 -z-1 hidden h-full w-0.5 bg-s2 lg:block" />
          <div className="faq-line_after absolute right-44 top-0 -z-1 hidden h-full w-0.5 bg-s2 lg:block" />

          <div className="relative flex w-full flex-col items-center justify-center">
            <div className="faq-line_after absolute left-0 top-10 -z-1 hidden h-0.5 w-full rotate-180 bg-s2 lg:block" />
            <BlurImage
              width={500}
              height={500}
              alt="timaski-logo-lg"
              src="/assets/core/logo_timaski-lg.svg"
              className="h-[300px] w-[300px] object-contain lg:h-[400px] lg:w-[400px] lg:translate-y-[40px]"
              loading="eager"
            />

            <Spinner
              color="primary"
              size="lg"
              className="-translate-y-[50px]"
            />
            <div className="faq-line_after absolute bottom-10 left-0 -z-1 hidden h-0.5 w-full bg-s2 lg:block" />
            <div className="page-loader-glow_before inset-y-auto -z-1 my-auto w-full bg-s2" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
