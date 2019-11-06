const Register = require('../models/register');

const insert = (req,res)=>{
    let register = new Register(req.body);

    register.save((err)=>{
        if(err) return res.status(500).json({
            message: 'Algo salio mal al tratar de insertar un registro'
        })
        res.status(200).json({
            message: 'INsercion de registro exitosa'
        })
    })
}


const update = {req,res}=>{
    let register = req.body
    if(!register._id){
        return res.status(400).json({
            message: 'el campo id es obligatorio'
        })
    }
}
Register.update({id:register._id},register)
.then(value=>{
    res.status(200).json({

        message: 'operacion de modificar exitosa'
    })
})
.catch(err=>{
    res.status(500).json({
        message: 'algo salio mal en la operacion modificar'
    })
})

const deleteById = (req, res)=>{
    let register = req.body
    if(!register._id){
        return res.status(400).json({
            message: 'el campo id es obligatorio'
        })
    }
    Register.deleteOne({id:register._id},register)
.then(value=>{
    res.status(200).json({

        message: 'operacion de modificar exitosa'
    })
})
.catch(err=>{
    res.status(500).json({
        message: 'algo salio mal en la operacion al eliminar'
    })
})

const getAll = (req, res)=>{
    Register.find((err,register)=>{
        if(err) return res.status(500).json({
            message: 'Algo salio mal al seleccionar todos'
        })
        if(register){
             return res.status(200).(register)
        }else 
        res.status(404).json({
            message: 'no encontro nada'
        })
    })
}

const getOneById = (req, res)=>{
    Register.find(id,(err,register)=>{
        if(err) return res.status(500).json({
            message: 'Algo salio mal al seleccionar uno'
        })
       
        if(register){
        return res.status(200).json(register)
      }else 
        res.status(404).json({
        message: 'no encontro nada'
         })
}
}

module.exports = {
    insert,
    update,
    deleteById,
    getAll,
    getOneById,

}
