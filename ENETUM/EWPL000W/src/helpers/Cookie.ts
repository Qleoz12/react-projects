import Cookie from 'js-cookie'

export const getCookie = (cookieName:string) =>{
  return Cookie.get(cookieName)
};