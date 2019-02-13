const functions = require('firebase-functions');

module.exports.replicateAttributes = functions.firestore
  .document('/this/is/ignored')
  .onUpdate((change, context) => {
    console.log(
      `replicateAttributes was called at ${new Date()}, process.env: `,
      process.env
    );
    return null;
  });
