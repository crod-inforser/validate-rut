const { isValid } = require("./")

async function asd() {
    const a = await isValid({rut:"18.815.778-5", serie:"110414599"})
    console.log(a)
}

asd()