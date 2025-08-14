import FooterColumn from "./FooterColumn.tsx";
import { footerData } from "../../constants/FooterData.tsx";

const Footer = () => {
  return (
    <div className="w-full bg-gray-50 ">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-4 gap-10">
        {footerData.map((col, i) =>
          col.type === "social" ? (
            <div key={i}>{col.content}</div>
          ) : (
            <FooterColumn key={i} title={col.title} items={col.items} />
          )
        )}
      </div>
    </div>
  );
};

export default Footer;
