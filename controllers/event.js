const Event = require("./../models/Event");
const Category = require("./../models/Category");

exports.findEvents = async (req, res) => {
  try {
    const results = await Event.findAll();
    console.log();
    res.status(results.length ? 200 : 204).json({
      status: "Success",
      data: results,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

exports.findEventsById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) throw new Error("There are no id in the params");

    const results = await Event.findByPk(id);

    res.status(results.length ? 200 : 204).json({
      status: "Success",
      data: results,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

exports.findEventsByCategory = async (req, res) => {
  try {
    const categoryId = req.params.id;

    // verifying if there are a category Id passed in the params
    if (!categoryId) throw new Error("Please provide a category ID");

    // verifying if a category with that Id exists
    if (!(await Category.findByPk(categoryId)))
      throw new Error("There are no category with that ID");

    const results = await Event.findAll({ where: { categoryId } });
    res.status(results.length ? 200 : 204).json({
      data: results,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

exports.addEvent = async (req, res) => {
  try {
    //getting the informations from the request body
    const { categoryId, title, description } = req.body;

    // verifying if a category with that Id exists
    if (!(await Category.findByPk(categoryId)))
      throw new Error("There are no category with that ID");

    // checking if title is valid
    if (title === "") throw new Error("Please enter a valid title");

    const newEvent = new Event({
      title: title,
      description: description,
      categoryId: categoryId,
    });

    const results = await newEvent.save();
    res.status(201).json({
      status: "Event created succesfully",
      data: results,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
