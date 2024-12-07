#!/bin/bash

# Verificar si el usuario proporcionó un número como argumento
if [ $# -ne 1 ]; then
    echo "Uso: $0 <numero>"
    exit 1
fi

# Capturar el número proporcionado
NUMERO=$1

# Obtener el día actual (formato: day)
DAY=$(date +"day")

# Crear el nombre de la carpeta
CARPETA="${NUMERO}${DAY}"

# Verificar si la carpeta ya existe
if [ -d "$CARPETA" ]; then
    echo "La carpeta '$CARPETA' ya existe."
    exit 0
fi

# Crear la carpeta
mkdir -p "$CARPETA"

# Crear el archivo main.ts con un contenido básico
echo "console.log('Hola, mundo desde main.ts');" > "${CARPETA}/main.ts"

# Crear el archivo README.md con contenido inicial
echo "# DAY ${NUMERO}" > "${CARPETA}/README.md"
echo "" >> "${CARPETA}/README.md"
echo "Este proyecto fue generado automáticamente." >> "${CARPETA}/README.md"

# Mostrar mensaje de éxito
echo "Carpeta '$CARPETA' creada con éxito."
echo "Archivos:"
echo "  - main.ts"
echo "  - README.md"
exit 0