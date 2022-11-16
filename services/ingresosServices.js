const { pool } = require('./connexBD.js');

const create = async (req, res) => {
    try{
        const body = req.body;
        const query = `INSERT INTO ingresos (fecha, hora, aula, materia) VALUES ('${body.fecha}', '${body.hora}', '${body.aula}', '${body.materia}')`;
        const [rows] = await pool.query(query);
        res.status(201).send(rows);
    }catch (error) {
        return res.status(500).json({message: 'Algo ha salido mal. ruta: ingresosServices/create'});
    }
}

const find = async (req, res) => {
    try{
        const query = 'SELECT * from ingresos';
        const [rows] = await pool.query(query);
        res.send( rows );
    }catch (error) {
        return res.status(500).json({message: 'Algo ha salido mal. ruta: ingresosServices/find'});
    }
    
}

const findOne = async (req, res) => {
    try{
        codigoIngreso = req.params.id;
        const query = `SELECT * FROM ingresos where id = '${codigoIngreso}'`;
        const [rows] = await pool.query(query);
    
        if(rows.length <= 0 ){
            res.status(404).send('registro de ingreso no encontrado');
        }else{
            res.json(rows);
        }
    }catch (error) {
        return res.status(500).json({message: 'Algo ha salido mal. ruta: ingresosServices/findOne'});
    }
    
}

const update = async (req, res) => {
    try{
        const { id } = req.params;
        const body = req.body;
        const query = `UPDATE ingresos SET fecha = '${body.fecha}', hora = '${body.hora}', aula = '${body.aula}', materia = '${body.materia}' WHERE id = '${id}'`;
        const [result] = await pool.query(query);
    
        if(result.affectedRows === 0){
            res.status(404).json({message: 'registro de ingreso no encontrado'});
        }else{
            const [rows] = await pool.query(`SELECT * FROM ingresos WHERE id = '${id}'`)
            res.json(rows);
        }
    }catch (error) {
        return res.status(500).json({message: 'Algo ha salido mal. ruta: ingresosServices/update'});
    }
}

const deletear = async (req, res) => {
    try{
        const { id } = req.params;
        const query = `DELETE FROM ingresos WHERE id = '${id}'`;
        const [result] = await pool.query(query);
        
        if(result.affectedRows <= 0 ){
            res.status(404).send('registro de ingreso no encontrado');
        }else{
            res.status(204).send(`registro de ingreso con codigo ${id} eliminado` );
        }
    }catch (error) {
        return res.status(500).json({message: 'Algo ha salido mal. ruta: ingresosServices/deletear'});
    }
    
}

module.exports = {
    create,
    find,
    findOne,
    update,
    deletear
}