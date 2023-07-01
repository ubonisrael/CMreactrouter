import { Contact, Contacts } from "../@types/app";

export async function createContact(contact: Contact) {
    let contacts: Contacts = JSON.parse(localStorage.getItem('contacts') || '[]')
    contacts.push(contact)
    return localStorage.setItem('contacts', JSON.stringify(contacts))
}

export async function getContacts() {
    let contacts: Contacts = JSON.parse(localStorage.getItem('contacts') || '[]')
    return contacts
}