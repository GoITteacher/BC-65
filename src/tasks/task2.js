/* 
Класс ContactBook: Создайте класс Contact для представления контакта с полями name, email и phone. Затем реализуйте класс ContactBook, который будет хранить список контактов и предоставлять методы для добавления, удаления и поиска контактов.
*/
class Contact {
  constructor(name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
}

class ContactBook {
  constructor() {
    this.contacts = [];
  }
  addContact(contact) {
    this.contacts.push(contact);
  }
  removeContact(email) {
    this.contacts = this.contacts.filter(elem => {
      return elem.email !== email;
    });
  }
  findContact(name) {
    return this.contacts.filter(elem => {
      return elem.name.includes(name);
    });
  }
}

const contact1 = new Contact(`Max`, `maximys@com`, `+3809815325`);
const contact2 = new Contact(`Alex`, `Alexmys@com`, `+3809785034`);
const contact3 = new Contact(`Toni`, `ToniStark@com`, `+3806895354`);

const phoneBook = new ContactBook();

phoneBook.addContact(contact1);
phoneBook.addContact(contact2);
phoneBook.addContact(contact3);
phoneBook.removeContact(`maximys@com`);
console.log(phoneBook);
