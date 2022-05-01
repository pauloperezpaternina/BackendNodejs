/**
 * Get list from database
 * @param {*} req 
 * @param {*} res 
 */

const getItems = (req, res) => {
    const data = ["hola", "mundo"]

    res.send({data})

};
/**
 * Detail
 * @param {*} req 
 * @param {*} res 
 */
const getItem = (req, res) => {};
/**
 * Insert
 * @param {*} req 
 * @param {*} res 
 */
const createItem = (req, res) => {};
/**
 * Update
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = (req, res) => {};
const deleteItem = (req, res) => {};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };