import { useEffect } from "react";
import { MdSearch } from "react-icons/md";
import {
  Form,
  useLoaderData,
  useSubmit,
  useNavigation,
} from "react-router-dom";
import LoadingSpinner from "./loadingspinner";

const SearchBar = () => {
  const { search } = useLoaderData() as { search: string };
  const submit = useSubmit();
  const navigation = useNavigation();

  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has("search");

  useEffect(() => {
    const searchInput = document.getElementById("search")! as HTMLInputElement;
    if (typeof search === "undefined") {
      searchInput.value = "";
    } else {
      searchInput.value = search;
    }
  }, [search]);

  return (
    <Form id="searchForm" role="search">
      <div className="w-full relative">
        <input
          id="search"
          aria-label="search contacts"
          name="search"
          className="w-full p-1 pl-6 rounded-md dark:text-white dark:bg-slate-800 border-0 border-none shadow-sm md:shadow-md "
          type="search"
          placeholder="Search..."
          defaultValue={search}
          onChange={(e) => {
            const isFirstSearch = search == null
            submit(e.target.form, {
              replace: !isFirstSearch
            })}}
        />
        <div aria-hidden className="absolute inset-0 w-6 flex items-center justify-center dark:text-white">
          {searching ? <LoadingSpinner /> : <MdSearch />}
        </div>
      </div>
    </Form>
  );
};

export default SearchBar;
