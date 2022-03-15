module.exports = function (migration) {
  migration.transformEntries({
    contentType: "joke",
    from: ["headline"],
    to: ["transformDestination"],
    transformEntryForLocale: function (fromFields, currentLocale) {
      const newTarget = `${fromFields.headline[currentLocale]} transferred`;
      return { transformDestination: newTarget };
    },
  });
};
