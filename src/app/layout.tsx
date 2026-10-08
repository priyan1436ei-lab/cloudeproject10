export const metadata = {
  title: 'CloudLens AI',
  description: 'AI-powered cloud infrastructure intelligence platform'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
