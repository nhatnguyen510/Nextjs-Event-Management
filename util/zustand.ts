import { create } from "zustand";
import type {
  BreadcrumbItemType,
  BreadcrumbSeparatorType,
} from "antd/es/breadcrumb/Breadcrumb";

interface breadcrumbState {
  breadcrumbItems: Partial<BreadcrumbItemType & BreadcrumbSeparatorType>[];
  setBreadcrumbItems: (items: any) => void;
}

export const useStore = create<breadcrumbState>()((set) => ({
  breadcrumbItems: [
    {
      path: "/",
      title: "Home",
      name: "Home",
      breadcrumbName: "Home",
      key: "home",
    },
  ],
  setBreadcrumbItems: (
    items: Partial<BreadcrumbItemType & BreadcrumbSeparatorType>[]
  ) => set({ breadcrumbItems: items }),
}));
