"use client";

import CustomCtaButton from "@/components/ui/custom-cta-button";
import { Element, Link as LinkScroll } from "react-scroll";
import { FaShieldDog } from "react-icons/fa6";
import { Image } from "@nextui-org/react";

const Hero = () => {
  return (
    <section className="relative pb-40 pt-60 max-lg:pb-36 max-lg:pt-52 max-md:pb-32 max-md:pt-36">
      <Element name="hero">
        <div className="container">
          <div className="relative z-20 max-w-512 max-lg:max-w-388">
            <div className="caption small-2 uppercase text-p3">
              Mascotas felices
            </div>
            <h1 className="h1 max-lg:h2 mb-6 uppercase text-p4 max-lg:mb-7 max-md:mb-4 max-md:text-5xl max-md:leading-12">
              Cuidado Sin Límites
            </h1>
            <p className="body-1 mb-14 max-w-440 max-md:mb-10">
              Tu mascota merece lo mejor. Sube sus datos y conéctate con
              veterinarios locales que quieren cuidar de ellos tanto como tú.
              ¡Es simple, seguro y dedicado al bienestar de tu amigo peludo!
            </p>
            <LinkScroll to="features" offset={-100} spy smooth>
              <CustomCtaButton icon={FaShieldDog}>Únete ahora</CustomCtaButton>
            </LinkScroll>
          </div>

          <div className="hero-img_res pointer-events-none absolute -top-32 left-[calc(50%-340px)] w-[1230px]">
            <Image
              src="/assets/images/hero.png"
              className="size-1230 max-lg:h-auto"
              alt="hero"
            />
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
