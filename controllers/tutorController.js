import Tutor from "../schemas/tutor.js"

export async function saveTutor(req, res){
    try{
        const tutor = await Tutor.create(req.body);
        return res.json(tutor);
    } catch(err){
        return res.status(400).send({error: "Erro no cadastro do tutor"})
    }
}

export async function getTutor(req, res){
    try{
        const tutor = await Tutor.create(req.body);
        return res.json(tutor);
    } catch(err){
        return res.status(400).send({error: "Erro ao exibir tutor"})
    }
}