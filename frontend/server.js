//simple express server to run frontend production build;
const express = require("express");
const path = require("path");
const app = express();
var fs = require('fs');
var privateKey  = fs.readFileSync('/etc/nginx/ssl/zap.conectapolitico.com.br/2394779/server.key', 'utf8');
var certificate = fs.readFileSync('/etc/nginx/ssl/zap.conectapolitico.com.br/2394779/server.crt', 'utf8');
var credentials = {key: privateKey, cert: certificate};
app.use(express.static(path.join(__dirname, "build")));
app.get("/*", function (req, res) {
	res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.listen(credentials, 443, 'zap.conectapolitico.com.br');

