const functions = require('firebase-functions');

module.exports.replicateAttributes = functions.firestore
  .document('/this/is/ignored')
  .onUpdate((change, context) => {
    console.log(
      `replicateAttributes was called at ${new Date()}`,
      `, change.after.data() = `,
      change.after.data(),
      `, context = `,
      context,
      `, process.env = `,
      process.env
    );
    return null;
  });
