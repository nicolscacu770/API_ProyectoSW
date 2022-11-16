const { pool } = require('./connexBD.js');

const create = async (req, res) => {
    try{
        const body = req.body;
        const query = `INSERT INTO encuentros (materia, docente, fecha, hora, aula, num_estudiantes) VALUES ('${body.materia}', '${body.docente}', '${body.fecha}', '${body.hora}', '${body.aula}', '${body.num_estudiantes}')`;
        const [rows] = await pool.query(query);
        res.status(201).send(rows);
    }catch (error) {
        return res.status(500).json({message: 'Algo ha salido mal. ruta: encuentrosServices/create'});
    }
}

const find = async (req, res) => {
    try{
        const query = 'SELECT * from encuentros';
        const [rows] = await pool.query(query);
        res.send({ rows });
    }catch (error) {
        return res.status(500).json({message: 'Algo ha salido mal. ruta: encuentrosServices/find'});
    }
    
}

const findOne = async (req, res) => {
    try{
        codigoEncuentro = req.params.id;
        const query = `SELECT * FROM encuentros where id = '${codigoEncuentro}'`;
        const [rows] = await pool.query(query);
    
        if(rows.length <= 0 ){
            res.status(404).send('encuentro no encontrado');
        }else{
            res.json(rows);
        }
    }catch (error) {
        return res.status(500).json({message: 'Algo ha salido mal. ruta: encuentrosServices/findOne'});
    }
    
}

const update = async (req, res) => {
    try{
        const { id } = req.params;
        const body = req.body;
        const query = `UPDATE encuentros SET materia = '${body.materia}' , docente = '${body.docente}', fecha = '${body.fecha}', hora = '${body.hora}', aula = '${body.aula}', num_estudiantes = '${body.num_estudiantes}' WHERE id = '${id}'`;
        const [result] = await pool.query(query);
    
        if(result.affectedRows === 0){
            res.status(404).json({message: 'encuentro no encontrado'});
        }else{
            const [rows] = await pool.query(`SELECT * FROM encuentros WHERE id = '${id}'`)
            res.json(rows);
        }
    }catch (error) {
        return res.status(500).json({message: 'Algo ha salido mal. ruta: encuentrosServices/update'});
    }
}

const deletear = async (req, res) => {
    try{
        const { id } = req.params;
        const query = `DELETE FROM encuentros WHERE id = '${id}'`;
        const [result] = await pool.query(query);
        
        if(result.affectedRows <= 0 ){
            res.status(404).send('encuentro no encontrado');
        }else{
            res.status(204).send(`encunetro con codigo ${id} eliminado` );
        }
    }catch (error) {
        return res.status(500).json({message: 'Algo ha salido mal. ruta: encuentrosServices/deletear'});
    }
    
}

module.exports = {
    create,
    find,
    findOne,
    update,
    deletear
}