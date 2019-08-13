let mongoose = require("mongoose");
//teilnehmer Schablone
let teilnehmerSchablone = mongoose.Schema({
  teilnehmerID: {
    type: Number,
    required: true
  },
  stern: {
    type: String
  },
  gruppe: {
    type: String
  },
  vorname: {
    type: String,
    required: true
  },
  nachname: {
    type: String,
    required: true
  },
  geburtsdatum: {
    type: String,
    required: true
  },
  alter: {
    type: Number,
    required: true
  },
  alleineHeim: {
    type: Boolean,
    required: true,
    default: false
  },
  shuttle: {
    type: Boolean,
    required: true,
    default: false
  },
  allergien: {
    type: String
  },

  checkin: [
    {
      wochentag: String,
      zeit: String,
      typ: {
        type: String,
        required: true,
        enum: ["IN", "OUT"]
      }
    }
  ],
  krank: [String],
  anwesend: {
    type: Boolean,
    default: false
  },
  ro_prio: {
    type: Number
  },
  me_prio: {
    type: Number
  },
  mo_prio: {
    type: Number
  },
  en_prio: {
    type: Number
  },
  wunschArray: [],
  kommentar: [
    {
      text: String,
      datum: String,
      user: String
    }
  ]
});

let Teilnehmer = (module.exports = mongoose.model("teilnehmerW1", teilnehmerSchablone, "teilnehmerW1")); // collection name
