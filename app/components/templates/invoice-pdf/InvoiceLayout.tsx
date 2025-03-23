import { ReactNode } from "react";

import { GeistSans } from "geist/font/sans";

// Types
import { InvoiceType } from "@/types";

type InvoiceLayoutProps = {
    data: InvoiceType;
    children: ReactNode;
};

export default function InvoiceLayout({ data, children }: InvoiceLayoutProps) {
    const { sender, receiver, details } = data;

    // // Instead of fetching all signature fonts, get the specific one user selected.
    // const fontHref = details.signature?.fontFamily
    //     ? `https://fonts.googleapis.com/css2?family=${details?.signature?.fontFamily}&display=swap`
    //     : "";

    // const head = (
    //     <>
    //         <link rel="preconnect" href="https://fonts.googleapis.com" />
    //         <link
    //             rel="preconnect"
    //             href="https://fonts.gstatic.com"
    //             crossOrigin="anonymous"
    //         />
    //         <link
    //             href="https://fonts.googleapis.com/css2?family=GeistSans:wght@300;400;500;600;700;800&display=swap"
    //             rel="stylesheet"
    //         ></link>
    //         {details.signature?.fontFamily && (
    //             <>
    //                 <link href={fontHref} rel="stylesheet" />
    //             </>
    //         )}
    //     </>
    // );

    return (
      <>
        {/* {head} */}
        <section
          style={{ fontFamily: `${GeistSans.style.fontFamily}, sans-serif` }}
        >
          <div className="flex flex-col p-4 sm:p-10 bg-[#fafafa] rounded-xl min-h-[60rem]">
            {children}
          </div>
        </section>
      </>
    );
}
