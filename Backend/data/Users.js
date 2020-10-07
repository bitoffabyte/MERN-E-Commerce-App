import bcrypt from 'bcryptjs';
const users = [
    {
        name: 'Admin',
        email: 'admin@gmail.com',
        password: bcrypt.hashSync('qwerty', 10),
        isAdmin: true,
    },
    {
        name: 'rick',
        email: 'ricj@gmail.com',
        password: bcrypt.hashSync('qwerty', 10),
        isAdmin: true,
    },
    {
        name: 'morty',
        email: 'morty@gmail.com',
        password: bcrypt.hashSync('qwerty', 10),
        isAdmin: true,
    },
];
export default users;
