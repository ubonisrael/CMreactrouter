import { matchSorter } from "match-sorter";
import { Contact, Contacts } from "../@types/app";

//the app uses localstorage as its db

// a function to get all the contacts or just the contacts that meet the search criteria
//the search arg is optional
export async function getContacts(search?: string) {
  let contacts: Contacts = JSON.parse(
    localStorage.getItem("contacts") || "[]"
    );
    if (search) {
      contacts = matchSorter(contacts, search, {keys: ['firstname', 'midname', 'surname']})
  }
  return contacts;
}

// a function to create a contact
export async function createContact(contact: Contact) {
  const contacts = await getContacts();
  contacts.push(contact);
  return localStorage.setItem("contacts", JSON.stringify(contacts));
}

// a function to get a contact
export async function getContact(id: string) {
  const contacts = await getContacts();
  const contact = contacts.find((c) => c.ID === id);
  return contact ?? null;
}

// a function to update a contact
export async function updateContact(id: string, updates: Contact) {
  const contacts = await getContacts();
  const contact = contacts.find((contact) => contact.ID == id);
  if (!contact) return
  Object.assign(contact, updates)
  localStorage.setItem("contacts", JSON.stringify(contacts));
  return contact
}

// a function to delete a contact
export async function deleteContact(id: string) {
  const contacts = await getContacts();
  const updatedContacts = contacts.filter((contact) => contact.ID !== id);
  return localStorage.setItem("contacts", JSON.stringify(updatedContacts));
}

// a function to delete multiple contacts
export async function multiDeleteContacts(id: string) {
  const contacts = await getContacts();
  const idArray = id.split('+')
  const updatedContacts = contacts.filter((contact) =>  !idArray.includes(`${contact.ID}`));
  return localStorage.setItem("contacts", JSON.stringify(updatedContacts));
}