import Link from "next/link";
import Image from "next/image";
import "./styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>CookiesCooker - Unit Converter</title>
        <meta name="description" content="Convert weights, lengths, temperatures, and areas easily!" />
        <link rel="icon" href="/assets/111939726.jpg" />
      </head>
      <body>
        <div className="navbar">
          <div className="logo-container">
            <Link href="/" passHref>
              <Image
                src="/assets/111939726.jpg"
                alt="CookiesCooker Logo"
                width={100} // Điều chỉnh kích thước phù hợp
                height={100}
                priority // Tăng tốc load ảnh
              />
            </Link>
          </div>
          <div className="nav-links">
            <Link href="/weights">Convert Weight</Link>
            <Link href="/lengths">Convert Length</Link>
            <Link href="/temperatures">Convert Temperature</Link>
            <Link href="/area">Convert Area</Link>
          </div>
        </div>
        
        <main>{children}</main>

        <div className="footer">
          <p>© 2025 CookiesCooker. All rights reserved.</p>
        </div>
      </body>
    </html>
  );
}
