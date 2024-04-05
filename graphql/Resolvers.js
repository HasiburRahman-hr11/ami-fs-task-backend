const People = require("../models/People");

const resolvers = {
  getPeople: async () => {
    try {
      const people = await People.find();
      return people;
    } catch (err) {
      throw new Error("Error getting people");
    }
  },
  createPerson: async ({ firstName, lastName }) => {
    try {
      const person = new People({ firstName, lastName });
      await person.save();
      return person;
    } catch (err) {
      throw new Error("Error creating person");
    }
  },

  deletePerson: async ({ id }) => {
    try {
      const person = await People.findByIdAndRemove(id);
      return person;
    } catch (err) {
      throw new Error("Error deleting person");
    }
  },
};

module.exports = resolvers;
