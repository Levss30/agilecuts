"use client";
import brand from "../../../assets/logo.png";
import Image from "next/image";
import { useState } from "react";
import Menu from "../Menu";
import Container from "../Container";
import { HiMenuAlt2 } from "react-icons/hi";

interface HeaderProps {
  simple?: boolean;
}

const Navbar = ({ simple }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="bg-sky-700">
      <Container className="w-full flex items-center justify-between">
        <div>
          <a href="/">
            <Image
              className="h-[100px] w-[100px]"
              alt="Agilecuts"
              src={brand}
            />
          </a>
        </div>
        {!simple && (
          <div>
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div
                className="cursor-pointer p-2 rounded-full hover:bg-sky-800"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <HiMenuAlt2 className="text-white" size={25} />
              </div>
              {isMenuOpen && <Menu setMenuIsOpen={setIsMenuOpen} />}
            </label>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Navbar;
