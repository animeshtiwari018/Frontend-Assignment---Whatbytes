import "./globals.css";

export const metadata = {
  title: "Whatbytes Store",
  description: "Frontend Assignment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#f9fbff]">{children}</body>
    </html>
  );
}
