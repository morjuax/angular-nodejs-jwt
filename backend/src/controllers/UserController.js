const controller = {};
import User from "../models/User";
import jwt from "jsonwebtoken";
import {encrypt, decrypt} from '../helpers';

controller.getUsers = (req, res) => {
  res.send("Hello World");
};

controller.store = async (req, res) => {
  const { email, password } = req.body;


  try {
    const newUser = new User({
      email,
      password: encrypt(password)
    });
    await newUser.save();

    //create jwt
    const token = jwt.sign({ _id: newUser._id }, "secrectKey");

    res.status(200).json({
      status: 1,
      message: "Successfully stored",
      data: token
    });
  } catch (e) {
    res.status(400).json({ status: 0, message: e.message });
  }
};

controller.signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(401)
        .send({ status: 0, message: "the email dosn't exists" });
    }

    if (decrypt(user.password) !== password) {
      return res.status(401).send({ status: 0, message: "Wrong password" });
    }

    const token = jwt.sign({ _id: user._id }, "secrectKey");

    res.status(200).json({
      status: 1,
      message: "Login success",
      data: token
    });
  } catch (e) {
    res
      .status(400)
      .json({ status: 0, message: "An error occurred, request login" });
  }
};

export default controller;
