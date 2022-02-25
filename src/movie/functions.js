const Movie = require("./model");

exports.addMovie = async (title, actor) => {
  try {
    await Movie.create({ title: title, actor: actor });
    return "Success";
  } catch (error) {
    console.log(error);
  }
};

exports.list = async () => {
  try {
    return await Movie.find({});
  } catch (error) {
    console.log(error);
  }
};

exports.update = async (title, actor) => {
  try {
      await Movie.updateOne(
        {title: title},
        {$set:{
              actor: actor}
        }
      )
      return "Updated"
  } catch (error) {
    console.log(error)
  }
}

exports.deleteOne = async (title) =>{
  try {
      await Movie.deleteOne(
        {title: title}
      )
      return "Entry removed"
  } catch (error) {
    console.log(error)
  }
}

exports.findOne = async (title, actor) => {
  try {
    await Movie.findOne(
      {title: title}
    )
    return {title: title, actor: actor}
  } catch (error) {
    console.log(error)
  }
}