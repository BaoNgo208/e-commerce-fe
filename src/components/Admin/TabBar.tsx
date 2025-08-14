import type { TabKey } from "../../pages/Admin/Admin.tsx";
interface TabBarProps {
  tabs: TabKey[];
  activeTab: TabKey;
  setActiveTab: (id: TabKey) => void;
  closeTab: (id: TabKey) => void;
  tabMap: {
    [key in TabKey]: {
      title: string;
    };
  };
}

export default function TabBar({
  tabs,
  activeTab,
  setActiveTab,
  closeTab,
  tabMap,
}: TabBarProps) {
  return (
    <div className="flex space-x-2 bg-gray-200 px-2 py-1 border-b">
      {tabs.map((id) => (
        <div
          key={id}
          className={`flex items-center space-x-2 px-4 py-1 rounded-t cursor-pointer ${
            activeTab === id
              ? "bg-white border border-b-0"
              : "bg-gray-300 hover:bg-gray-400"
          }`}
          onClick={() => setActiveTab(id)}
        >
          <span>{tabMap[id]?.title || id}</span>
          {tabs.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                closeTab(id);
              }}
              className="text-red-500 font-bold"
            >
              ×
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
