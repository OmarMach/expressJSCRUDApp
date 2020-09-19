const Category = require("./../models/Category");

exports.fetchCategory = async (req, res) => {
  try {
    // fetching all the items from the database
    const results = await Category.findAll();

    // responding with the data if elements are found in the database
    res.status(results.length ? 200 : 204).json({
      status: "Success", // 204 status code doset send data at all, so no need to make conditions here
      data: results,
    });
  } catch (error) {
    console.error(error);

    // error handling : sending a response message to front-end
    res.status(500).json({
      error: error.message,
    });
  }
};

exports.fetchCategoryByID = async (req, res) => {
  const id = req.params.id;

  try {
    // fetching all the items from the database
    const results = await Category.findByPk(id);

    // responding with the data while checking if the item with the id provided exists
    res.status(results ? 200 : 204).json({
      status: results ? "Success" : "There are no items with that ID",
      data: results,
    });
  } catch (error) {
    console.error(error);

    // error handling : sending a response message to front-end
    res.status(500).json({
      error: error.message,
    });
  }
};

exports.addCategory = async (req, res) => {
  // get the category name from the request's body
  const { categoryName } = req.body;
  try {
    // validate the category name and throw an error if wrong name
    if (categoryName === "")
      throw new Error("Please enter a valid category name");

    // create new Category with parameters and save it to database
    const newCategory = new Category({ categoryName: categoryName });
    const results = await newCategory.save();

    // send back a response containing the item created and a message
    res.status(200).json({
      status: "Category created successfully",
      data: results,
    });
  } catch (error) {
    // error handling : sending a response message to front-end
    console.error(error);
    res.status(500).json({
      error: error.message,
    });
  }
};
