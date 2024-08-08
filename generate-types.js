const fs = require('fs');
const path = require('path');

// Paths
const componentsDir = path.join(__dirname, 'app/components'); // Ensure this is correct
const typesDir = path.join(__dirname, 'types');
const typesPath = path.join(typesDir, 'index.d.ts');

// Create types directory if it doesn't exist
if (!fs.existsSync(typesDir)) {
  fs.mkdirSync(typesDir);
}

// Read components directory
fs.readdir(componentsDir, (err, files) => {
  if (err) {
    return console.error('Failed to read components directory:', err);
  }

  // Filter and map type declarations
  const typeDeclarations = files
    .filter(file => file.endsWith('.ts') || file.endsWith('.tsx'))
    .map(file => {
      const componentName = path.basename(file, path.extname(file));
      return `export const ${componentName}: React.FC<any>;`;
    })
    .join('\n');

  // Generate type file content
  const typeFileContent = `
import * as React from 'react';
declare module '@kappalsoftware/next-ui-system' {
  ${typeDeclarations}
  export { Table, TableHeader, TableRow, TableCell, Modal } from 'nextui-org/react'; // Ensure all nextui-org/react types are included
}
`;

  // Write to index.d.ts
  fs.writeFile(typesPath, typeFileContent, (err) => {
    if (err) {
      return console.error('Failed to write index.d.ts:', err);
    }
    console.log('index.d.ts has been generated successfully.');
  });
});
