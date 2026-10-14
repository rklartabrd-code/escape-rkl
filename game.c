#include <stdint.h>
#include <emscripten/emscripten.h>

static int x = 120;
static int y = 90;

EMSCRIPTEN_KEEPALIVE
void game_reset(void) { x = 120; y = 90; }

EMSCRIPTEN_KEEPALIVE
void game_move(int dx, int dy) {
    x += dx;
    y += dy;
    if (x < 0) x = 0;
    if (y < 0) y = 0;
    if (x > 440) x = 440;
    if (y > 280) y = 280;
}

EMSCRIPTEN_KEEPALIVE
int game_x(void) { return x; }

EMSCRIPTEN_KEEPALIVE
int game_y(void) { return y; }
