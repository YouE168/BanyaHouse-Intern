import bcrypt from 'bcryptjs';

// admin password
const password = 'BanyaHouse2024!';

const hash = bcrypt.hashSync(password, 10);
console.log('Add this to your .env.local:');
console.log(`ADMIN_PASSWORD_HASH=${hash}`);