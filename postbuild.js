import fs from 'fs';
import path from 'path';

try {
  const src = path.join(process.cwd(), 'dist', 'index.html');
  const dest = path.join(process.cwd(), 'tfe-mariemont-hors-ligne.html');
  
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log('✓ Le fichier standalone a été généré avec succès dans la racine : tfe-mariemont-hors-ligne.html');
  } else {
    console.error('Le fichier dist/index.html n\'existe pas. Veuillez lancer npm run build d\'abord.');
  }
} catch (err) {
  console.error('Erreur lors de la copie du fichier standalone :', err);
}
