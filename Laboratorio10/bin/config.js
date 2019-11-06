const Mongoose = require("mongoose");
let database = "RegisterDB"
let host = "localhost"
let port = "27017"
let uri =  `mongodb://${host}:${port}/${database}`

const connect = ()=>{
    Mongoose.connect(uri{useNewUrlParser: true, userUnifiedTopology: true})
    .then(()=>{
        console.log(`Conexion a la base $(database) exitosa`);


    })
    .catch(()=>{
        console.log(`un error se produjo al conectarse a la base`)
    })

    module.exports =(
        connect
    )
}

 
