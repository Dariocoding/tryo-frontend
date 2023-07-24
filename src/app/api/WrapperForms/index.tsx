"use client";
import * as React from "react";
import FormUpdateToken from "../FormUpdateToken";
import FormUpdateUrlCallback from "../FormUpdateUrlCallback";

interface IWrapperFormsProps {}

const WrapperForms: React.FunctionComponent<IWrapperFormsProps> = (props) => {
  const {} = props;
  return (
    <React.Fragment>
      <div className="tile">
        <div className="mb-8">
          <FormUpdateToken />
        </div>

        <FormUpdateUrlCallback />
      </div>
    </React.Fragment>
  );
};

export default WrapperForms;
