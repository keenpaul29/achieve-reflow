import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import logoDark from "@/assets/logo-dark.png";
import logoLight from "@/assets/logo-light.png";

export function Footer() {
  const { theme } = useTheme();

  const footerLinks = {
    Company: [
      { name: "About Us", path: "/about" },
      { name: "Careers", path: "#" },
      { name: "Press", path: "#" },
      { name: "Blog", path: "#" }
    ],
    Trading: [
      { name: "Forex", path: "/trading" },
      { name: "Stocks", path: "/trading" },
      { name: "Commodities", path: "/trading" },
      { name: "Crypto", path: "/trading" }
    ],
    Support: [
      { name: "Help Center", path: "#" },
      { name: "Contact Us", path: "/contact" },
      { name: "Status", path: "#" },
      { name: "FAQ", path: "#" }
    ],
    Legal: [
      { name: "Privacy Policy", path: "#" },
      { name: "Terms of Service", path: "#" },
      { name: "Cookie Policy", path: "#" },
      { name: "Disclaimer", path: "#" }
    ]
  };

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2">
            <img 
              src={theme === "dark" ? logoLight : logoDark} 
              alt="Vwalbot" 
              className="h-8 w-auto mb-4"
            />
            <p className="text-sm text-muted-foreground mb-4 max-w-xs">
              Trade smart, grow fast. Your trusted partner in financial markets with cutting-edge technology and expert support.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path} 
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Vwalbot. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground max-w-2xl text-center md:text-right">
              Risk Warning: Trading in financial markets involves substantial risk and may not be suitable for all investors. 
              Past performance is not indicative of future results.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
