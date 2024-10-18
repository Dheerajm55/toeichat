const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
    console.log('A new user has connected.');

    // Handle incoming messages from clients
    ws.on('message', (message) => {
        console.log('Received from client:', message);
        
        // Send the received message to all connected clients
        wss.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);  // Send the message as a string
            }
        });
    });

    // Remove any code that broadcasts the join message
    // (No broadcasting of new user joins here)
});