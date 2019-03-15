
const mysql=requie("mysql");
const mysql=requie("../database");

const getData=(req,res,next)=>{
    res.send("holadesdecontrollador")
}
const sirvejson=(req,res,next)=>{
res.json({
    Nombre_Persona:"Tony Stark",
    Codigo_Person:33
})
}

module.exports={
    getData,
    dataPet,
    consultaData,
    sirvejson,

}