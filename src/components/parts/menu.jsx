"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Button } from "../ui/button";
import { Cross1Icon } from '@radix-ui/react-icons';
import { MenuIcon } from 'lucide-react';
import { ModeToggle } from './Themes';

const Menu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 right-0 p-2 flex justify-between items-center shadow-lg xl:px-10 border-b-3 border-gray-600 xl:border-none z-50 bg-inherit">
      <div className="text-lg font-bold"><Link href="/">JAC Bot</Link></div>

      {/* Hamburger menu for mobile */}
      <div className="flex xl:hidden">
        <Button variant="ghost" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <Cross1Icon size={24} /> : <MenuIcon size={24} />}
        </Button>
      </div>

      {/* Full menu for desktop */}
      <NavigationMenu className="hidden xl:flex">
        <NavigationMenuList className="flex flex-row space-x-4">
          <NavigationMenuItem>
            <Button variant="link"><Link href="/">Overview</Link></Button>
          </NavigationMenuItem>
          <NavigationMenuItem>
            {/* <Button variant="link"><Link href="/pricing">Pricing</Link></Button> */}
            <ModeToggle/>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Mobile menu with animations */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="absolute top-16 left-0 right-0 bg-black shadow-lg xl:hidden z-50"
            initial={{ opacity: 0, y: -20 }} // Start above
            animate={{ opacity: 1, y: 0 }} // Slide in
            exit={{ opacity: 0, y: -20 }} // Slide out
            transition={{ duration: 0.3 }} // Animation duration
          >
            <NavigationMenu>
              <NavigationMenuList className="flex flex-col space-y-2 p-4">
                <NavigationMenuItem>
                  <Button variant="link" onClick={toggleMobileMenu}><Link href="/">Overview</Link></Button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Menu;
