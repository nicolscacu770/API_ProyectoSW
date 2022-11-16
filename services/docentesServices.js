const { pool } = require('./connexBD.js');

const find = async (req, res) => {
    try{
        const query = 'SELECT * from docentes';
        const [rows] = await pool.query(query);
        res.send({ rows });
    }catch (error) {
        return res.status(500).json({message: 'Algo ha salido mal. ruta: docentesServices/find'});
    }
    
}

const findOne = async (req, res) => {
    try{
        codigoDocente = req.params.codigo;
        const query = `SELECT * FROM docentes where codigo = '${codigoDocente}'`;
        const [rows] = await pool.query(query);
    
        if(rows.length <= 0 ){
            res.status(404).send('docente no encontrado');
        }else{
            res.json(rows);
        }
    }catch (error) {
        return res.status(500).json({message: 'Algo ha salido mal. ruta: docentesServices/findOne'});
    }
    
}

module.exports = {
    find,
    findOne
}