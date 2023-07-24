import classNames from "classnames";
import * as React from "react";

interface ITabsProfileProps {
  setTab: React.Dispatch<React.SetStateAction<(typeof tabs)[0]>>;
  tabSelected: (typeof tabs)[0];
}

export const tabs = [
  { title: "Profile data", id: "profile-data" },
  { title: "Delete account", id: "delete-account" },
];

const TabsProfile: React.FunctionComponent<ITabsProfileProps> = (props) => {
  const { tabSelected, setTab } = props;

  return (
    <div className="flex flex-col items-start gap-y-3">
      {tabs.map((tab) => (
        <span
          key={tab.title}
          className={classNames(
            "p-4 text-sm block w-full transition duration-300 rounded-lg select-none font-semibold",
            tab.title === tabSelected.title
              ? "bg-gray-900 cursor-default"
              : "hover:bg-slate-700 cursor-pointer"
          )}
          onClick={() => setTab(tab)}
        >
          {tab.title}
        </span>
      ))}
    </div>
  );
};

export default TabsProfile;
