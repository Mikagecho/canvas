import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const TARGET_DIRS = [
    'public/images/bg',
    'public/images/legacy'
];

async function optimizeImages() {
    for (const dir of TARGET_DIRS) {
        try {
            const files = await fs.readdir(dir);
            for (const file of files) {
                if (file.match(/\.(png|jpg|jpeg)$/i)) {
                    const inputPath = path.join(dir, file);
                    const ext = path.extname(file);
                    const name = path.basename(file, ext);
                    const outputPath = path.join(dir, `${name}.webp`);

                    console.log(`Optimizing ${file}...`);

                    await sharp(inputPath)
                        .resize(1920, null, {
                            withoutEnlargement: true,
                            fit: 'inside'
                        })
                        .webp({ quality: 80 })
                        .toFile(outputPath);

                    console.log(`Created ${name}.webp`);

                    // Optionally delete the original if you want to be "automatic"
                    // but for now let's keep it until reference is updated.
                }
            }
        } catch (err) {
            console.error(`Error processing directory ${dir}:`, err);
        }
    }
}

optimizeImages();
