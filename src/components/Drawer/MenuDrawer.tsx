import Drawer, { TDrawerComponentProps } from "@/components/Drawer";
import Image from "next/image";

import navmenu from "@/data/navmenu.json";

const MenuDrawer = (props: TDrawerComponentProps) => {
  const { isOpen, onClose } = props;

  return (
    <Drawer isOpen={isOpen} onClose={onClose}>
      <div className="w-full bg-white-smoke flex">
        <div className="w-[332px] bg-black shrink-0">
          <div className="relative block w-[7.688rem] md:w-[9.875rem] aspect-[16/5] z-[0]">
            <Image
              src="/images/logo-mores-main.png"
              alt="Main Logo"
              fill={true}
              priority={true}
              sizes="auto"
              className="block w-full h-full object-center object-contain"
            />
          </div>
        </div>
        <div className="w-full"></div>
      </div>
    </Drawer>
  );
};

export default MenuDrawer;
