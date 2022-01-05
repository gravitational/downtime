import React, { useState } from "react";
import { motion } from "framer-motion";
import NextImage from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="flex justify-end w-full h-16 fixed top-0 bg-white ">
      <div className="flex justify-start w-2/4">
        <div className="text-6xl uppercase font-playfair font-bold ml-5">tonion</div>
      </div>
      <div className="flex justify-end w-2/4">
        <Hamburger>
          <SubItem href="/" text="Jokes" />
          <SubItem href="/privacy" text="Privacy" />
          <SubItem href="/terms" text="Terms" />
        </Hamburger>
      </div>
    </nav>
  );
};

export default NavBar;

const HamburgerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

interface HamburgerProps {
  children?: React.ReactNode;
}

const Hamburger = ({ children, ...props }: HamburgerProps) => {
  const [isBeingHovered, setIsBeingHovererd] = useState(false);

  return (
    <motion.div
      className="px-10 relative cursor-pointer"
      onHoverStart={() => setIsBeingHovererd(true)}
      onHoverEnd={() => setIsBeingHovererd(false)}
    >
      <div className="relative">
        <NextImage
          src="/assets/hamburger.svg"
          height={64}
          width={64}
          alt="menu"
        />
      </div>
      {isBeingHovered && (
        <div className="py-5 min-w-max">
          <motion.div
            {...props}
            layoutId="menu"
            className="absolute top-14"
            variants={HamburgerVariants}
            initial="hidden"
            animate="visible"
          >
            {children}
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

const SubItemsVariants = {
  hidden: {
    x: -20,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

interface SubItemProps {
  text: string;
  href: string;
}

const SubItem = ({ text, href }: SubItemProps) => {
  const router = useRouter();
  return (
    <motion.div
      className="my-2 group cursor-pointer min-w-max"
      layout
      variants={SubItemsVariants}
    >
      <Link href={href}>
        <a onClick={() => router.push(href)}>
          <div className="flex items-center gap-8 h-9">
            <div className="bg-white h-9 w-[100px] text-center border border-black hover:border-blue-900">
              <p className="font-bold text-gray-800 group-hover:text-blue-900 text-3xl">
                {text}
              </p>
            </div>
          </div>
        </a>
      </Link>
    </motion.div>
  );
};
