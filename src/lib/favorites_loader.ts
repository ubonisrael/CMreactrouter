import { LoaderFunction } from "react-router-dom";
import { getFavorites } from "./contacts";

export const loader: LoaderFunction = async() => {
    const contacts = await getFavorites();
    return {contacts};
  }