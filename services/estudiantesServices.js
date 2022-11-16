const { pool } = require('./connexBD.js');

const create = async (req, res) => {
    try{
        const body = req.body;
        const query = `INSERT INTO estudiantes VALUES ('${body.codigo}', '${body.correo}', '${body.nombre}', '${body.apellido}', '${body.telefono}', '${body.password}', '${body.carrera}', ${body.semestre})`;
        const queryUsuarios = `INSERT INTO usuarios VALUES ('${body.codigo}', '${body.correo}', '${body.password}', 'estudiante')`;
        const [rows] = await pool.query(query);
        await pool.query(queryUsuarios);
        res.status(201).send(rows);
    }catch (error) {
        console.log(error);
        return res.status(500).json({message: 'Algo ha salido mal. ruta: estudiatesServices/create'});
    }
}

const find = async (req, res) => {
    try{
        const query = 'SELECT * from estudiantes';
        const [rows] = await pool.query(query);
        res.send({ rows });
    }catch (error) {
        return res.status(500).json({message: 'Algo ha salido mal. ruta: estudiatesServices/find', errorx: error});
    }
    
}

const findOne = async (req, res) => {
    try{
        codigoUser = req.params.codigo;
        const query = `SELECT * FROM estudiantes where codigo = '${codigoUser}'`;
        const [rows] = await pool.query(query);
    
        if(rows.length <= 0 ){
            res.status(404).send('estudiante no encontrado');
        }else{
            res.json(rows);
        }
    }catch (error) {
        return res.status(500).json({message: 'Algo ha salido mal. ruta: estudiatesServices/findOne', errorx: error});
    }
    
}

const update = async (req, res) => {
    try{
        const { codigo } = req.params;
        const body = req.body;
        const query = `UPDATE estudiantes SET codigo = '${codigo}', correo = '${body.correo}' , nombre = '${body.nombre}', apellido = '${body.apellido}', telefono = '${body.telefono}', password = '${body.password}', carrera = '${body.carrera}', semestre = '${body.semestre}'  WHERE codigo = '${codigo}'`;
        const [result] = await pool.query(query);
    
        if(result.affectedRows === 0){
            res.status(404).json({message: 'estudiante no encontrado'});
        }else{
            const [rows] = await pool.query(`SELECT * FROM estudiantes WHERE codigo = '${codigo}'`)
            res.json(rows);
        }
    }catch (error) {
        return res.status(500).json({message: 'Algo ha salido mal. ruta: estudiatesServices/update'});
    }
}

const deletear = async (req, res) => {
    try{
        const { codigo } = req.params;
        const query = `DELETE FROM estudiantes WHERE codigo = '${codigo}'`;
        const [result] = await pool.query(query);
        
        if(result.affectedRows <= 0 ){
            res.status(404).send('estudiante no encontrado');
        }else{
            res.status(204).send(`estudiante con codigo ${codigo} eliminado`);
        }
    }catch (error) {
        return res.status(500).json({message: 'Algo ha salido mal. ruta: estudiatesServices/deletear'});
    }
    
}

module.exports = {
    create,
    find,
    findOne,
    update,
    deletear
}