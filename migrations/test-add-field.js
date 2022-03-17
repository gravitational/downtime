module.exports = function (migration) {
  const Joke = migration.editContentType('joke');
  Joke.createField('source')
    .name('test field')
    .type('Symbol')
};