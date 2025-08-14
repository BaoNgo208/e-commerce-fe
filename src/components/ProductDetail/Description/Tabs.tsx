import { useState } from "react";
import Details from "./Details/Details.tsx";
import Ratings from "./Ratings/Ratings.tsx";

type Tab = {
  key: string;
  label: string;
  content: React.ReactNode;
};

const Tabs = ({ description }: { description: string }) => {
  const tabs: Tab[] = [
    {
      key: "details",
      label: "Product Details",
      content: <Details description={description}></Details>,
    },
    {
      key: "reviews",
      label: "Rating & Reviews",
      content: <Ratings></Ratings>,
    },
    {
      key: "faqs",
      label: "FAQs",
      content: <p>Here is the FAQs content...</p>,
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].key);

  return (
    <div>
      <div className="border-b border-gray-200">
        <ul className="flex justify-center gap-12 text-lg font-medium text-gray-500">
          {tabs.map((tab) => (
            <li key={tab.key}>
              <button
                onClick={() => setActiveTab(tab.key)}
                className={`pb-3 transition-colors ${
                  activeTab === tab.key
                    ? "text-black border-b-2 border-black"
                    : "text-gray-700 hover:text-black"
                }`}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        {tabs.find((t) => t.key === activeTab)?.content}
      </div>
    </div>
  );
};

export default Tabs;
