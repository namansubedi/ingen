import { AUTHOR_WEBSITE, BASE_URL } from "@/lib/variables";

export const ROOTKEYWORDS = [
    "invoice",
    "invoice generator",
    "invoice generating",
    "invoice app",
    "invoice generator app",
    "free invoice generator",
];

export const JSONLD = {
  "@context": "https://schema.org",
  "@type": "Website",
  name: "Invoify",
  description: "An Invoice Generator Web App",
  keywords: ROOTKEYWORDS,
  url: BASE_URL,
  image:
    "http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finvoify-logo.d0fc6d0b.png&w=64&q=75",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${BASE_URL}/#website`,
  },
  author: {
    "@type": "Person",
    name: "Naman Subedi",
    url: AUTHOR_WEBSITE,
  },
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: `${BASE_URL}`,
    },
  ],
};
