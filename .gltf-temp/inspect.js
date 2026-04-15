const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'public', 'models', 'car.glb');
const buffer = fs.readFileSync(filePath);

console.log('Size:', (buffer.length / 1024 / 1024).toFixed(1), 'MB');
const version = buffer.readUInt32LE(4);
console.log('GLB version:', version);

let offset = 12;
while (offset < buffer.length) {
  const chunkLength = buffer.readUInt32LE(offset);
  const chunkType = buffer.readUInt32LE(offset + 4);

  if (chunkType === 0x4E4F534A) {
    const json = JSON.parse(buffer.slice(offset + 8, offset + 8 + chunkLength).toString('utf8'));

    console.log('\n=== NODES WITH MESHES ===');
    json.nodes.forEach((n, i) => {
      if (n.mesh !== undefined) {
        console.log('  Node ' + i + ': "' + n.name + '" -> mesh[' + n.mesh + ']');
      }
    });

    console.log('\n=== MESHES ===');
    json.meshes.forEach((m, i) => {
      console.log('  Mesh ' + i + ': "' + m.name + '" primitives:' + m.primitives.length);
    });

    console.log('\n=== MATERIALS ===');
    json.materials.forEach((m, i) => {
      const pbr = m.pbrMetallicRoughness || {};
      const color = pbr.baseColorFactor
        ? pbr.baseColorFactor.map(v => (v * 255).toFixed(0)).join(',')
        : 'texture';
      console.log('  Mat ' + i + ': "' + m.name + '" color:(' + color + ') metallic:' + (pbr.metallicFactor !== undefined ? pbr.metallicFactor : '?') + ' rough:' + (pbr.roughnessFactor !== undefined ? pbr.roughnessFactor : '?'));
    });

    console.log('\nTextures: ' + (json.textures ? json.textures.length : 0));
    console.log('Images: ' + (json.images ? json.images.length : 0));
    console.log('Animations: ' + (json.animations ? json.animations.length : 0));
  }

  offset += 8 + chunkLength;
}
