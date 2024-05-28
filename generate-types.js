const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'app/components');
const typesPath = path.join(__dirname, 'types', 'index.d.ts');

if (!fs.existsSync(path.join(__dirname, 'types'))) {
  fs.mkdirSync(path.join(__dirname, 'types'));
}

fs.readdir(componentsDir, (err, files) => {
  if (err) {
    return console.error('Failed to read components directory:', err);
  }

  const typeDeclarations = files
    .filter(file => file.endsWith('.ts') || file.endsWith('.tsx'))
    .map(file => {
      const componentName = path.basename(file, path.extname(file));
      return `export const ${componentName}: React.FC<any>;`;
    })
    .join('\n');

  const typeFileContent = `import * as React from 'react';\ndeclare module '@kappalsoftware/next-ui-system' {\n${typeDeclarations}\n}\n`;

  fs.writeFile(typesPath, typeFileContent, (err) => {
    if (err) {
      return console.error('Failed to write index.d.ts:', err);
    }
    console.log('index.d.ts has been generated successfully.');
  });
});
