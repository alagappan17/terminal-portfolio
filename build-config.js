// Simple build-time environment configuration generator
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Determine which env file to use
const isProd = process.env.NODE_ENV === 'production';
const envFile = isProd ? '.env.production' : '.env.local';
const envFilePath = path.join(__dirname, envFile);

// Set default values
let apiUrl = 'http://localhost:3000';

// Read from env file if it exists
if (fs.existsSync(envFilePath)) {
  try {
    const envContent = fs.readFileSync(envFilePath, 'utf8');
    const apiUrlMatch = envContent.match(/API_URL=(.+)/);
    if (apiUrlMatch && apiUrlMatch[1]) {
      // Trim unwanted characters (whitespace, %, etc.)
      apiUrl = apiUrlMatch[1].replace(/[\s%]+$/, '');
    }
  } catch (error) {
    console.error(`Error reading env file: ${error.message}`);
  }
}

// Generate simple config file
const configContent = `// THIS FILE IS AUTO-GENERATED - DO NOT EDIT
export const config = {
  api: {
    url: "${apiUrl}"
  }
};
`;

const outputPath = path.join(__dirname, 'src', 'config.js');
fs.writeFileSync(outputPath, configContent);

console.log(
  `✅ Config file generated with API_URL=${apiUrl} (${
    isProd ? 'production' : 'development'
  } mode)`
);
