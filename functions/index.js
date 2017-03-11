const functions = require('firebase-functions')
const admin = require('firebase-admin')

admin.initializeApp(functions.config().firebase)

exports.addMessage = functions.https.onRequest((req, res) => {
  res.status(200).send(process.version)
})
