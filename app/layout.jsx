import { CartProvider } from "../context/CartContext";
import CartDrawer from "../components/CartDrawer";
import Footer from "../components/Footer";
import "./globals.css";

export const metadata = {
  title: "Whatbytes Store",
  description: "Frontend Assignment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#f9fbff] text-gray-800 antialiased">
        <CartProvider>
          <div className="flex-1 flex flex-col">
            {children}
          </div>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
