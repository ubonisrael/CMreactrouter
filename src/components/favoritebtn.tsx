import { Contact } from "../@types/app"
import { useFetcher } from 'react-router-dom'
import { MdFavorite, MdFavoriteBorder } from "react-icons/md"

const Favorite = ({contact}: {contact: Contact}) => {
    const fetcher = useFetcher()
    let favorite = contact.favorite

    if (fetcher.formData) {
      favorite = `${fetcher.formData.get('favorite') == 'true'}`
    }

  return (
    <fetcher.Form method="post" className="w-full px-8 flex items-center justify-end">
        <button
        name="favorite"
        value={favorite === 'true' ? "false" : "true"}
        aria-label={
          favorite == 'true'
            ? "Remove from favorites"
            : "Add to favorites"
        }
        className={`text-2xl sm:text-3xl ${favorite === 'true' ? 'text-yellow-300' : 'dark:text-white'}`}
      >
        {favorite === 'true' ? <MdFavorite /> : <MdFavoriteBorder />}
      </button>
    </fetcher.Form>
  )
}

export default Favorite