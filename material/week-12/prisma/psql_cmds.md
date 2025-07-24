user-chaitanya
password-lemon

# docker
`docker run -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=lemon -p 5432:5432 -d postgres`
`docker exec -it <container_id> bin/bash`

# psql

`psql -U chaitanya -d <db_name>`  { extra = -h localhost -p 5432 }
To List the tables in the database
`\dt`


# Prisma commands

`prisma init`
`prisma migrate dev --name <commit message>` 
`prisma generate` [generates clients]