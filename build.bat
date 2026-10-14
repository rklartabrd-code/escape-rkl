@echo off
setlocal
where emcc >nul 2>&1
if errorlevel 1 (
  echo Emscripten not found. Run emsdk_env.bat in this terminal first.
  exit /b 1
)
emcc game.c -O2 -s WASM=1 -s MODULARIZE=1 -s EXPORT_NAME=createGameModule -s EXPORTED_FUNCTIONS="['_game_reset','_game_move','_game_x','_game_y']" -o game-wasm.js
if errorlevel 1 exit /b 1
echo Built game-wasm.js and game-wasm.wasm
