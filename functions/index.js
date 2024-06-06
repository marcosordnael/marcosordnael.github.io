const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.submitContactForm = functions.https.onCall((data, context) => {
  const {name, email, message} = data;

  // Validação dos dados
  if (!name || !email || !message) {
    throw new functions.https.HttpsError(
        "invalid-argument",
        "Todos os campos são obrigatórios.",
    );
  }

  const contactFormRef = admin.database().ref("/contactForms");
  return contactFormRef.push({
    name,
    email,
    message,
    timestamp: admin.database.ServerValue.TIMESTAMP,
  })
      .then(() => {
        return {success: true};
      })
      .catch((error) => {
        throw new functions.https.HttpsError(
            "unknown",
            error.message,
            error,
        );
      });
});
