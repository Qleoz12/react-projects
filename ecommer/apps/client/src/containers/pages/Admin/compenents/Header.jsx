import { ButtonDropdown } from "./buttons";

export const Header = ({ title, children, setHideSection, hideSection }) => {
  const handleHideSection = () => setHideSection(!hideSection);

  return (
    <header className="w-full my-7 pb-4 flex border-b-2 border-b-chocolate-brown justify-between">
      <span className="flex items-center">
        <h3 className="font-bold font-ifc-insane-rodeo-bold text-3xl text-chocolate-brown">
          {title}
        </h3>
      </span>
      <div className="flex items-center gap-1">
        <div className="flex gap-4">{children}</div>
        <ButtonDropdown onClick={handleHideSection} hideSection={hideSection} />
      </div>
    </header>
  );
};
