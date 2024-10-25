"use client";

import CustomCtaButton from "@/components/ui/custom-cta-button";
import { Image } from "@nextui-org/react";
import { Element } from "react-scroll";
import { FaPlay as PlayIcon } from "react-icons/fa";

const Demo = () => {
  return (
    <section>
      <Element
        name="demo"
        className="g7 relative pb-32 pt-24 max-lg:pb-24 max-md:py-16"
      >
        <div className="container">
          <div className="flex items-center">
            <div className="max-lg:flex256 relative mr-6 flex-540 max-xl:flex-280 max-md:flex-100">
              <div className="mb-10">
                <Image
                  src="assets/core/logo_timaski-lg.svg"
                  width={160}
                  height={55}
                  alt="logo_timaski-lg"
                />
              </div>

              <p className="body-1 mb-10 max-w-md">
                ¿Tienes curiosidad? ¡Mira nuestro demo y descubre lo que te
                espera con Timaski!
              </p>

              <div className="relative flex items-center pt-8">
                <span className="absolute left-0 z-10 my-auto self-center">
                  <CustomCtaButton icon={PlayIcon}>
                    Reproducir demo
                  </CustomCtaButton>
                </span>
                <span className="demo_tech-cta-connector" />
                <span className="demo_tech-cta-dot" />
              </div>
            </div>

            <div className="mb-10 max-md:hidden">
              <div className="demo_preview-before demo_preview-after relative w-[955px] rounded-40 border-2 border-s5 p-6">
                <div className="relative rounded-3xl bg-s1 px-6 pb-6 pt-14">
                  <span className="demo_preview-dot left-6 bg-p2" />
                  <span className="demo_preview-dot left-11 bg-s3" />
                  <span className="demo_preview-dot left-16 bg-p1/15" />

                  <Image
                    src="/"
                    width={855}
                    height={655}
                    alt="screen"
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};
export default Demo;
