import React from "react";

const TablePlaceholder: React.FunctionComponent = (props) => {
  const {} = props;
  return (
    <div className="animate-pulse">
      <div className="h-4 bg-gray-800 mb-6 rounded"></div>
      <div className="h-4 bg-gray-900 mb-6 rounded"></div>
      <div className="h-4 bg-gray-800 mb-6 rounded"></div>
      <div className="h-4 bg-gray-900 mb-6 rounded"></div>
      <div className="h-4 bg-gray-800 rounded"></div>
    </div>
  );
};

export default TablePlaceholder;
