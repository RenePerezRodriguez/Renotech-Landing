import sharp from 'sharp';
import fs from 'fs';

async function generate() {
    const input = 'public/logo.png';
    if (!fs.existsSync(input)) {
        console.error('logo.png no encontrado en public/logo.png!');
        process.exit(1);
    }

    try {
        console.log('Generando favicons...');
        await sharp(input).resize(16, 16).png().toFile('public/favicon-16x16.png');
        await sharp(input).resize(32, 32).png().toFile('public/favicon-32x32.png');

        console.log('Generando Apple Touch Icon...');
        await sharp(input).resize(180, 180).png().toFile('public/apple-touch-icon.png');

        console.log('Generando PWA Manifest Icons...');
        await sharp(input).resize(192, 192).png().toFile('public/android-chrome-192x192.png');
        await sharp(input).resize(512, 512).png().toFile('public/android-chrome-512x512.png');

        // Copia de seguridad como fallback
        fs.copyFileSync('public/favicon-32x32.png', 'public/favicon.ico');

        console.log('✅ ¡Todos los iconos generados con éxito!');
    } catch (error) {
        console.error('Error generando iconos:', error);
    }
}

generate();
