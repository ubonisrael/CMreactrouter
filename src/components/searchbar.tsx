import { useEffect } from "react";
import { MdSearch } from "react-icons/md";
import {
  Form,
  useLoaderData,
  useSubmit,
  useNavigation,
} from "react-router-dom";
import LoadingSpinner from "./loading_spinner";

const SearchBar = () => {
  const { search } = useLoaderData() as { search: string };
  const submit = useSubmit();
  const navigation = useNavigation();

  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has("search");

  useEffect(() => {
    const searchInput = document.getElementById("search") as HTMLInputElement;
    if (typeof search === "undefined") {
      searchInput.value = "";
    } else {
      searchInput.value = search;
    }
  }, [search]);

  return (
    <Form id="searchForm" role="search" className="w-full">
      <div className="w-full max-w-lg relative">
        <input
          id="search"
          aria-label="search contacts"
          name="search"
          className="w-full p-2 pl-6 sm:p-3 sm:pl-10 md:p-4 md:pl-12 rounded-md bg-black/5 dark:text-white dark:bg-slate-800 border-0 border-none"
          type="search"
          placeholder="Search..."
          defaultValue={search}
          onChange={(e) => {
            const isFirstSearch = search == null
            submit(e.target.form, {
              replace: !isFirstSearch
            })}}
        />
        <div aria-hidden className="absolute inset-0 w-6 sm:w-10 md:w-12 sm:text-2xl md:text-3xl flex items-center justify-center dark:text-white">
          {searching ? <LoadingSpinner /> : <MdSearch />}
        </div>
      </div>
    </Form>
  );
};

export default SearchBar;
