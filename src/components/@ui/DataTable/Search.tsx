import React, { FunctionComponent } from "react";
import { FaSearch } from "react-icons/fa";
import { If, Then } from "react-if";

interface ISearchDataTableProps {
  setQ(value: string): void;
  q: string;
  showSearch?: boolean;
  buttons?: React.ReactNode;
  showAll?: boolean;
}

const SearchDataTable: FunctionComponent<ISearchDataTableProps> = (props) => {
  const { setQ, q, showSearch = true, buttons, showAll } = props;
  return (
    <If condition={Boolean(showSearch || buttons)}>
      <Then>
        <div className="flex lg:justify-between lg:items-center justify-center lg:flex-row flex-col text-center mb-4">
          <div className="w-full flex items-center justify-start">{buttons}</div>

          {showSearch ? (
            <div className="relative">
              <input
                type="text"
                className="form-control pr-7 form-control-sm"
                placeholder="Search..."
                autoComplete="off"
                value={q}
                disabled={showAll}
                onChange={(e) => setQ(e.target.value)}
              />
              <span className="absolute right-2.5 top-2.5 text-sm">
                <FaSearch />
              </span>
            </div>
          ) : null}
        </div>
      </Then>
    </If>
  );
};

export default SearchDataTable;
