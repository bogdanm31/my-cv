import { classNames } from "@/utils/className";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" />
      </head>
      <body className={classNames(
        "mx-auto max-w-3xl",
        "p-6 tracking-tight space-y-8",
        "bg-white border border-slate-100 print:border-0",
      )}>
        {children}
      </body>
    </html>
  );
}
