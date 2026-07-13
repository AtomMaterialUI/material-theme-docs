const fs = require('fs');
const themes = require('../gruntfile.themes');
const path = require('path');

const templatePath = path.resolve(__dirname, '../js/themes.template.js');
const outputPath = path.resolve(__dirname, '../assets/js/themes.js');

try {
    let content = fs.readFileSync(templatePath, 'utf8');

    // Replace {{themesCSS}}
    content = content.replace('{{themesCSS}}', themes.getThemesCSS());

    // Replace @@themes
    content = content.replace('@@themes', JSON.stringify(themes.getThemes()));

    fs.writeFileSync(outputPath, content);
    console.log('Successfully regenerated assets/js/themes.js');
} catch (error) {
    console.error('Error generating themes:', error);
    process.exit(1);
}