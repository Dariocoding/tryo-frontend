import { DataTable } from "@/components/@ui/DataTable";
import { faker } from "@faker-js/faker";
import * as React from "react";
import dayjs from "dayjs";

const randomData = () => ({
  id: faker.string.uuid(),
  date: dayjs(faker.date.anytime()).format("DD/MM/YYYY"),
  fullName: faker.internet.userName(),
  orderId: faker.string.uuid(),
  description: faker.company.name(),
  ammount: faker.number.int() + "$",
});

const fakeData = faker.helpers.multiple(randomData, {
  count: 5,
});

interface ITableDashboardProps {}

const TableDashboard: React.FunctionComponent<ITableDashboardProps> = (props) => {
  const {} = props;
  return (
    <div className="tile !p-0">
      <div className="tile-title">
        <h3 className="mb-0">Extract</h3>
      </div>
      <div className="tile-body">
        <DataTable
          buttons={<button className="btn btn-success btn-sm">Excel</button>}
          heading={[
            { title: "Date", field: "date" },
            { title: "Fast ID", field: "id" },
            { title: "Client", field: "fullName" },
            { title: "Order ID", field: "orderId" },
            { title: "Description", field: "description" },
            { title: "Ammount", field: "ammount" },
          ]}
          data={fakeData}
        />
      </div>
    </div>
  );
};

export default TableDashboard;
