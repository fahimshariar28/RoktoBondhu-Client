import "./globals.css";

export const metadata = {
  title: "Rokto Bondhu",
  description: "Rokto Bondhu is a blood donation platform.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
