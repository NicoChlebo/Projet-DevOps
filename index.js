const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({ message: "Bienvenue sur l'API DevOps !" });
});

app.get('/health', (req, res) => {
    res.status(200).json({ status: "OK", timestamp: new Date() });
});

if (process.env.NODE_ENV !== 'test') {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Serveur démarré sur le port ${PORT}`);
    });
}

module.exports = app;