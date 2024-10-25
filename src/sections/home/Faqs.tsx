"use client";

import React from "react";
import { Element } from "react-scroll";
import { faqs } from "@/utils/constants";
import FaqItem from "@/components/home/FaqItem";
import { Image } from "@nextui-org/react";

const Faqs: React.FC = () => {
  return (
    <section>
      <Element name="faq" className="relative">
        <div className="container relative z-2 py-28">
          <div>
            <h3 className="h3 max-md:h5 mb-7 max-w-640 text-p4 max-lg:max-w-md">
              La curiosidad no mató al gato, le dio respuestas.
            </h3>
            <p className="body-1 max-lg:max-w-sm">
              Tienes preguntas, tienes respuestas.
            </p>
          </div>

          <div className="faq-line_after absolute left-[calc(50%-1px)] top-0 -z-1 h-full w-0.5 bg-s2" />
        </div>

        <div className="faq-glow_before relative z-2 border-2 border-s2 bg-s1">
          <div className="container flex gap-10 max-lg:block">
            <div className="absolute -top-10 left-[calc(50%-40px)] z-4 flex size-20 items-center justify-center rounded-half border-2 border-s2 bg-s1">
              <Image
                src="assets/svg/logo-separator.svg"
                alt="logo"
                className="z-20"
              />
            </div>

            {/* Vet FAQs */}
            <div className="relative flex-1 pt-24">
              <p className="caption pb-6">Para veterinarios</p>

              {faqs.vetFaqs.map((item, index) => (
                <FaqItem key={item.id} item={item} index={index + 1} />
              ))}
            </div>

            {/* Pet Owner FAQs */}
            <div className="relative flex-1 lg:pt-24">
              <p className="caption pb-6">Para dueños de mascotas</p>

              {faqs.petOwnerFaqs.map((item, index) => (
                <FaqItem key={item.id} item={item} index={index + 1} />
              ))}
            </div>
          </div>

          <div className="faq-line_after absolute left-[calc(50%-1px)] top-0 -z-1 h-full w-0.5 bg-s2 max-lg:hidden" />
        </div>
      </Element>
    </section>
  );
};

export default Faqs;
