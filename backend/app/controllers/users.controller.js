var MongoClient = require('mongodb').MongoClient;
const { masterConnection } = require("../../config/database.config");
const { Users } = require("../models/users.model");
const jwt = require('jsonwebtoken');

exports.createUsers = async (req, res) => {
    console.log("check user data", req.body);
    const adduser = new Users({
        user_name: req.body.user_name,
        email: req.body.email,
        password: req.body.password,
    });
    adduser.save()
        .then((data) => {
            res.status(200).json({
                message: "User Registered",
                data
            })
        }).catch((error) => {
            // console.log(error)
            res.status(400).json({
                status: "error",
                error: error.message || error,
            })
        })
}

exports.getUsers = async (req, res) => {
    try {
        Users.findOne({
            email: req.body.email,
            password: req.body.password
        }).then(user => {
            if (!user) {
                return res.status(404).json({
                    message: "User Not Found"
                })
            } else {
                return res.status(200).json({
                    message: "Login Success",
                    user
                })
            }
        }).catch(err => {
            res.status(500).json({
                error: err
            })
        })
    } catch (error) {
        throw new Error(error);
    }
}