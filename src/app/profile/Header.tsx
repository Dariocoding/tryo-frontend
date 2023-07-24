import * as React from "react";

interface IHeaderProfileProps {}

const HeaderProfile: React.FunctionComponent<IHeaderProfileProps> = (props) => {
  const {} = props;
  return (
    <div className="flex items-start">
      <div className="text-center flex flex-col items-center whitespace-nowrap px-[60px] py-[57.5px] bg-tile">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="rounded-full mb-[20px] object-cover mt-[10px]"
          src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          alt="Foto Perfil"
          height={110}
          width={110}
        />
        <h5 className="mb-0">Dario Flores</h5>
        <p className="text-sm">Administrador</p>
      </div>
      <div
        className="bg-cover bg-center object-[50%_50%] min-h-[300px] brightness-50"
        style={{
          backgroundImage: 'url("/images/primer-plano-moneda-oro-letras-b.jpg")',
          flex: 1,
        }}
      />
    </div>
  );
};

export default HeaderProfile;
