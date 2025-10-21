import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
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

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-2">
            <img
              src={theme === "dark" ? "/logo-light.png" : "/logo-dark.png"}
              alt="Achieve Reflow"
              className="h-10 w-auto mb-6"
            />
            <p className="text-sm text-muted-foreground mb-6 max-w-xs">
              A leading forex broker dedicated to providing top-tier trading services and support.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <FaLinkedinIn size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4 text-foreground">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm text-muted-foreground hover:text-primary"
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
              © {new Date().getFullYear()} Achieve Reflow. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground max-w-lg text-center md:text-right">
              Risk Warning: Trading foreign exchange on margin carries a high level of risk, and may not be suitable for all investors.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
