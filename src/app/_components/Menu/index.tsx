import { useRouter } from "next/navigation";
import Button from "../Button";
import { menuNav } from "./constants/menuNav";
import { HiX } from "react-icons/hi";

interface MenuProps {
  setMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu = ({ setMenuIsOpen }: MenuProps) => {
  const router = useRouter();

  return (
    <div className="fixed top-0 right-0 transform-all animate-ease-in px-6 py-4 min-w-[250px] h-screen bg-sky-600 z-30">
      <nav className="h-full flex flex-col justify-between">
        <ul className="flex flex-col gap-4 relative">
          <div
            className="absolute -left-11 cursor-pointer p-2 rounded-full bg-white hover:bg-neutral-200"
            onClick={() => setMenuIsOpen(false)}
          >
            <HiX className="text-sky-800" size={25} />
          </div>

          {menuNav.map((item, index) => (
            <li
              className="cursor-pointer px-5 py-2 hover:bg-blue-500 rounded text-white"
              key={index}
              onClick={() => router.push(item.href)} // Redireciona para a rota do item
            >
              {item.label}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
