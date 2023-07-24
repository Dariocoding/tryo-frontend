"use client";
import { faker } from "@faker-js/faker";
import * as React from "react";
import HeaderTableLogs from "./Header";
import { DataTable } from "@/components/@ui/DataTable";
import dayjs from "dayjs";

interface ITableLogsProps {}

export interface StateTableLogs {
  id: string;
  client: string;
  type: string;
}

const createFakeData = () => {
  return {
    date: dayjs(faker.date.anytime()).format("DD/MM/YYYY"),
    orderID: faker.string.uuid(),
    method: faker.commerce.productName(),
    userID: faker.string.uuid(),
    type: faker.commerce.department(),
    ammount: faker.commerce.price() + "$",
    fees: faker.airline.flightNumber(),
    status: faker.internet.emoji({ types: ["smiley"] }),
  };
};

const fakeData = faker.helpers.multiple(createFakeData, { count: 5 });

const TableLogs: React.FunctionComponent<ITableLogsProps> = (props) => {
  const {} = props;
  const [state, setState] = React.useState<StateTableLogs>({
    id: "",
    client: "",
    type: "",
  });
  const [from, setFrom] = React.useState(new Date());
  const [to, setTo] = React.useState(new Date());

  const handleSearchButton = () => {};

  return (
    <div>
      <div className="tile !p-0">
        <div className="p-4 border-b border-slate-700">
          <HeaderTableLogs {...{ from, setFrom, to, setTo, state, setState, handleSearchButton }} />
        </div>
        <div className="p-4 mt-1">
          <DataTable
            data={fakeData}
            heading={[
              { title: "Date", field: "date" },
              { title: "Order ID", field: "orderID" },
              { title: "Method", field: "method" },
              { title: "User Id", field: "userID" },
              { title: "Type", field: "type" },
              { title: "Ammount", field: "ammount" },
              { title: "Fees", field: "fees" },
              { title: "Status", field: "status", center: true },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default TableLogs;
/* date: dayjs(faker.date.anytime()).format("DD/MM/YYYY"),
orderID: faker.string.uuid(),
method: faker.commerce.productName(),
userID: faker.string.uuid(),
type: faker.commerce.department(),
ammount: faker.commerce.price(),
fees: faker.airline.flightNumber(),
status: faker.internet.emoji(), */
