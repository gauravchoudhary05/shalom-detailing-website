// Inspect GLB file structure to extract node/mesh/material names
import { readFileSync } from 'fs';
import { resolve } from 'path';

const filePath = resolve('../public/models/car.glb');
const buffer = readFileSync(filePath);

// Parse GLB header
const magic = buffer.readUInt32LE(0);
const version = buffer.readUInt32LE(4);
const length = buffer.readUInt32LE(8);
console.log(`GLB v${version}, total size: ${(length / 1024 / 1024).toFixed(1)} MB`);

// Parse chunks
let offset = 12;
let jsonChunk = null;

while (offset < length) {
  const chunkLength = buffer.readUInt32LE(offset);
  const chunkType = buffer.readUInt32LE(offset + 4);
  
  if (chunkType === 0x4E4F534A) { // JSON chunk
    jsonChunk = JSON.parse(buffer.slice(offset + 8, offset + 8 + chunkLength).toString('utf8'));
  }
  offset += 8 + chunkLength;
}

if (!jsonChunk) { console.error('No JSON chunk found'); process.exit(1); }

// Extract scene structure
console.log('\n=== SCENES ===');
jsonChunk.scenes?.forEach((s, i) => console.log(`  Scene ${i}: "${s.name || 'unnamed'}" nodes: [${s.nodes}]`));

console.log('\n=== NODES (with meshes) ===');
jsonChunk.nodes?.forEach((n, i) => {
  if (n.mesh !== undefined || n.children?.length) {
    const meshInfo = n.mesh !== undefined ? ` → mesh[${n.mesh}]` : '';
    const childInfo = n.children?.length ? ` children:[${n.children}]` : '';
    console.log(`  Node ${i}: "${n.name || 'unnamed'}"${meshInfo}${childInfo}`);
  }
});

console.log('\n=== MESHES ===');
jsonChunk.meshes?.forEach((m, i) => {
  console.log(`  Mesh ${i}: "${m.name || 'unnamed'}" primitives: ${m.primitives.length}`);
  m.primitives.forEach((p, j) => {
    console.log(`    Prim ${j}: material[${p.material}] attrs: ${Object.keys(p.attributes).join(', ')}`);
  });
});

console.log('\n=== MATERIALS ===');
jsonChunk.materials?.forEach((m, i) => {
  const pbr = m.pbrMetallicRoughness || {};
  const color = pbr.baseColorFactor ? `rgba(${pbr.baseColorFactor.map(v => (v*255).toFixed(0)).join(',')})` : 'texture';
  console.log(`  Material ${i}: "${m.name || 'unnamed'}" color:${color} metallic:${pbr.metallicFactor ?? 'N/A'} rough:${pbr.roughnessFactor ?? 'N/A'}`);
});

console.log('\n=== TEXTURES ===');
console.log(`  ${jsonChunk.textures?.length || 0} textures, ${jsonChunk.images?.length || 0} images`);

console.log('\n=== ANIMATIONS ===');
console.log(`  ${jsonChunk.animations?.length || 0} animations`);
