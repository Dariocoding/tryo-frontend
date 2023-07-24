"use client";
import * as React from "react";
import WidgetDashboard from ".";
import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";
import { BiTransferAlt } from "react-icons/bi";
import { MdAccountBalance } from "react-icons/md";
import { BsBarChart } from "react-icons/bs";

interface IWidgetsProps {}

const Widgets: React.FunctionComponent<IWidgetsProps> = (props) => {
  const {} = props;
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-4 mb-4">
      <div>
        <WidgetDashboard
          title="cash-in"
          icon={GiReceiveMoney}
          iconBackground={BsBarChart}
          classNameContainer="!bg-teal-500"
          r$
        />
      </div>
      <div>
        <WidgetDashboard
          title="cash-out"
          icon={GiPayMoney}
          classNameContainer="!bg-orange-500"
          iconBackground={BsBarChart}
          r$
        />
      </div>
      <div>
        <WidgetDashboard
          title="balance"
          icon={MdAccountBalance}
          iconBackground={BsBarChart}
          classNameContainer="!bg-stone-600"
          isBalance
        />
      </div>
    </div>
  );
};

export default Widgets;
