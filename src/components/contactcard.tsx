import { Contact } from '../@types/app'

const ContactCard = ({contact}: {contact: Contact}) => {
    console.log(contact);
    
  return (
    <div className="w-full h-6 sm:h-10 md:h-12 p-2 my-2 flex gap-1 items-center justify-start cursor-pointer rounded-md bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600">
        <img src="#" alt="contact image" 
        className='hidden sm:block w-6 h-6 rounded-full border-2 border-solid border-gray-900 dark:border-gray-100' />
        <div>
            <p className='uppercase'>contact name</p>
        </div>
    </div>
  )
}

export default ContactCard