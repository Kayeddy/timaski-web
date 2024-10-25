"use client";
import { shared } from "@/utils/constants";
import Link from "next/link";
import NavLink from "./NavLink";
import { Image } from "@nextui-org/react";
import CustomCtaButton from "../ui/custom-cta-button";
import { FaFileWaveform as FormIcon } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="overflow-hidden">
      <div className="relative flex flex-col-reverse lg:flex-row">
        {/* Big Image Positioned Below Sections */}
        <div className="absolute inset-0 -top-[200px] z-0 mx-auto flex h-full w-full items-center justify-center opacity-10 lg:-top-[150px]">
          <Image
            src="assets/svg/logo-separator.svg"
            alt="logo"
            width={500}
            height={500}
            className="grayscale"
          />
        </div>

        <div className="absolute left-[calc(50%-40px)] top-[45px] z-20 hidden size-20 items-center justify-center rounded-half border-2 border-s2 bg-s1 lg:flex">
          <Image
            src="assets/svg/logo-separator.svg"
            alt="logo"
            className="z-20"
          />
        </div>

        {/* Sections */}
        <section className="container z-10 flex w-full flex-col items-start justify-start gap-10 bg-s1/50 py-10 lg:gap-28">
          <div className="flex flex-col items-start justify-start gap-8">
            <NavLink isFooter title="beneficios" />
            <NavLink isFooter title="faq" />
            <NavLink isFooter title="demo" />
          </div>
          <div className="flex w-full translate-y-[10px] flex-col-reverse items-center justify-between gap-6 lg:flex-row">
            <div className="small-compact flex flex-1 flex-wrap items-start justify-start gap-5">
              <p className="opacity-70">© Copyright, Timaski</p>
            </div>
            <div className="flex items-center justify-center sm:ml-auto">
              <Link
                href="/"
                className="legal-after relative mr-9 text-p5 transition-all duration-500 hover:text-p1"
              >
                Privacy Policy
              </Link>
              <Link
                href="/"
                className="text-p5 transition-all duration-500 hover:text-p1"
              >
                Terms of Use
              </Link>
            </div>
          </div>
        </section>

        <section className="g7 container z-10 flex w-full flex-col gap-10 py-24 opacity-[0.95] lg:py-10">
          <div className="flex flex-col">
            <h2 className="h3 max-md:h5 mb-7 max-w-400 text-p4 max-md:mb-6">
              Únete a Nuestra Lista de Espera
            </h2>
            <p className="body-1 max-w-400">
              ¡No te lo pierdas! Sé de los primeros en probar nuestra versión
              beta. Regístrate ahora y te mantendremos al tanto con todas las
              novedades.
            </p>
          </div>
          <span className="w-fit">
            <CustomCtaButton icon={FormIcon}>
              Unirse a la lista de espera
            </CustomCtaButton>
          </span>
        </section>

        <div className="glow-footer-before z-2" />
      </div>
    </footer>
  );
};

export default Footer;
