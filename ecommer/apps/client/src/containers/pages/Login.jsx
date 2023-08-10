import { EstrellaIcon } from "../../components";
import { useEffect, useState } from "react";
import {
  getUser,
  postLoginUser,
} from "../../services/userAuthenticationService";
import { SnackbarProvider } from "notistack";
import { SnackbarUtilitiesConfigurator } from "../../utilities";
import { useDispatch } from "react-redux";
import { addCredential } from "../../redux/slices/globalCommonSlice";
import { useNavigate } from "react-router-dom";


export const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //autologin when cookie there is present
  useEffect(() => {
    const addUserAuthetificate = async () => {
      const item = await getUser()
      if (item.statusCode == 200) {
        dispatch(
          addCredential({
            token: item?.token,
            currentAuthenticatedUser: item?.data,
          })
        );
        navigate("/admin/");
      }
    }
    addUserAuthetificate();
  }, [dispatch]);

  const handleLogin = async (e) => {
    e.preventDefault();
    const item = await postLoginUser({ user: user })
    if (item.statusCode == 200) {
      dispatch(
        addCredential({
          token: item?.token,
          currentAuthenticatedUser: item?.data,
        })
      );
      navigate("/admin/");
    }

  };
  const changeUser = (e) => {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value });
  };
  return (
    <>
      <SnackbarProvider>
        <SnackbarUtilitiesConfigurator />
        <div className="p-4 max-w-xl mx-auto min-h-screen flex flex-col items-center place-content-center">
          <header className="flex flex-col justify-center mb-10">
            <div className="h-48 flex justify-center">
              <img src="/assets/LOGO-PW.png" className="h-64" alt="" />
            </div>
            <header className="gap-6 sm:gap-16 flex justify-between items-center">
              <div className="w-6 fill-intense-orange">
                <EstrellaIcon />
              </div>
              <h2 className="font-ifc-insane-rodeo-bold text-center text-fire-red text-5xl sm:text-6xl">
                Hola de nuevo
              </h2>
              <div className="w-6 sm:w-8 fill-intense-orange">
                <EstrellaIcon />
              </div>
            </header>
            <h4 className="text-chocolate-brown text-center font-bold">
              inicia sesión para continuar
            </h4>
          </header>
          <form onSubmit={handleLogin} className="flex flex-col gap-3">
            <input
              required
              value={user?.email}
              name="email"
              onChange={(e) => changeUser(e)}
              placeholder="Email"
              className="w-[300px] rounded-full text-chocolate-brown border-2 border-fire-red pl-4 bg-light-ivory"
            ></input>
            <input
              required
              value={user?.password}
              name="password"
              onChange={(e) => changeUser(e)}
              placeholder="Contraseña*"
              className="mb-8 text-chocolate-brown rounded-full border-2 border-fire-red pl-4 bg-light-ivory"
            ></input>
            <button
              type="submit"
              className="text-chocolate-brown bg-vibrant-yellow px-11 py-4 text-center text-lg font-bold"
            >
              Iniciar sesión
            </button>
          </form>
        </div>
      </SnackbarProvider>
    </>
  );
};
