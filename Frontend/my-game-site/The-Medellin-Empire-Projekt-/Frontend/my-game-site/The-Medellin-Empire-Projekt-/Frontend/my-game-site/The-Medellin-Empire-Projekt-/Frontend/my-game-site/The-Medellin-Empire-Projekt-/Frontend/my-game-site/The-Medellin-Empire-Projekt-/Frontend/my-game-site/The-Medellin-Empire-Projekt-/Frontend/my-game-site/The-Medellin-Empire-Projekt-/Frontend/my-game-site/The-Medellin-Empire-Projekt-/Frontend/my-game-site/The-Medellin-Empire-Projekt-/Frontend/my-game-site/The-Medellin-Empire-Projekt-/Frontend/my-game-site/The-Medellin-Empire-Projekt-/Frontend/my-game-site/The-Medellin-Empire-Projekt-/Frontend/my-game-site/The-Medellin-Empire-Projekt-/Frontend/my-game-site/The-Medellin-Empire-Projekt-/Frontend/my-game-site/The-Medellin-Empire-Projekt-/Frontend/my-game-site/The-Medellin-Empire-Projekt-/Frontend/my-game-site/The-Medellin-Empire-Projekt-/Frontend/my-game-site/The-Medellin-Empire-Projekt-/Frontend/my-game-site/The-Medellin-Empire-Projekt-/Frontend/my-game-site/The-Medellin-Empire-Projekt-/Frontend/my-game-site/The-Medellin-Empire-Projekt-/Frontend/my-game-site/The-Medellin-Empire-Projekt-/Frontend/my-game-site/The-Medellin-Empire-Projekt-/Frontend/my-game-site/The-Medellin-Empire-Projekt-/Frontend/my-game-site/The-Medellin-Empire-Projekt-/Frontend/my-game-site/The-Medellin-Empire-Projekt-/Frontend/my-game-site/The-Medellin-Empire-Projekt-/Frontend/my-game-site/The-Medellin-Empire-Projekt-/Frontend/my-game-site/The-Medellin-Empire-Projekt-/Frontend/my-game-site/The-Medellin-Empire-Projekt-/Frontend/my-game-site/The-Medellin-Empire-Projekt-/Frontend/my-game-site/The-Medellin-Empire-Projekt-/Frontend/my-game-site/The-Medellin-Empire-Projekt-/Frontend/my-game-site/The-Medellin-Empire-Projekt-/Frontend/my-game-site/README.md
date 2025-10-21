# My Game — Vue 3 (Vite) landing

VALORANT-stílusú, videós hátterű landing oldal Vue 3 + Vite alapon.

## Gyors indítás

```bash
npm install
npm run dev
```

Nyisd meg a konzolban kapott helyi URL-t.

## Struktúra

- `index.html` – belépési pont
- `src/` – Vue app (router, komponensek, nézetek)
- `public/media/sample.mp4` – **IDE** másold a saját videódat `sample.mp4` néven
- `public/downloads/MyGame-Setup.txt` – Play Now gomb által letöltött példafájl

## Testreszabás

- Cseréld a logót, brand színeket a `src/style.css`-ben.
- A Play Now gomb hivatkozását módosítsd a saját telepítődre vagy backend végpontodra.
- Később backend: pl. `POST /api/download` a gombkattintásnál, majd átirányítás a fájl URL-re.

## Build

```bash
npm run build
npm run preview
```
