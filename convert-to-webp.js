import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const heartlessDir = path.join(__dirname, 'public', 'assets', 'images', 'projects', 'heartless');

async function convertToWebP() {
  const files = fs.readdirSync(heartlessDir).filter(file => 
    file.endsWith('.png') || file.endsWith('.PNG')
  );
  
  console.log(`Found ${files.length} images to convert to WebP...\n`);
  
  for (const file of files) {
    const inputPath = path.join(heartlessDir, file);
    const outputPath = path.join(heartlessDir, file.replace(/\.png$/i, '.webp'));
    
    const inputStats = fs.statSync(inputPath);
    const inputSize = (inputStats.size / 1024 / 1024).toFixed(2);
    
    console.log(`Converting ${file} (${inputSize} MB)...`);
    
    await sharp(inputPath)
      .webp({ quality: 85 })
      .toFile(outputPath);
    
    const outputStats = fs.statSync(outputPath);
    const outputSize = (outputStats.size / 1024 / 1024).toFixed(2);
    const reduction = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);
    
    console.log(`✓ Converted to ${outputSize} MB (${reduction}% reduction)\n`);
  }
  
  console.log('All images converted to WebP successfully!');
  console.log('\nNote: You\'ll need to update the file extensions in your code from .png/.PNG to .webp');
}

convertToWebP().catch(console.error);
