module.exports = function (migration) {
  const joke = migration.editContentType("joke");

  joke.deleteField("smoker");
  joke.deleteField("twitterEmbeddedCode");
  joke.deleteField("anchor");

  joke.editField("headline").required(true);

  //command line: contentful space migration --environment-id 'example' migrations/example.js
};
