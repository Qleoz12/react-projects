import { fetchNOSecure } from "./http";

const baseUrl = import.meta.env.VITE_APP_OUTSTANDING_ENDPOINT

interface GetOptions {
    profile: boolean; 
}


export const getoutStandingByRol = async ({profile}: GetOptions) => {
    console.log(`${baseUrl}${profile}`)
    return fetchNOSecure(`${baseUrl}${profile}`, "get");
};