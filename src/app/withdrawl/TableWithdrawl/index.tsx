"use client";
import { DataTable } from "@/components/@ui/DataTable";
import { faker } from "@faker-js/faker";
import dayjs from "dayjs";
import * as React from "react";
import ReactDatePicker from "react-datepicker";
import { FaSearch } from "react-icons/fa";

interface ITableWithdrawlProps {}

const randomData = () => ({
  solicitation: faker.string.uuid(),
  paid: faker.commerce.product(),
  id: faker.string.uuid(),
  userId: faker.string.uuid(),
  method: faker.commerce.department(),
  ammount: faker.commerce.price() + "$",
  status: faker.company.name(),
});

const fakeData = faker.helpers.multiple(randomData, {
  count: 5,
});

const TableWithdrawl: React.FunctionComponent<ITableWithdrawlProps> = (props) => {
  const {} = props;

  const [date, setDate] = React.useState(new Date());
  return (
    <div className="tile">
      <div></div>

      <DataTable
        buttons={
          <div className="flex items-center gap-x-2">
            <ReactDatePicker
              onChange={(date) => date && setDate(date)}
              className="form-control form-control-sm"
              selected={date}
            />

            <button className="btn btn-sm btn-success !mb-0" type="button">
              <FaSearch />
            </button>
          </div>
        }
        heading={[
          { title: "Solicitation", field: "solicitation" },
          { title: "Paid", field: "paid" },
          { title: "ID", field: "id" },
          { title: "user ID", field: "userId" },
          { title: "Method", field: "method" },
          { title: "Ammount", field: "ammount" },
          { title: "Status", field: "status" },
        ]}
        data={fakeData}
      />
    </div>
  );
};

/* SOLICITATION	PAID	ID	USER ID	METHOD	AMOUNT	AMOUNT PAID	STATUS */

export default TableWithdrawl;
