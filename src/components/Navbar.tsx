// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Menu, X } from "lucide-react";
// import { Button } from "@/components/ui/button";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "About Us", path: "/about" },
//     { name: "Services", path: "/services" },
//     { name: "Projects", path: "/projects" },
//     { name: "HSE & Quality", path: "/hse-quality" },
//     { name: "Contact", path: "/contact" },
//   ];

//   const isActive = (path: string) => location.pathname === path;

//   return (
//     <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//       <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex h-20 items-center justify-between">
//           {/* Logo */}
//           <Link to="/" className="flex items-center space-x-3">
//             <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary/80">
//               <span className="text-2xl font-bold text-primary-foreground">T</span>
//             </div>
//             <div className="hidden sm:block">
//               <span className="text-xl font-bold text-foreground">TEGAS</span>
//               <p className="text-xs text-muted-foreground">Engineering Excellence</p>
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex lg:items-center lg:space-x-1">
//             {navLinks.map((link) => (
//               <Link key={link.path} to={link.path}>
//                 <Button
//                   variant={isActive(link.path) ? "default" : "ghost"}
//                   className="text-sm font-medium transition-all"
//                 >
//                   {link.name}
//                 </Button>
//               </Link>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="lg:hidden rounded-md p-2 text-foreground hover:bg-muted"
//             onClick={() => setIsOpen(!isOpen)}
//             aria-label="Toggle menu"
//           >
//             {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div className="lg:hidden border-t py-4 animate-fade-in">
//             <div className="flex flex-col space-y-2">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.path}
//                   to={link.path}
//                   onClick={() => setIsOpen(false)}
//                 >
//                   <Button
//                     variant={isActive(link.path) ? "default" : "ghost"}
//                     className="w-full justify-start text-sm font-medium"
//                   >
//                     {link.name}
//                   </Button>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// };

// export default Navbar;




// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Menu, X } from "lucide-react";
// import { Button } from "@/components/ui/button";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "About Us", path: "/about" },
//     { name: "Services", path: "/services" },
//     { name: "Projects", path: "/projects" },
//     { name: "HSE & Quality", path: "/hse-quality" },
//     { name: "Contact", path: "/contact" },
//   ];

//   const isActive = (path: string) => location.pathname === path;

//   return (
//     <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//       <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex h-20 items-center justify-between">
//           {/* Logo */}
//           <Link to="/" className="flex items-center space-x-3">
//             <img
//               src="/assests/logo.jpg" // 👉 replace with your actual logo path
//               alt="Tegas Engineering Logo"
//               className="h-12 w-auto object-contain"
//             />
//             <p className="text-xs sm:text-sm text-muted-foreground">
//               Engineering Excellence
//             </p>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex lg:items-center lg:space-x-1">
//             {navLinks.map((link) => (
//               <Link key={link.path} to={link.path}>
//                 <Button
//                   variant={isActive(link.path) ? "default" : "ghost"}
//                   className="text-sm font-medium transition-all"
//                 >
//                   {link.name}
//                 </Button>
//               </Link>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="lg:hidden rounded-md p-2 text-foreground hover:bg-muted"
//             onClick={() => setIsOpen(!isOpen)}
//             aria-label="Toggle menu"
//             aria-expanded={isOpen}
//           >
//             {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div className="lg:hidden border-t py-4 animate-fade-in">
//             <div className="flex flex-col space-y-2">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.path}
//                   to={link.path}
//                   onClick={() => setIsOpen(false)}
//                 >
//                   <Button
//                     variant={isActive(link.path) ? "default" : "ghost"}
//                     className="w-full justify-start text-sm font-medium"
//                   >
//                     {link.name}
//                   </Button>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// };

// export default Navbar;



import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "HSE & Quality", path: "/hse-quality" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex flex-col items-center space-y-1">
            <img
              src="/logo.png" // 👉 replace this with your actual logo path
              alt="Tegas Engineering Logo"
              className="h-12 w-auto object-contain"
            />
            <p className="text-xs sm:text-sm font-medium text-blue-600">
              Engineering Excellence
            </p>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                <Button
                  variant={isActive(link.path) ? "default" : "ghost"}
                  className="text-sm font-medium transition-all"
                >
                  {link.name}
                </Button>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden rounded-md p-2 text-foreground hover:bg-muted"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t py-4 animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                >
                  <Button
                    variant={isActive(link.path) ? "default" : "ghost"}
                    className="w-full justify-start text-sm font-medium"
                  >
                    {link.name}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
