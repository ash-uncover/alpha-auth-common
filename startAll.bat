start /max cmd.exe /k "title alpha-db && cd D:/git/alpha-auth-db && localStartDB.bat" 
start /max cmd.exe /k "title alpha-api && cd D:/git/alpha-auth-api && npm run start:dev"
start /max cmd.exe /k "title alpha-ui && cd D:/git/alpha-auth && npm run start:dev"
