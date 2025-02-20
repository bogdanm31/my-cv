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
        "p-6 tracking-tight space-y-6",
        "text-gray-700 text-sm",
        "bg-white border border-slate-100 print:border-0",
      )}
        style={{ fontFamily: '"PT Sans", Arial, Helvetica, "Noto Sans Devanagari", "Noto Sans CJK SC Thin", "Noto Sans SC", "Noto Sans Hebrew", "Noto Sans Bengali", sans-serif' }}
      >
        {children}
      </body>
    </html >
  );
}
