import * as React from "react";

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  const {} = props;

  return (
    <footer className="border-t border-gray-400 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="md:flex md:items-center justify-center py-4 md:py-8 ">
          <span className="text-white text-sm">© M.Cozzetti. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
