/*
 * Hello World
 * Write a function that greets the user by name, or by saying "Hello, World!" if no name is given.
 */

exports.hello = function hello (name) {
  if (!name) { // !name means if there is no name, carry out this statement    // only change the text in the double quotes
    return "Hello, World!"
  } else {
    return "Hello, (name)!"
}
