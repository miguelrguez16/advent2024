# DAY 9

## Los elfos han construido un reno 🦌 robot aspirador (@) para limpiar un poco el taller de cara a las navidades.

El reno se mueve sobre un tablero para recoger cosas del suelo (*) y debe evitar obstáculos (#).

Recibirás dos parámetros:

board: un string que representa el tablero.
moves: un string con los movimientos: 'L' (izquierda), 'R' (derecha), 'U' (arriba), 'D' (abajo).
Reglas del movimiento:

Si el reno se sale del tablero o choca contra un obstáculo (#) → devuelve 'crash'.
Si el reno recoge algo del suelo (*) durante los movimientos → devuelve 'success'.
Si el reno no recoge nada ni se estrella → devuelve 'fail'.
Importante: Ten en cuenta que en el board la primera y última línea están en blanco y deben descartarse.

Ejemplo: