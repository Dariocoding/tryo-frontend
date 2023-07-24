import * as React from "react";
import { permissions } from ".";
import { useFormikContext } from "formik";
import classNames from "classnames";
import { Checkbox } from "@nextui-org/react";

interface IPermissionsUserTableProps {}

const PermissionsUserTable: React.FunctionComponent<IPermissionsUserTableProps> = (props) => {
  const {} = props;
  const tabs = permissions.map((p) => p.title);
  const [tabSelected, setTabSelected] = React.useState(tabs[0]);
  const { values, setValues } = useFormikContext<{ permissions: typeof permissions }>();
  const tabSelectedFind = permissions.find((p) => tabSelected === p.title);

  const toggleSelectAll = () => {
    const isAnyFalse = values.permissions.some((p) => p.permissions.some((p) => !p.value));
    const isSelectedAll = !isAnyFalse;
    if (isSelectedAll) {
      setValues({
        ...values,
        permissions: values.permissions.map((p) => ({
          ...p,
          permissions: p.permissions.map((p) => ({ ...p, value: false })),
        })),
      });
    } else {
      setValues({
        ...values,
        permissions: values.permissions.map((p) => ({
          ...p,
          permissions: p.permissions.map((p) => ({ ...p, value: true })),
        })),
      });
    }
  };

  return (
    <React.Fragment>
      <div className="p-4 border-b border-slate-700 flex items-center justify-between gap-3">
        <h5>Choose the options available to the user</h5>
        <div>
          <button type="button" className="btn btn-xs !mb-0 btn-info" onClick={toggleSelectAll}>
            Select All
          </button>
        </div>
      </div>
      <div className="flex items-start">
        <div className="flex flex-col items-start justify-start">
          {tabs.map((tab) => (
            <div
              key={tab}
              className={classNames(
                "text-sm text-center py-3 px-6 w-full border-b font-semibold text-gray-200 transition",
                tabSelected === tab
                  ? "bg-cyan-800 border-cyan-700 cursor-default"
                  : "bg-slate-800 border-slate-800 hover:bg-cyan-700 cursor-pointer"
              )}
              onClick={() => setTabSelected(tab)}
            >
              {tab}
            </div>
          ))}
        </div>
        <div className="p-4 flex flex-col gap-y-6 gap-x-3">
          {tabSelectedFind?.permissions.map((p) => (
            <CheckboxPermission permission={p} key={p.id} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

const CheckboxPermission = (props: { permission: (typeof permissions)[0]["permissions"][0] }) => {
  const { permission } = props;
  const { values, setValues } = useFormikContext<{ permissions: typeof permissions }>();

  const onChange = () => {
    setValues({
      ...values,
      permissions: values.permissions.map((p) => ({
        ...p,
        permissions: p.permissions.map((p) => ({
          ...p,
          value: p.id === permission.id ? !p.value : p.value,
        })),
      })),
    });
  };

  const isSelected = values.permissions.some((p) =>
    p.permissions.some((p) => p.id === permission.id && p.value)
  );

  return (
    <Checkbox isSelected={isSelected} onChange={onChange}>
      <span className="text-sm">{permission.description}</span>
    </Checkbox>
  );
};

export default PermissionsUserTable;
