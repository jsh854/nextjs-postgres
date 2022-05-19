const pgp = require('pg-promise')({
    noWarnings: true
})

export const db = pgp(`postgres://junaidshah@localhost:5432/semusi`);