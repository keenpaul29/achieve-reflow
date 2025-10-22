import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { useTheme } from "@/components/ThemeProvider";

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

  const socialLinks = [
    { icon: <Facebook size={20} />, href: "#" },
    { icon: <Twitter size={20} />, href: "#" },
    { icon: <Linkedin size={20} />, href: "#" },
    { icon: <Instagram size={20} />, href: "#" },
  ];

  return (
    <footer className="bg-muted/20 border-t border-border/30 backdrop-blur-lg relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(28,141,190,0.08),transparent_40%)]" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-8 sm:pb-10 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 sm:gap-12 mb-8 sm:mb-12">
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <img
              src={theme === "dark" ? "/logo-light.png" : "/logo-dark.png"}
              alt="Wwallbot"
              className="h-10 sm:h-12 w-auto mb-4 sm:mb-6 transition-transform duration-300 hover:scale-105"
            />
            <p className="text-muted-foreground text-xs sm:text-sm mb-4 sm:mb-6 max-w-xs">
              Empowering traders with advanced technology and dedicated support to navigate the global financial markets.
            </p>
            <div className="flex gap-2 sm:gap-3">
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href} 
                  className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full bg-card/50 border border-border/30 text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm sm:text-base font-semibold mb-4 sm:mb-5 text-foreground">{category}</h4>
              <ul className="space-y-2 sm:space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-6 sm:pt-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
            <p className="text-xs sm:text-sm text-muted-foreground">
              © {new Date().getFullYear()} Wwallbot. All Rights Reserved.
            </p>
            <p className="text-xs text-muted-foreground max-w-lg text-center md:text-right">
              Disclaimer: Trading Forex and CFDs involves significant risk and may not be suitable for all investors. Past performance is not indicative of future results.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
