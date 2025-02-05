import { Request, Response } from "express";
import User from "../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Register function
export const register = async (req: Request, res: Response): Promise<void> => {
  const { email, password, name } = req.body;

  try {
    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      res.status(400).json({ msg: "User already exists" });
      return;
    }

    user = new User({
      email,
      password,
      name
    });

    await user.save();

    // Generate JWT
    const payload = {
      user: {
        id: user.id,
      },
    };
    jwt.sign(payload, "your_jwt_secret", { expiresIn: 3600 }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    } else {
      console.error(err);
    }
    res.status(500).send("Server error");
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      console.log("User not found");
      res.status(400).json({ msg: "Invalid credentials" });
      return;
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log("Password does not match");
      res.status(400).json({ msg: "Invalid credentials" });
      return;
    }

    // Generate JWT
    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(payload, "your_jwt_secret", { expiresIn: 3600 }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    } else {
      console.error(err);
    }
  }
};
