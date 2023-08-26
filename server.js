const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); // Carpeta para archivos estáticos

app.get('/', (req, res) => {
  res.sendFile(__dirname + 'registrarse_login.html'); // Página de inicio de sesión
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Aquí implementa la lógica de autenticación con la base de datos o los datos almacenados

  if (email === 'usuario@example.com' && password === 'contraseña') {
    res.send('¡Inicio de sesión exitoso!');
  } else {
    res.send('Credenciales incorrectas. Inténtalo de nuevo.');
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
