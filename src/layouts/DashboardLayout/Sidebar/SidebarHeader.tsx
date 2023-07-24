import * as React from "react";
import { Dropdown } from "@nextui-org/react";
import { AiFillFacebook, AiFillTwitterSquare, AiFillInstagram } from "react-icons/ai";
import { spawn } from "child_process";
import Image from "next/image";
import { imagesPaths, validPaths } from "@/utils";
import Link from "next/link";

interface ISidebarHeaderProps {}

const SidebarHeader: React.FunctionComponent<ISidebarHeaderProps> = (props) => {
  return (
    <div className="flex items-center gap-4 cursor-pointer">
      <div className="text-center">
        <Link href={validPaths.home.path}>
          <Image {...imagesPaths.logoFull} width={60} height={80} />
        </Link>
      </div>
      {/*    <span className="text-white text-4xl">{company.logo}</span>
      <div>
        <h3 className="text-2xl font-medium m-0 leading-6 mb-1 text-white">{company.name}</h3>
        <span className="font-medium text-sm text-gray-200">{company.location}</span>
      </div> */}
    </div>
  );
};

/* 
interface Company {
  name: string;
  location: string;
  logo: React.ReactNode;
}
const SidebarHeader: React.FunctionComponent<ISidebarHeaderProps> = (props) => {
  const [company, setCompany] = React.useState<Company>({
    name: "Acme Co.",
    location: "Palo Alto, CA",
    logo: <AiFillFacebook />,
  });

  return (
    <Dropdown placement="bottom-right" isBordered disableShadow>
      <Dropdown.Trigger css={{ cursor: "pointer" }}>
        <div className="flex items-center gap-4 cursor-pointer">
          <span className="text-white text-4xl">{company.logo}</span>
          <div>
            <h3 className="text-2xl font-medium m-0 leading-6 mb-1 text-white">{company.name}</h3>
            <span className="font-medium text-sm text-gray-200">{company.location}</span>
          </div>
        </div>
      </Dropdown.Trigger>
      <Dropdown.Menu
        onAction={(e) => {
          if (e === "1") {
            setCompany({
              name: "Facebook",
              location: "San Fransico, CA",
              logo: <AiFillFacebook />,
            });
          }
          if (e === "2") {
            setCompany({
              name: "Instagram",
              location: "Austin, Tx",
              logo: <AiFillInstagram />,
            });
          }
          if (e === "3") {
            setCompany({
              name: "Twitter",
              location: "Brooklyn, NY",
              logo: <AiFillTwitterSquare />,
            });
          }
        }}
        css={{
          $$dropdownMenuWidth: "340px",
          $$dropdownItemHeight: "50px",
          "& .nextui-dropdown-item": {
            py: "$2",
            span: {
              mr: "$3",
              svg: {
                color: "#eaeaea",
                fontSize: "20px",
              },
            },

            // dropdown item title
            "& .nextui-dropdown-item-content": {
              w: "100%",
              fontWeight: "$semibold",
            },
          },
        }}
      >
        <Dropdown.Section title={"Accoounts"}>
          <Dropdown.Item
            key={1}
            icon={
              <span>
                <AiFillFacebook className="" />
              </span>
            }
            description="Facebook C.A"
          >
            Facebook
          </Dropdown.Item>
          <Dropdown.Item
            key={2}
            icon={
              <span>
                <AiFillInstagram className="" />
              </span>
            }
            description="Instagram C.A"
          >
            Instagram
          </Dropdown.Item>
          <Dropdown.Item
            key={3}
            icon={
              <span>
                <AiFillTwitterSquare className="" />
              </span>
            }
            description="Twitter C.A"
          >
            Twitter
          </Dropdown.Item>
        </Dropdown.Section>
      </Dropdown.Menu>
    </Dropdown>
  );
}; */

export default SidebarHeader;
