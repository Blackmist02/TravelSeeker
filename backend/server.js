const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'Ignacio',
    password: 'Blackmist.3',
    database: 'db_travelseeker'
});

db.connect(err => {
    if (err) throw err;
    console.log('Conectado a MySQL');
     // Mostrar algún dato de la base de datos
      db.query('SELECT * FROM usuarios', (err, results) => {
        if (err) throw err;
        console.log(results);
    });
});

// Obtener todos los usuarios
app.get('/api/usuarios', (req, res) => {
  db.query('SELECT * FROM usuarios', (err, results) => {
    if (err) throw err;
    res.json(results);
    }); 
});

// Agregar un nuevo usuario
app.post('/api/usuarios', (req, res) => {
    const nuevoUsuario = req.body;
    db.query('INSERT INTO usuarios SET ?', nuevoUsuario, (err, result) => {
    if (err) throw err;
    res.json({ id: result.insertId, ...nuevoUsuario });
    });
});


//Login
app.post('/api/usuarios/login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
    return res.status(400).json({ message: 'Se requiere email y contraseña' });
    }

  // Consulta en la base de datos para verificar las credenciales
  db.query('SELECT * FROM usuarios WHERE email = ?', [email], (err, results) => {
    if (err) throw err;

    if (results.length === 0) {
      // Si no se encuentra el usuario
        return res.status(401).json({ message: 'Usuario no encontrado' });
    }

    const usuario = results[0];

    // Comprobar si la contraseña es correcta
    if (usuario.password !== password) {
        return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    // Si las credenciales son correctas, devolver todos los datos del usuario
    res.json({
        id: usuario.id,
        nombre: usuario.nombre,
        apellido: usuario.apellido,
        email: usuario.email,
        run: usuario.run
    });
    });
});


// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});