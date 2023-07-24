import Spinner from "@/components/@ui/Spinner";
import classNames from "classnames";
import { useFormikContext } from "formik";
import * as React from "react";
import { Else, If, Then } from "react-if";

interface IButtonFormikProps {
  className?: string;
  children?: React.ReactNode;
  full?: boolean;
  disabled?: boolean;
}

const ButtonFormik: React.FunctionComponent<IButtonFormikProps> = (props) => {
  const { className, full, disabled } = props;
  const { isSubmitting } = useFormikContext();
  return (
    <button
      type="submit"
      disabled={isSubmitting || disabled}
      className={classNames("btn", full && "w-full", className)}
    >
      <If condition={!isSubmitting}>
        <Then>{props.children}</Then>
        <Else>
          <Spinner className="text-gray-50" />
        </Else>
      </If>
    </button>
  );
};

export default ButtonFormik;
