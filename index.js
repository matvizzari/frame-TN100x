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
                <meta property="og:image" content="https://th.bing.com/th/id/OIG2.LNjEzUAlksXvdL3yll3G?w=1024&h=1024&rs=1&pid=ImgDetMain" />
                <meta property="fc:frame" content="vNext" />
                <meta property="fc:frame:image" content="https://th.bing.com/th/id/OIG2.LNjEzUAlksXvdL3yll3G?w=1024&h=1024&rs=1&pid=ImgDetMain" />
                <meta property="fc:frame:button:1" content="Web 🍖" />
                <meta property="fc:frame:button:1:action" content="link" />
                <meta property="fc:frame:button:1:target" content="https://based.thelp.xyz/" />
                <meta property="fc:frame:button:2" content="Channel The LP / $TN100x 🍖" />
                <meta property="fc:frame:button:2:action" content="link" />
                <meta property="fc:frame:button:2:target" content="https://warpcast.com/~/channel/lp" />
                <meta property="fc:frame:button:3" content="🦄 Liquidity Pool" />
                <meta property="fc:frame:button:3:action" content="link" />
                <meta property="fc:frame:button:3:target" content="https://app.uniswap.org/pools/45274"/>
            </head>
            <body>
                <h1>¡Hola, FriendCasters!</h1>
                
                <h1>¡Comenta $JAM!</h1>
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