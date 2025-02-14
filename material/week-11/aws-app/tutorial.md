# ssh -i <.pem file> ubuntu@<IP>

if Error: 
# chmod 700 <.pem file>

install nginx:
# sudo apt install nginx

restart nginx after config update:
# sudo nginx -s reload

sudo vi /etc/hosts

(To make the process running) 
# npm i -g pm2
# pm2 start <index.js>