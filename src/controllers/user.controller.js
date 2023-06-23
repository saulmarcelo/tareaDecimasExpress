import User from "../models/user.model.js";
import bcrypt from 'bcrypt';

async function getAuthor(req, res) {
    return res.status(201).send({ response: "Saul Lefiqueo" });
  }
  async function createUser(req, res) {
    try {
        
        const name = req.body.name;
        const email = req.body.email;
        const dni = req.body.dni;
        const password = req.body.password;
        const encryptedPassword = bcrypt.hashSync(password, 10);

        if (!name) {
            return res.status(400).json({ success: false, message: 'Falta el campo name' });
          }
        if (!email) {
            return res.status(400).json({ success: false, message: 'Falta el campo email' });
        }
        if (!dni) {
            return res.status(400).json({ success: false, message: 'Falta el campo dni' });
        }
        if (!password) {
            return res.status(400).json({ success: false, message: 'Falta el campo password' });
        }


      const userCreated = await User.create({ name: name, email: email, dni: dni, password: encryptedPassword});
      return res.status(200).json({ success: true, user: userCreated });
    } catch (err) {
        return res.status(500).json({ success: false, message: 'Error al crear el usuario', error: err.message });
    }
  }

  async function getUsers(req, res) {
    try {
      const users = await User.find({});
      return res.send(users);
    } catch (err) {
        return res.status(500).json({ success: false, message: 'Error al obtener usuarios', error: err.message });
    }
  }
