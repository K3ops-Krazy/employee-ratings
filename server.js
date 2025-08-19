const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());

// Servește fișierele statice din folderul 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principală – trimite index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Index.html'));
});

// Portul corect
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serverul rulează pe portul ${PORT}`);
});
