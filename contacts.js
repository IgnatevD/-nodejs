/** @format */

const fs = require("fs").promises;
const path = require("path");

const dbContactsPath = path.join(__dirname, "/db/contact.json");

// TODO: задокументировать каждую функцию

async function listContacts() {
  const readFileContacts = await fs.readFile(dbContactsPath, "utf-8");
  return JSON.parse(readFileContacts);
}

async function getContactById(contactId) {
  const listContact = await listContacts();
  const contact = await listContact.find((el) => el.id === contactId);
  return contact;
}

async function removeContact(contactId) {
  const listContact = await listContacts();
  const newListContact = await listContact.filter((el) => el.id !== contactId);
  await fs.writeFile(dbContactsPath, JSON.stringify(newListContact));
  return newListContact;
}

async function addContact(name, email, phone) {
  const listCont = await listContacts();
  const id = listCont.length ? listCont[listCont.length - 1].id + 1 : 1;
  console.log(id);
  const newListContacts = [...listCont, { id, name, email, phone }];

  await fs.writeFile(dbContactsPath, JSON.stringify(newListContacts));
  return newListContacts;
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
