import { ChevronDown, SearchIcon } from "../../../../components";

export const Button = ({ children, className, onClick }) => {
  return (
    <button
      type="submit"
      value={"submit"}
      onClick={onClick}
      className={`${className} px-4 py-1 border-2 font-bold rounded-full`}
    >
      {children}
    </button>
  );
};

export const ButtonBorderGreen = ({ onClick, children }) => {
  return (
    <Button
      onClick={onClick}
      className={"border-moss-green px-9 text-moss-green"}
    >
      {children}
    </Button>
  );
};

export const ButtonEdit = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      className={"border-intense-orange px-9 text-intense-orange"}
    >
      Editar
    </Button>
  );
};

export const ButtonDelete = ({ children, onClick }) => {
  return (
    <Button onClick={onClick} className={"border-fire-red px-9 text-fire-red"}>
      {children}
    </Button>
  );
};

export const ButtonSearch = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      className={"border-golden-yellow text-golden-yellow"}
    >
      <div className="flex items-center gap-4">
        <span>Buscar</span>
        <div className="w-5 fill-golden-yellow">
          <SearchIcon />
        </div>
      </div>
    </Button>
  );
};

export const ButtonDropdown = ({ onClick, hideSection }) => {
  return (
    <button onClick={onClick}>
      <div
        className={`stroke-chocolate-brown stroke-2 w-8 ${
          hideSection ? "" : "transform rotate-90"
        }`}
      >
        <ChevronDown />
      </div>
    </button>
  );
};
