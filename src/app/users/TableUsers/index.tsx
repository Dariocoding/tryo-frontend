import { DataTable } from "@/components/@ui/DataTable";
import { validPaths } from "@/utils";
import Link from "next/link";
import * as React from "react";
import { FaPen, FaUser } from "react-icons/fa";

interface ITableUsersProps {}

const TableUsers: React.FunctionComponent<ITableUsersProps> = (props) => {
  const {} = props;
  return (
    <div className="tile">
      <DataTable
        buttons={
          <Link className="btn btn-sm btn-secondary !mb-0 gap-1" href={validPaths.usersCreate.path}>
            New User <FaUser />
          </Link>
        }
        heading={[
          { title: "ID", field: "id" },
          { title: "Name", field: "name" },
          { title: "Email", field: "email" },
          { title: "Level", field: "level", center: true },
          { title: "Actions", field: "actions", center: true },
        ]}
        data={[
          {
            id: 1,
            name: "Dario Flores",
            email: "darioflores170@gmail.com",
            level: "MERCHANT",
            actions: (
              <Link
                href={validPaths.usersEdit?.fnPath?.([1]) || "#"}
                className="btn btn-sm btn-info !mb-0 gap-2"
              >
                <FaPen />
              </Link>
            ),
          },
        ]}
      />
    </div>
  );
};

export default TableUsers;
