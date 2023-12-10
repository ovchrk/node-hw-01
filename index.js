const contacts = require("./contacts");
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const arr = hideBin(process.argv);

const { argv } = yargs(arr);

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return console.table(allContacts);

    case "get":
      const fountContact = await contacts.getContactById(id);
      return console.log(fountContact);
    case "add":
      const newContact = await contacts.addContact({
        name,
        email,
        phone,
      });
      return console.log(newContact);
    case "remove":
      const updatedContacts = await contacts.removeContact(id);
      return console.log(updatedContacts);
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);
