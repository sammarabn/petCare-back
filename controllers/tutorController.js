import Tutor from "../schemas/tutor.js"
import bcrypt from "bcryptjs"

import  jwt  from 'jsonwebtoken'
const jwtSecret = "e6c75f135f27a4d27bd25ba4a6aa9ff041800d921ea55cb5444c0b09e88ee12b8e98d0"

export async function saveTutor(req, res){
    try{
        let tutor = req.body;
        bcrypt.hash(tutor.password, 10).then(async (hash)=> {
            tutor.password = hash
            await Tutor.create(tutor)
        }).then((tutor) =>{
            const maxAge = 3 * 60 * 60 * 60;
            const token = jwt.sign(tutor.toJSON(), jwtSecret,
                {
                    expiresIn: maxAge
                }
            );
        });
        res.cookie("jwt", token, {
            httpOnly: true,
            maxAge: maxAge * 1000, // 3hrs in ms
        });
        res.status(201).json({
            message: "User successfully created",
            token : token
        });
    } catch(err){
        return res.status(400).send({error: "Erro no cadastro do tutor"})
    }
}

export async function login(req, res){
    try {
        let email = req.body.email
        let password = req.body.password

        const user = await Tutor.findOne({email})
        if (!user) {
          res.status(400).json({
            message: "Login not successful",
            error: "User not found",
          })
        } else {
            bcrypt.hash(req.body.password, 10).then(async (hash)=> {
                bcrypt.compare(hash, password ).then(function () {
                    const maxAge = 3 * 60 * 60;
                    const token = jwt.sign(user.toJSON(), jwtSecret,
                        {
                            expiresIn: maxAge
                        }
                    );
                    res.cookie("jwt", token, {
                        httpOnly: true,
                        maxAge: maxAge * 1000, // 3hrs in ms
                    });
                    res.status(200).json({
                        message: "User successfully Logged in",
                        tutor: user,
                        token: token
                    });
                })
            })
        }
      } catch (error) {
        res.status(400).json({
          message: "An error occurred",
          error: error.message,
        })
      }
}