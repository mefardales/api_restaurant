import app from './app.js';

const server = async () => {
    await app.listen(4000);
    console.log('Server on port 4000 ');
};

server();
