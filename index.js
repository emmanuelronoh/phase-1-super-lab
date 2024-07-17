// Define the Tree class
class Tree {
  constructor(species) {
    this.species = species;
  }

  // Static method definition for Tree class
  static definition() {
    return "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves.";
  }
}

// Define the Deciduous class that extends Tree
class Deciduous extends Tree {
  constructor(species, name) {
    super(species);
    this.name = name;
  }

  // Static method definition for Deciduous class
  static definition() {
    return `${super.definition()} Deciduous trees shed their leaves annually.`;
  }
}

// Define the Evergreen class that extends Tree
class Evergreen extends Tree {
  constructor(species, name) {
    super(species);
    this.name = name;
  }

  // Static method definition for Evergreen class
  static definition() {
    return `${super.definition()} Evergreens keep their leaves all year round.`;
  }
}

// Export the classes for use in other modules (e.g., test file)
module.exports = { Tree, Deciduous, Evergreen };
