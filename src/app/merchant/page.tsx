import DashboardLayout from "@/layouts/DashboardLayout";
import WrapperDashboard from "@/layouts/WrapperDashboard";
import { findSidebarItem, logoSite, validPaths } from "@/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tryo - Mercant",
  description: "Tryo - Mercant",
  icons: logoSite,
};

export default function MerchantPage() {
  return (
    <DashboardLayout>
      <WrapperDashboard
        title={"Merchant Info"}
        breadcrumb={[
          {
            label: "Dashboard",
            path: validPaths.dashboard.path,
            icon: findSidebarItem(validPaths.dashboard.path)?.icon?.({}),
          },
          { label: "Merchant", icon: findSidebarItem(validPaths.merchant.path)?.icon?.({}) },
        ]}
        icon={findSidebarItem(validPaths.merchant.path)?.icon?.({})}
      >
        <div className="tile">
          <div className="flex flex-wrap items-start justify-between lg:px-8 lg:py-4 gap-x-4">
            <div>
              <h5 className="uppercase">Invoice</h5>
              <ul className="list-none m-0 font-thin">
                <li>Maximum = 0,00</li>
                <li>Minimum = 0,00</li>
                <li>Fee Paid = 0,00 + 0,00%</li>
                <li>Fee Unpaid = 0,00</li>
                <li>Due in: 2 days</li>
              </ul>
            </div>
            <div>
              <h5 className="uppercase">Pix</h5>
              <ul className="list-none m-0 font-thin">
                <li>Maximum = 5.000,00</li>
                <li>Minimum = 1,00</li>
                <li>Fee = 0,00 + 2,00%</li>
                <li>Due in: 1 days</li>
              </ul>
            </div>
            <div>
              <h5 className="uppercase">WITHDRAWAL</h5>
              <ul className="list-none m-0 font-thin">
                <li>Maximum = 50.000,00</li>
                <li>Minimum = 10,00</li>
                <li>Fee = 0,00 + 1,50 %</li>
              </ul>
            </div>
            <div>
              <h5 className="uppercase">OPERATIONS</h5>
              <ul className="list-none m-0 font-thin">
                <li>Remittance Fee = 0,00 + 1,50 %</li>
              </ul>
            </div>
          </div>
        </div>
      </WrapperDashboard>
    </DashboardLayout>
  );
}
