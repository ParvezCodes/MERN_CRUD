import { UserModel } from "../Models/User.js";

export const getAllUser = async (req, res) => {
  try {
    const user = await UserModel.find({});
    res.status(200).json({ user });
  } catch (error) {
    res.json(err);
  }
};

export const getUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findById({ _id: id });
    res.status(200).json({ user });
  } catch (error) {
    res.json(error);
  }
};

export const createUser = async (req, res) => {
  try {
    const { name, hobby, age } = req.body;
    let user = await UserModel.findOne({ name });

    if (user) {
      res.status(400).json({ msg: "User already exist" });
    } else {
      const User = await UserModel.create({ name, hobby, age });
      res.status(201).json({ msg: "User Created" });
    }
  } catch (error) {
    res.status(500).json({ msg: "Internal server error" });
  }
};

export const updateUser = async (req, res) => {
  try {
    const id = req.params.id;

    const user = await UserModel.findByIdAndUpdate(
      { _id: id },
      { name: req.body.name, hobby: req.body.hobby, age: req.body.age }
    );
    res.status(201).json({ msg: "User Updated" });
  } catch (error) {
    res.status(500).json({ msg: "Internal server error" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    await UserModel.findByIdAndDelete({ _id: id });
    res.json({ delete: "succes" });
  } catch (error) {
    res.status(500).json({ msg: "Internal server error" });
  }
};
