import { loadManifest } from '@angular-architects/module-federation';

loadManifest('assets/mf.manifest.json')
.catch((err) => console.error('Can\'t load remote entries', err))
.then(() => import('./bootstrap'))
.catch((err) => console.error(err));

