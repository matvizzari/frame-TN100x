const express = require('express');
const app = express();
const port = 3000;

// Ruta principal que devuelve las metaetiquetas
app.get('/', (req, res) => {
    // Establece el tipo de contenido en HTML
    res.setHeader('Content-Type', 'text/html');
    
    // Construye el HTML con las metaetiquetas
    const html = `
        <html>
            <head>
                <title>Frame Test</title>
                <meta property="og:image" content="https://media1.tenor.com/m/95j433Lm6iAAAAAC/mandalorian-baby-yoda.gif" />
                <meta property="fc:frame" content="vNext" />
                <meta property="fc:frame:image" content="https://media1.tenor.com/m/95j433Lm6iAAAAAC/mandalorian-baby-yoda.gif" />
                <meta property="fc:frame:button:1" content="/Spanish" />
                <meta property="fc:frame:button:1:action" content="link" />
                <meta property="fc:frame:button:1:target" content="https://warpcast.com/~/channel/spanish" />
                <meta property="fc:frame:button:2" content="/Crypto Plaza" />
                <meta property="fc:frame:button:2:action" content="link" />
                <meta property="fc:frame:button:2:target" content="https://warpcast.com/~/channel/cryptoplaza" />
            </head>
            <body>
                <h1>¡Hola, mundo!</h1>
                <h1>¡Este es mi primer Frame!</h1>
                <h1>¡Comenta $DEGEN!</h1>
            </body>
        </html>
    `;

    // Envía la respuesta al cliente
    res.send(html);
});

// Inicia el servidor en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});