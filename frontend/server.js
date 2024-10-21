//simple express server to run frontend production build;
const https = require('https');
const express = require("express");
const path = require("path");
const app = express();
const fs = require('fs');
const privateKey  = fs.readFileSync('/etc/nginx/ssl/zap.conectapolitico.com.br/2394779/server.key', 'utf8');
const certificate = fs.readFileSync('/etc/nginx/ssl/zap.conectapolitico.com.br/2394779/server.crt', 'utf8');
const credentials = {key: privateKey, cert: certificate};
app.use(express.static(path.join(__dirname, "build")));
app.get("/*", function (req, res) {
	res.sendFile(path.join(__dirname, "build", "index.html"));
});
const httpsServer = https.createServer(credentials, app)
httpsServer.listen(443, 'zap.conectapolitico.com.br');

