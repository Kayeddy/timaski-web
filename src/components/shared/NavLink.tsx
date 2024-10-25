"use client";
import { Link as LinkScroll } from "react-scroll";

interface NavLinkProps {
  title: string;
  onClick?: () => void;
  isFooter?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({
  title,
  isFooter = false,
  onClick,
}) => (
  <LinkScroll
    to={title}
    offset={-100}
    spy
    smooth
    onClick={onClick}
    activeClass={`${!isFooter && "nav-active"}`}
    className={`${
      isFooter ? "base-bold-lg" : "base-bold"
    } max-lg:h5 cursor-pointer uppercase text-p4 transition-colors duration-500 hover:text-p1 max-lg:my-4`}
    aria-label={`Scroll to ${title}`}
  >
    {title}
  </LinkScroll>
);

export default NavLink;
