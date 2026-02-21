import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const size = 64;
const src = join(__dirname, '../src/assets/profilepic.png');
const out = join(__dirname, '../public/favicon.png');

const circleSvg = Buffer.from(
  `<svg width="${size}" height="${size}"><circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="white"/></svg>`
);

const mask = await sharp(circleSvg).png().toBuffer();

const result = await sharp(src)
  .resize(size, size)
  .composite([{ input: mask, blend: 'dest-in' }])
  .png()
  .toBuffer();

writeFileSync(out, result);
console.log('Circular favicon written to public/favicon.png');
