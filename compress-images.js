import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const heartlessDir = path.join(__dirname, 'public', 'assets', 'images', 'projects', 'heartless');

async function compressImages() {
  const files = fs.readdirSync(heartlessDir).filter(file => file.endsWith('.png') || file.endsWith('.PNG'));
  
  console.log(`Found ${files.length} images to compress...\n`);
  
  for (const file of files) {
    const inputPath = path.join(heartlessDir, file);
    const outputPath = path.join(heartlessDir, file);
    
    const inputStats = fs.statSync(inputPath);
    const inputSize = (inputStats.size / 1024 / 1024).toFixed(2);
    
    console.log(`Compressing ${file} (${inputSize} MB)...`);
    
    await sharp(inputPath)
      .png({ quality: 80, compressionLevel: 9 })
      .toFile(outputPath + '.tmp');
    
    const outputStats = fs.statSync(outputPath + '.tmp');
    const outputSize = (outputStats.size / 1024 / 1024).toFixed(2);
    const reduction = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);
    
    fs.renameSync(outputPath + '.tmp', outputPath);
    
    console.log(`✓ Compressed to ${outputSize} MB (${reduction}% reduction)\n`);
  }
  
  console.log('All images compressed successfully!');
}

compressImages().catch(console.error);
