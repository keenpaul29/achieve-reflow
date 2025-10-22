import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";


export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Trading", path: "/trading" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-lg border-b border-border/80 shadow-md" : "bg-transparent"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? "h-14 sm:h-16" : "h-16 sm:h-20"}`}>
          <Link to="/" className="flex items-center space-x-2 group">
            <img 
              src={(isScrolled && theme === "light") ? '/logo-dark.png' : '/logo-light.png'} 
              alt="Wwallbot" 
              className={`transition-all duration-300 group-hover:scale-105 ${isScrolled ? "h-8 sm:h-10" : "h-10 sm:h-12"} w-auto`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 bg-secondary/50 p-2 rounded-full">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-semibold transition-all duration-300 px-4 py-2 rounded-full ${
                  isActive(item.path)
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-foreground hover:bg-primary/10"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          {/* Theme toggle */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full hover:bg-primary/10"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4 lg:h-5 lg:w-5 text-yellow-400" />
              ) : (
                <Moon className="h-4 w-4 lg:h-5 lg:w-5 text-gray-700" />
              )}
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full text-gray-400 hover:text-white text-sm lg:text-base">Login</Button>
            <Button size="sm" className="rounded-full glow-border text-sm lg:text-base">Start A New Account</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-1 sm:space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full h-8 w-8 sm:h-10 sm:w-10"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400" />
              ) : (
                <Moon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-700" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-full h-8 w-8 sm:h-10 sm:w-10"
            >
              {isOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-accordion-down">
            <div className="flex flex-col space-y-2 bg-secondary/80 p-3 sm:p-4 rounded-lg">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm sm:text-base font-medium transition-colors p-2 sm:p-3 rounded-md ${
                    isActive(item.path) ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-primary/10"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3 pt-3 sm:pt-4">
                <Button variant="outline" className="w-full rounded-full text-sm sm:text-base">Login</Button>
                <Button className="w-full rounded-full glow-border text-sm sm:text-base">Open Account</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
