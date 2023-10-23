import "./globals.css";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";

export const metadata = {
  title: "Shortly",
  description: "Shortly",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
