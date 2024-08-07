const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'app/components');
const indexPath = path.join(__dirname, 'app', 'index.js');
const defaultExports = "export * from '@nextui-org/react';\n";

fs.readdir(componentsDir, (err, files) => {
  if (err) {
    return console.error('Failed to read components directory:', err);
  }

  const exportStatements = files
    .filter(file => file.endsWith('.tsx')) // Adjust the filter if you have different file extensions
    .map(file => {
      const componentName = path.basename(file, '.tsx');
      return `export { default as ${componentName} } from './components/${componentName}';`;
    })
    .join('\n');

    const content = `${defaultExports}\n${exportStatements}`;


  fs.writeFile(indexPath, content, (err) => {
    if (err) {
      return console.error('Failed to write index.js:', err);
    }
    console.log('index.js has been generated successfully.');
  });
});
