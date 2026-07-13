// Quick diagnostic script to check environment variables
// Run with: node check-env.js

console.log('\n=== Environment Variables Check ===\n');

// Try loading .env files
try {
  require('dotenv').config({ path: '.env' });
  require('dotenv').config({ path: '.env.local' });
} catch (e) {
  console.log('Note: dotenv package is installed, loading env files...');
}

console.log('EMAIL_USER:', process.env.EMAIL_USER ? '✓ Set' : '✗ Not set');
console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? '✓ Set (length: ' + process.env.EMAIL_PASS.length + ')' : '✗ Not set');
console.log('RECEIVER_EMAIL:', process.env.RECEIVER_EMAIL ? '✓ Set (' + process.env.RECEIVER_EMAIL + ')' : '✗ Not set');

console.log('\n=== File Check ===\n');
const fs = require('fs');
console.log('.env file exists:', fs.existsSync('.env') ? '✓ Yes' : '✗ No');
console.log('.env.local file exists:', fs.existsSync('.env.local') ? '✓ Yes' : '✗ No');

if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.RECEIVER_EMAIL) {
  console.log('\n⚠️  PROBLEM: Environment variables are not set!');
  console.log('\nNext steps:');
  console.log('1. Create a .env.local file in this directory');
  console.log('2. Add your credentials (see .env.local.example)');
  console.log('3. Restart your dev server (npm run dev)');
} else {
  console.log('\n✓ All environment variables are configured!');
}

console.log('\n');
