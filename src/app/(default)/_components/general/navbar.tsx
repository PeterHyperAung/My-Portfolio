"use client";

import * as React from "react";
import { useState } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  FiAlignJustify,
  FiHome,
  FiBarChart2,
  FiPhone,
  FiBookOpen,
  FiBox,
} from "react-icons/fi";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import MobileNavItem from "./mobile-nav-item";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Frontend Development",
    href: "skills/#frontend",
    description:
      "Frontend development with technologies like JavaScript, React, Next.js",
  },
  {
    title: "Backend API Development",
    href: "skills/#backend",
    description:
      "Backend API development with technologies like Node.js, Laravel, Express.js",
  },
  {
    title: "Cross Platform Mobile Development",
    href: "skills/#mobile",
    description: "Cross platform mobile development with React Native. ",
  },
  {
    title: "Web Security",
    href: "skills/#web-security",
    description:
      "Basic level understanding of web security and common attacks like csrf, file inclusion, etc.",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex mx-0 md:mx-3 lg:mx-10 rounded bg-slate-200 shadow p-3 px-4 pr-3 sm:px-6 sticky top-0 md:top-3 justify-between items-center">
      <span className="font-black text-xl">Peter&apos;s Web</span>
      <NavigationMenu className="md:flex hidden">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <FiHome size={16} className="mb-0.5 mr-1" />
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <FiBarChart2 size={16} className="mr-1" />
              Skills
            </NavigationMenuTrigger>
            <NavigationMenuContent className="z-999">
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[575px]">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/education" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <FiBookOpen size={16} className="mr-1" />
                Education
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/projects" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <FiBox size={16} className="mr-1" />
                Projects
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/contact" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <FiPhone size={16} className="mr-1 rotate-6" />
                Contact
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <Button
        variant="link"
        className="md:hidden block"
        onClick={() => setOpen((state) => !state)}
      >
        <FiAlignJustify size={25} />
      </Button>
      <div
        className={`fixed md:hidden block top-[60px] w-[100vw] bg-white shadow left-0 overflow-hidden duration-300 ${
          open ? "h-[360px]" : "h-0"
        }`}
      >
        <MobileNavItem href="/">
          <FiHome size={20} />
          Home
        </MobileNavItem>
        <MobileNavItem href="/skills">
          <FiBarChart2 size={20} />
          Skills
        </MobileNavItem>
        <MobileNavItem href="/education">
          <FiBookOpen size={20} />
          Education
        </MobileNavItem>
        <MobileNavItem href="/projects">
          <FiBox size={20} />
          Projects
        </MobileNavItem>
        <MobileNavItem href="/contact">
          <FiPhone size={20} />
          Contact
        </MobileNavItem>
      </div>
    </nav>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
