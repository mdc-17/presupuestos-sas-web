# Web de consulta

Página estática para explorar los datos del proyecto y comparar cualquier partida entre años.

- `index.html`: la página (HTML, CSS y JavaScript sin dependencias; solo carga tipografías de Google Fonts).
- `datos.js`: datos, generados por `scripts/web/generar_datos_web.py` a partir de `data/processed/`. **No se edita a mano.**
- `descripciones.js`: textos en lenguaje llano (fases, lecturas, capítulos, ámbitos y programas). **Se edita a mano.** Las descripciones de programas resumen las memorias oficiales (id de catálogo y página en el campo `fuente`).

## Uso

Abrir `web/index.html` en el navegador (funciona con doble clic, sin servidor).

Para actualizar los datos tras cambiar `data/processed/`:

```bash
python3 scripts/web/generar_datos_web.py
```

El script comprueba, antes de escribir, que las fórmulas de euros constantes y por habitante que aplica la página reproducen `metricas_sanidad_2010_2025.csv` y que la suma de capítulos de cada programa cuadra con su total.

## Qué permite

- **Ámbito:** perímetros consolidados (sanidad 2010-2025, sanidad por secciones 2020-2025, SAS, Consejería, agencias, Consorcio del Aljarafe, Instituto de Salud de Andalucía, total de la Junta), programas sin consolidar de la Consejería y del SAS (2020-2025) y fondos extraordinarios.
- **Programa y capítulo:** cualquier combinación disponible. Los códigos de programa se homogeneizan con `data/equivalencias/programas.csv` (12O → 12S).
- **Lectura:** euros corrientes, constantes de 2025, por habitante (corrientes y constantes) y % del total consolidado de la Junta (solo perímetros consolidados).
- **Comparar dos años:** valores de A y B, diferencia, variación y variación media anual; desglose por capítulo y por programa.
- Serie completa en tabla, notas de contexto por año y fuentes con id de catálogo, fecha de descarga y fiabilidad.

Lo que no figura en un documento se muestra como «No disponible» (`NO_DISPONIBLE`); no se estima nada.
