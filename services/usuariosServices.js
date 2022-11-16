const { pool } = require('./connexBD.js');

const find = async (req, res) => {
    try{
        const query = 'SELECT * from usuarios';
        const [rows] = await pool.query(query);
        res.send({ rows });
    }catch (error) {
        return res.status(500).json({message: 'Algo ha salido mal. ruta: usuariosServices/find'});
    }
    
}

const findOne = async (req, res) => {
    try{
        correoUsuario = req.params.correo;
        const query = `SELECT * FROM usuarios where correo = '${correoUsuario}'`;
        const [rows] = await pool.query(query);
    
        if(rows.length <= 0 ){
            res.status(404).send('usuario no encontrado');
        }else{
            res.json(rows);
        }
    }catch (error) {
        console.log(error)
        return res.status(500).json({message: 'Algo ha salido mal. ruta: usuariosServices/findOne'});
    }
    
}

module.exports = {
    find,
    findOne
}