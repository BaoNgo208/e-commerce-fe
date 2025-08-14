import { createContext, useState } from "react";
import TabBar from "../../components/Admin/TabBar.tsx";
import Dashboard from "../../components/Admin/Dashboard/Dashboard.tsx";
import LayoutEditor from "../../components/Admin/LayoutEditor/LayoutEditor.tsx";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Order from "../../components/Admin/Order/Order.tsx";
import ProductSection from "../../components/Admin/ProductSection/ProductSection.tsx";

export type TabKey = "dashboard" | "layout" | "Order" | "ProductSection";

const tabMap: Record<TabKey, { title: string; component: any }> = {
  dashboard: {
    title: "Dashboard",
    component: <Dashboard />,
  },
  layout: {
    title: "Layout Editor",
    component: <LayoutEditor />,
  },
  Order: {
    title: "Order managment",
    component: <Order />,
  },
  ProductSection: {
    title: "Product Section",
    component: <ProductSection />,
  },
};

export const AdminTabContext = createContext({
  openTab: (id: TabKey) => {},
});

export default function AdminPage() {
  const [tabs, setTabs] = useState<TabKey[]>(["dashboard"]);
  const [activeTab, setActiveTab] = useState<TabKey>("dashboard");

  const openTab = (id: TabKey) => {
    if (!tabs.includes(id)) {
      setTabs([...tabs, id]);
    }
    setActiveTab(id);
  };

  const closeTab = (id: TabKey) => {
    const filtered = tabs.filter((t) => t !== id);
    setTabs(filtered);
    if (activeTab === id && filtered.length > 0) {
      setActiveTab(filtered[filtered.length - 1]);
    }
  };

  // ✅ Bắt query `?openTab=...`
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tabId = params.get("openTab");

    if (tabId && tabId in tabMap) {
      openTab(tabId as TabKey);
    }
  }, [location.search]); // mỗi khi query thay đổi thì check lại

  return (
    <AdminTabContext.Provider value={{ openTab }}>
      <div className="flex flex-col h-full">
        {tabs.length > 1 && (
          <TabBar
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            closeTab={closeTab}
            tabMap={tabMap}
          />
        )}
        <div className="flex-1 p-4 overflow-auto bg-white rounded shadow m-2">
          {tabMap[activeTab]?.component}
        </div>
      </div>
    </AdminTabContext.Provider>
  );
}
