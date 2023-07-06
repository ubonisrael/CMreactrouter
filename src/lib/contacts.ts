import { matchSorter } from "match-sorter";
import { Contact, Contacts } from "../@types/app";

export async function getContacts(search?: string) {
  let contacts: Contacts = JSON.parse(
    localStorage.getItem("contacts") || "[]"
  );
  if (search) {
    contacts = matchSorter(contacts, search, {keys: ['firstname', 'midname', 'surname']})
  }
  return contacts;
}

export async function createContact(contact: Contact) {
  const contacts = await getContacts();
  contacts.push(contact);
  return localStorage.setItem("contacts", JSON.stringify(contacts));
}

export async function getContact(id: string) {
  const contacts = await getContacts();
  const contact = contacts.find((c) => c.ID === id);
  return contact ?? null;
}

export async function updateContact(id: string, updates: Contact) {
  const contacts = await getContacts();
  const contact = contacts.find((contact) => contact.ID == id);
  if (!contact) return
  Object.assign(contact, updates)
  localStorage.setItem("contacts", JSON.stringify(contacts));
  return contact
}

export async function deleteContact(id: string) {
  const contacts = await getContacts();
  const updatedContacts = contacts.filter((contact) => contact.ID !== id);
  return localStorage.setItem("contacts", JSON.stringify(updatedContacts));
}