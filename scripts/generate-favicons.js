import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const staticDir = join(__dirname, '..', 'static');

// Read the source SVG
const svgPath = join(staticDir, 'favicon.svg');
const svgBuffer = readFileSync(svgPath);

// Define all the sizes we need to generate
const sizes = [
  { name: 'favicon-96x96.png', size: 96 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'web-app-manifest-192x192.png', size: 192 },
  { name: 'web-app-manifest-512x512.png', size: 512 },
];

// ICO sizes (multi-resolution)
const icoSizes = [16, 32, 48];

async function generatePNG(size, outputName) {
  const outputPath = join(staticDir, outputName);

  await sharp(svgBuffer, { density: 300 })
    .resize(size, size, {
      fit: 'contain',
      background: { r: 255, g: 255, b: 255, alpha: 0 }
    })
    .png()
    .toFile(outputPath);

  console.log(`Generated: ${outputName} (${size}x${size})`);
}

async function generateICO() {
  // Generate individual PNG buffers for each ICO size
  const pngBuffers = await Promise.all(
    icoSizes.map(async (size) => {
      const buffer = await sharp(svgBuffer, { density: 300 })
        .resize(size, size, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 0 }
        })
        .png()
        .toBuffer();
      return { size, buffer };
    })
  );

  // Create ICO file manually
  // ICO format: Header + Directory entries + Image data
  const images = pngBuffers.sort((a, b) => a.size - b.size);

  // Calculate offsets
  const headerSize = 6;
  const dirEntrySize = 16;
  const dirSize = dirEntrySize * images.length;
  let dataOffset = headerSize + dirSize;

  // Build directory entries and collect image data
  const dirEntries = [];
  const imageData = [];

  for (const img of images) {
    dirEntries.push({
      width: img.size === 256 ? 0 : img.size,
      height: img.size === 256 ? 0 : img.size,
      colorCount: 0,
      reserved: 0,
      planes: 1,
      bitCount: 32,
      size: img.buffer.length,
      offset: dataOffset
    });
    imageData.push(img.buffer);
    dataOffset += img.buffer.length;
  }

  // Create the ICO buffer
  const totalSize = headerSize + dirSize + imageData.reduce((sum, buf) => sum + buf.length, 0);
  const icoBuffer = Buffer.alloc(totalSize);

  // Write header
  icoBuffer.writeUInt16LE(0, 0);      // Reserved
  icoBuffer.writeUInt16LE(1, 2);      // Type: 1 = ICO
  icoBuffer.writeUInt16LE(images.length, 4); // Number of images

  // Write directory entries
  let offset = headerSize;
  for (const entry of dirEntries) {
    icoBuffer.writeUInt8(entry.width, offset);
    icoBuffer.writeUInt8(entry.height, offset + 1);
    icoBuffer.writeUInt8(entry.colorCount, offset + 2);
    icoBuffer.writeUInt8(entry.reserved, offset + 3);
    icoBuffer.writeUInt16LE(entry.planes, offset + 4);
    icoBuffer.writeUInt16LE(entry.bitCount, offset + 6);
    icoBuffer.writeUInt32LE(entry.size, offset + 8);
    icoBuffer.writeUInt32LE(entry.offset, offset + 12);
    offset += dirEntrySize;
  }

  // Write image data
  for (const data of imageData) {
    data.copy(icoBuffer, offset);
    offset += data.length;
  }

  const outputPath = join(staticDir, 'favicon.ico');
  writeFileSync(outputPath, icoBuffer);
  console.log(`Generated: favicon.ico (${icoSizes.join(', ')}px)`);
}

async function main() {
  console.log('Generating favicons from SVG...\n');

  // Generate all PNG sizes
  for (const { name, size } of sizes) {
    await generatePNG(size, name);
  }

  // Generate ICO
  await generateICO();

  console.log('\nAll favicons generated successfully!');
}

main().catch(console.error);
