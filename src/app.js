require("./db/connection")
const mongoose = require("mongoose")
const yargs = require("yargs")
const { addMovie, list, update, deleteOne, findOne } = require("./movie/functions")

const app = async (yargsObj) => {
    try {
        if (yargsObj.add) {
            console.log(await addMovie(yargsObj.title, yargsObj.actor))
            // add functionality
        } else if (yargsObj.list) {
            console.log(await list())
            // list functionality
        } else if (yargsObj.update) {
            console.log(await update(yargsObj.title, yargsObj.actor))
        } else if (yargsObj.delete){
            console.log(await deleteOne(yargsObj.title))
        } else if (yargsObj.find) {
            console.log(await findOne(yargsObj.title, yargsObj.actor))
        } else {
            console.log("Incorrect command")
        }
        await mongoose.disconnect()
    } catch (error) {
        console.log(error)
    }
}

app(yargs.argv)