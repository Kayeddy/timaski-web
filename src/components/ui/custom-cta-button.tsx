import { Image } from "@nextui-org/react";
import clsx from "clsx";
import { ReactNode, FC } from "react";

interface MarkerProps {
  fill?: string;
}

export const Marker: FC<MarkerProps> = ({ fill }) => {
  return (
    <svg
      width="8"
      height="22"
      viewBox="0 0 8 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.5 0H0.5V4V18V22H2.5V16.25L7.63991 11.7526C8.09524 11.3542 8.09524 10.6458 7.63991 10.2474L2.5 5.75V0Z"
        fill={fill || "#2EF2FF"}
      />
    </svg>
  );
};

interface CustomCtaButtonProps {
  icon?: FC<{ className?: string }> | string;
  children: ReactNode;
  href?: string;
  containerClassName?: string;
  onClick?: () => void;
  markerFill?: string;
}

const CustomCtaButton: FC<CustomCtaButtonProps> = ({
  icon,
  children,
  href,
  containerClassName = "",
  onClick,
  markerFill,
}) => {
  const renderIcon = () => {
    const iconClass = "z-10 mr-5 size-10 object-contain";
    if (typeof icon === "string") {
      return <Image src={icon} alt="icon" className={iconClass} />;
    }
    if (icon) {
      const IconComponent = icon;
      return <IconComponent className={iconClass} />;
    }
    return null;
  };

  const Inner: FC = () => (
    <>
      <span className="g4 inner-before relative flex min-h-[60px] items-center overflow-hidden rounded-2xl px-4 group-hover:before:opacity-100">
        <span className="absolute -left-[1px]">
          <Marker fill={markerFill} />
        </span>

        {renderIcon()}

        <span className="base-bold relative z-2 font-poppins uppercase text-p1">
          {children}
        </span>
      </span>

      <span className="glow-before glow-after" />
    </>
  );

  const commonClasses = clsx(
    "relative p-0.5 g5 rounded-2xl shadow-500 group",
    containerClassName
  );

  return href ? (
    <a className={commonClasses} href={href}>
      <Inner />
    </a>
  ) : (
    <button className={commonClasses} onClick={onClick} type="button">
      <Inner />
    </button>
  );
};

export default CustomCtaButton;
