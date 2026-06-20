import { CartProvider } from "../context/CartContext";
import CartDrawer from "../components/CartDrawer";
import "./globals.css";

export const metadata = {
  title: "Whatbytes Store",
  description: "Frontend Assignment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#f9fbff]">
        <CartProvider>
          {children}
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
