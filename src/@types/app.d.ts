import React from "react";

export interface Props {
  children: React.ReactNode;
}

export interface themeInterface {
  theme: string | null;
  handleTheme: () => void;
}

export interface Contact {
  [k: string]: FormDataEntryValue;
}

export interface Contacts extends Array<Contact> {}

export interface editForm {
  contact?: Contact;
}

interface handleToggle {
  toggled: boolean;
  handleToggle: () => void;
}