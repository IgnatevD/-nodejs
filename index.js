/** @format */

const contacts = require("./contacts");
const { program } = require("commander");

program
  .option("--a --action <action>", "action")
  .option("--id <action>", "id")
  .option("--name <action>", "name")
  .option("--email <action>", "email")
  .option("--phone <action>", "phone");

program.parse(process.argv);
const argv = program.opts();

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      contacts.listContacts().then(console.table);
      break;

    case "get":
      contacts.getContactById(Number(id)).then(console.table);
      break;

    case "add":
      contacts.addContact(name, email, phone).then(console.table);
      break;

    case "remove":
      contacts.removeContact(Number(id)).then(console.table);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
