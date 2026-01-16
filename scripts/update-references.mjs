import fs from 'fs/promises';

const FILES = [
    'src/data/scenario.ts',
    'public/fastcontact.html',
    'public/gemini.html',
    'public/repair.html'
];

async function updateReferences() {
    for (const file of FILES) {
        try {
            console.log(`Updating ${file}...`);
            const content = await fs.readFile(file, 'utf8');
            const updated = content.replace(/\.(png|jpg|jpeg)(?=["'])/g, '.webp');
            await fs.writeFile(file, updated, 'utf8');
            console.log(`Updated ${file}`);
        } catch (err) {
            console.error(`Error updating ${file}:`, err);
        }
    }
}

updateReferences();
