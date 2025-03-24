"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Train, Menu } from "lucide-react";

const services = [
  {
    title: "Spoorwegbewaking",
    href: "/#services",
    description: "Professionele bewaking tijdens onderhoudswerkzaamheden aan het spoor",
  },
  {
    title: "Veiligheidsmaatregelen",
    href: "/#services",
    description: "Implementatie van veiligheidsmaatregelen voor werkzaamheden",
  },
  {
    title: "Risicobeoordeling",
    href: "/#services",
    description: "Beoordeling van veiligheidsrisico's tijdens spooronderhoud",
  },
  {
    title: "Veiligheidsinspecties",
    href: "/#services",
    description: "Controle van veiligheidsmaatregelen op de werklocatie",
  },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const MobileNavItem = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) => (
    <Link
      href={href}
      className="block py-3 px-4 text-lg hover:bg-accent rounded-md transition-colors"
      onClick={onClick}
    >
      {children}
    </Link>
  );

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="container px-4 mx-auto">
        <motion.div
          className={cn(
            "flex h-16 items-center justify-between rounded-none md:rounded-full transition-all duration-300",
            "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
            isScrolled 
              ? "mt-2 shadow-lg" 
              : "mt-4 shadow-md hover:shadow-lg transition-shadow duration-300"
          )}
        >
          <Link href="/" className="flex items-center space-x-2 px-4">
            <Train className="h-6 w-6" />
            <span className="font-bold text-xl">CHZ-dienstverlening</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block px-4">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="shadow-sm hover:shadow transition-shadow">
                    Diensten
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] shadow-lg">
                      {services.map((service) => (
                        <ListItem
                          key={service.title}
                          title={service.title}
                          href={service.href}
                        >
                          {service.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/#over-ons" legacyBehavior passHref>
                    <NavigationMenuLink className={cn(
                      "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium",
                      "transition-all duration-200 shadow-sm hover:shadow",
                      "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                      "focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                    )}>
                      Over Ons
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/#contact" legacyBehavior passHref>
                    <NavigationMenuLink className={cn(
                      "group inline-flex h-10 w-max items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium",
                      "text-primary-foreground transition-all duration-200 shadow-sm hover:shadow",
                      "hover:bg-primary/90 focus:bg-primary/90 focus:outline-none",
                      "disabled:pointer-events-none disabled:opacity-50"
                    )}>
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="mr-2">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 mt-8">
                  <div className="space-y-2">
                    <h2 className="text-lg font-semibold mb-2 px-4">Diensten</h2>
                    {services.map((service) => (
                      <MobileNavItem
                        key={service.title}
                        href={service.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {service.title}
                      </MobileNavItem>
                    ))}
                  </div>
                  <MobileNavItem href="/#over-ons" onClick={() => setIsMobileMenuOpen(false)}>
                    Over Ons
                  </MobileNavItem>
                  <MobileNavItem href="/#contact" onClick={() => setIsMobileMenuOpen(false)}>
                    <span className="text-primary font-medium">Contact</span>
                  </MobileNavItem>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </motion.div>
      </div>
    </motion.header>
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
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none",
            "transition-all duration-200 hover:shadow-md",
            "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
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