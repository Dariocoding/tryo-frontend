import Label from "@/components/@forms/Label";
import * as React from "react";
import ReactDatePicker, { ReactDatePickerProps } from "react-datepicker";
import { StateTableLogs } from ".";
import { FaSearch } from "react-icons/fa";

interface IHeaderTableTransactionsProps {
  from: Date;
  to: Date;
  setFrom: React.Dispatch<React.SetStateAction<Date>>;
  setTo: React.Dispatch<React.SetStateAction<Date>>;
  state: StateTableLogs;
  setState: React.Dispatch<React.SetStateAction<StateTableLogs>>;
  handleSearchButton: Function;
}

const defaultConfigDatePicker: Partial<ReactDatePickerProps> = {
  maxDate: new Date(),
  className: "form-control form-control-sm",
  wrapperClassName: "w-full",
};

const HeaderTableTransactions: React.FunctionComponent<IHeaderTableTransactionsProps> = (props) => {
  const { from, setFrom, setTo, to, state, setState, handleSearchButton } = props;
  const { id, client, type } = state;

  return (
    <div className="flex items-center flex-wrap gap-2 sm:flex-row flex-col">
      <div className="sm:w-auto w-full">
        <div className="form-group !mb-0 min-w-[200px]">
          <Label>Type</Label>
          <select
            name=""
            id=""
            value={client}
            className="form-control form-control-sm"
            onChange={({ target }) => setState({ ...state, client: target.value })}
          >
            <option value="">Opción</option>
          </select>
        </div>
      </div>

      <div className="sm:w-auto w-full">
        <div className="form-group !mb-0 min-w-[150px]">
          <Label>Users</Label>
          <select
            name=""
            id=""
            value={type}
            className="form-control form-control-sm"
            onChange={({ target }) => setState({ ...state, type: target.value })}
          >
            <option value="">Opción</option>
          </select>
        </div>
      </div>

      <div className="sm:w-auto w-full">
        <div className="form-group !mb-0 min-w-[150px]">
          <Label>Client</Label>
          <select
            name=""
            id=""
            value={type}
            className="form-control form-control-sm"
            onChange={({ target }) => setState({ ...state, type: target.value })}
          >
            <option value="">Opción</option>
          </select>
        </div>
      </div>

      <div className="sm:w-auto w-full">
        <div className="form-group !mb-0">
          <Label>From</Label>
          <ReactDatePicker
            onChange={(date) => date && setFrom(date)}
            selected={from}
            {...defaultConfigDatePicker}
          />
        </div>
      </div>

      <div className="sm:w-auto w-full">
        <div className="form-group !mb-0">
          <Label>To</Label>
          <ReactDatePicker
            onChange={(date) => date && setTo(date)}
            selected={to}
            {...defaultConfigDatePicker}
          />
        </div>
      </div>

      <div>
        <button type="button" className="btn btn-sm btn-success !mb-0 !mr-0 sm:mt-6">
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default HeaderTableTransactions;
