interface User {
    id: number;
    password: string;
    name: string;
    age: number;
    email: string;
}

type updatedProps = Pick<User, 'name' | 'age' | 'email'>;

function printUser(user: updatedProps) {
    console.log(user);
    
    console.log(`Name: ${user.name}`);
    console.log(`Age: ${user.age}`);
    console.log(`Email: ${user.email}`);
}

const user: User = {
    id: 1,
    password: "securepassword",
    name: "chaitanya",
    age: 21,
    email: "chaitanya@example.com"
}

printUser(user);

// --------------------------------------------------------------------------------
// Partial

type PartialUser = Partial<updatedProps>;

// --------------------------------------------------------------------------------
// readonly

type ReadonlyUser = Readonly<updatedProps>;

interface Config {
  endpoint: string;
  apiKey: string;
}

const config: Readonly<Config> = {
  endpoint: '<https://api.example.com>',
  apiKey: 'abcdef123456',
};

// Attempting to modify the object will result in a TypeScript error
// config.apiKey = 'newkey';      // Error: Cannot assign to 'apiKey' because it is a read-only property.

// --------------------------------------------------------------------------------
