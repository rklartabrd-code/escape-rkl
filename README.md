# Escape from Rose Kennedy Lane — first WASM experiment

This is a minimal C engine called from JavaScript and rendered on HTML Canvas.

## Build on Windows

Install [Emscripten SDK](https://emscripten.org/docs/getting_started/downloads.html), activate it, and run `emsdk_env.bat` in the command prompt where you will build.

From this directory:

```bat
build.bat
```

The build creates `game-wasm.js` and `game-wasm.wasm`. Both files must be committed alongside `index.html`, `game.js`, and `game.c` for GitHub Pages.

## Test locally

From this directory run:

```bat
py -m http.server 8000
```

Open http://localhost:8000/ in your browser. Don't open index.html with a `file://` URL: browsers restrict WASM loading from local files.

Use the arrow keys to move the rectangle. The Reset button calls C.

## Publish

```bat
git add .
git commit -m "First C WebAssembly experiment"
git branch -M main
git push -u origin main
```

On GitHub, choose Settings → Pages → Deploy from a branch → main → /(root).

Note: `game-wasm.js` is Emscripten's generated loader, not the hand-written `game.js`.
