import { Client } from "pg";

const client = new Client({
    // connectionString: "postgresql://neondb_owner:npg_ENT6xywGnlU0@ep-restless-smoke-a1srpfbv-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    database: 'postgres',
    password: 'lemon' 
})


async function createUsersTable() {
    await client.connect();
    const result = await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) UNIQUE NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        )`
    )
    console.log(result);
    client.end();
}
// createUsersTable();

interface User {
    username: string,
    email: string,
    password: string
}

async function insertData(user: User) {
    await client.connect();
    try {
        const insertQuery = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3)`;
        const values = [user.username, user.email, user.password];
        const res = await client.query(insertQuery, values);
        console.log(res.rows[0]);
    } catch (error: any) {
        console.log("Error Inserting", error.message);
    }
    client.end();
}
// insertData({username: 'Chaitanya', email: 'chaitanyareigns98@gmail.com', password: 'starman'})

async function getUser(email: string) {
    await client.connect();
    try {
        const query = 'SELECT * from users WHERE email = $1'
        const res = await client.query(query, [email]);
        if (res.rows.length > 0) console.log(res.rows);
        else console.log("NO USER FOUND");
        
    } catch (error: any) {
        console.log("Error getting user: ", error.message);
    }
}
getUser('chaitanyareigns98@gmail.com');