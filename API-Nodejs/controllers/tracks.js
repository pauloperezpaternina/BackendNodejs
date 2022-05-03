const { tracksModel } = require("../models");
/**
 * Get list from database
 * @param {*} req 
 * @param {*} res 
 */

const getItems = async (req, res) => {
    //const data = ["hola", "mundo"]
    const data = await tracksModel.find({});

    res.send({ data });

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
const createItem = async (req, res) => {
    const { body } = req;
    console.log(body);
    res.send({algo:1});
};
/**
 * Update
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = (req, res) => {};
const deleteItem = (req, res) => {};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };