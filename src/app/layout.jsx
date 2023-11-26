import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const poppin = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata = {
  title: "AnimeHub",
  description:
    "AnimeHub adalah aplikasi streaming anime yang dirancang untuk memenuhi kebutuhan para penggemar anime di seluruh dunia. Dengan koleksi yang luas dan terus diperbarui, AnimeHub menyediakan akses mudah dan cepat ke ribuan judul anime dari berbagai genre.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppin.className} bg-color-dark`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
