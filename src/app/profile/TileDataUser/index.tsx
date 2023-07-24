"use client";
import * as React from "react";
import TabsProfile, { tabs } from "./TabsProfile";
import { If, Then } from "react-if";
import FormProfileData from "./FormProfileData";

interface ITileDataUserProps {}

const TileDataUser: React.FunctionComponent<ITileDataUserProps> = (props) => {
  const {} = props;
  const [tabSelected, setTab] = React.useState(tabs[0]);

  return (
    <div className="px-4 mt-6">
      <div className="flex items-start flex-wrap gap-x-4">
        <div className="sm:w-[250px] w-full">
          <div className="tile !p-0 !shadow-none">
            <TabsProfile {...{ tabSelected, setTab }} />
          </div>
        </div>
        <div className="flex-grow">
          <div className="tile !shadow-none">
            <If condition={tabSelected.id === "profile-data"}>
              <Then>
                <FormProfileData />
              </Then>
            </If>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TileDataUser;
