import SocialButtons from "../components/Footer/SocialButtons.tsx";

type FooterSocial = {
  type: "social";
  content: React.ReactNode;
};

type FooterColumnData = {
  type: "column";
  title: string;
  items: { label: React.ReactNode; href?: string }[];
};

export type FooterData = FooterSocial | FooterColumnData;

export const footerData: FooterData[] = [
  {
    type: "social",
    content: <SocialButtons />,
  },
  {
    type: "column",
    title: "COMPANY",
    items: [
      { label: "About", href: "#" },
      { label: "Features", href: "#" },
      { label: "Works", href: "#" },
      { label: "Career", href: "#" },
    ],
  },
  {
    type: "column",
    title: "HELP",
    items: [
      { label: "Customer Support", href: "#" },
      { label: "Delivery Details", href: "#" },
      { label: "Terms & Conditions", href: "#" },
      { label: "Privacy Policy", href: "#" },
    ],
  },
  {
    type: "column",
    title: "FAQ",
    items: [
      { label: "Account", href: "#" },
      { label: "Manage Deliveries", href: "#" },
      { label: "Orders", href: "#" },
      { label: "Payments", href: "#" },
    ],
  },
];
