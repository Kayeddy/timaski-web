"use client";

import React from "react";
import { Element } from "react-scroll";

import CustomCtaButton from "@/components/ui/custom-cta-button";
import { features } from "@/utils/constants";
import { Image } from "@nextui-org/react";

interface Feature {
  id: string;
  icon: string;
  caption: string;
  title: string;
  text: string;
  button: {
    icon: string;
    title: string;
  };
}

interface Detail {
  id: string;
  icon: string;
  title: string;
}

const Features: React.FC = () => {
  // Separate features and details from the constants
  const vetFeatures = features.vetFeatures.filter(
    (item): item is Feature => !!item.caption
  );
  const vetDetails = features.vetFeatures.filter(
    (item): item is Detail => !item.caption
  );

  const petOwnerFeatures = features.petOwnerFeatures.filter(
    (item): item is Feature => !!item.caption
  );
  const petOwnerDetails = features.petOwnerFeatures.filter(
    (item): item is Detail => !item.caption
  );

  return (
    <section>
      <Element name="beneficios">
        <div className="container">
          {/* Vet Features */}
          <div className="feature-after md:g7 relative flex flex-nowrap rounded-7xl border-2 border-s3 max-md:flex-col max-md:gap-3 max-md:rounded-none max-md:border-none md:flex-wrap md:overflow-hidden">
            {vetFeatures.map((feature) => (
              <div
                key={feature.id}
                className="max-md:g7 relative z-20 flex-50 px-5 pb-5 max-md:flex-320 max-md:rounded-3xl max-md:border-2 max-md:border-s3 md:px-10 md:pb-10"
              >
                <div className="flex w-full items-start justify-start">
                  <div className="-ml-3 mb-12 flex flex-col items-center justify-center">
                    <div className="h-16 w-0.5 bg-s3" />
                    <Image
                      src={feature.icon}
                      className="size-28 object-contain"
                      alt={feature.title}
                    />
                  </div>
                </div>

                <p className="caption mb-5 max-md:mb-6">{feature.caption}</p>
                <h2 className="h3 max-md:h5 mb-7 max-w-400 text-p4 max-md:mb-6">
                  {feature.title}
                </h2>
                <p className="body-1 max-md:body-3 mb-11 max-md:mb-8">
                  {feature.text}
                </p>
                <CustomCtaButton icon={feature.button.icon}>
                  {feature.button.title}
                </CustomCtaButton>
              </div>
            ))}

            {/* Pet Owner Features */}
            {petOwnerFeatures.map((feature) => (
              <div
                key={feature.id}
                className="max-md:g7 relative z-2 flex-50 px-5 pb-5 max-md:flex-320 max-md:rounded-3xl max-md:border-2 max-md:border-s3 md:px-10 md:pb-10"
              >
                <div className="flex w-full items-start justify-start">
                  <div className="-ml-3 mb-12 flex flex-col items-center justify-center">
                    <div className="h-16 w-0.5 bg-s3" />
                    <Image
                      src={feature.icon}
                      className="size-28 object-contain"
                      alt={feature.title}
                    />
                  </div>
                </div>

                <p className="caption mb-5 max-md:mb-6">{feature.caption}</p>
                <h2 className="h3 max-md:h5 mb-7 max-w-400 text-p4 max-md:mb-6">
                  {feature.title}
                </h2>
                <p className="body-1 max-md:body-3 mb-11 max-md:mb-8">
                  {feature.text}
                </p>
                <CustomCtaButton icon={feature.button.icon}>
                  {feature.button.title}
                </CustomCtaButton>
              </div>
            ))}
          </div>

          {/* Details Section */}
          <ul className="relative flex flex-grow justify-around rounded-7xl border-2 border-s3 px-[5%] max-md:hidden">
            <div className="absolute left-0 right-0 top-[38%] z-10 h-[1px] w-full bg-s3/20" />

            {[...vetDetails, ...petOwnerDetails].map((detail) => (
              <li key={detail.id} className="relative px-4 pb-14 pt-16">
                <div className="absolute bottom-0 left-1/2 top-8 z-10 h-full w-[1px] bg-s3/20" />

                <div className="mx-auto mb-3 flex size-20 items-center justify-center rounded-full border-2 border-s2 shadow-500 transition-all duration-500 hover:border-s4">
                  <Image
                    src={detail.icon}
                    alt={detail.title}
                    className="z-20 object-contain"
                  />
                </div>

                <h3 className="base-small relative z-2 mx-auto my-0 max-w-36 text-center uppercase">
                  {detail.title}
                </h3>
              </li>
            ))}
          </ul>
        </div>
      </Element>
    </section>
  );
};

export default Features;
