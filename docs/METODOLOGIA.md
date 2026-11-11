# Metodología

Este documento fija definiciones, fórmulas y criterios. Cualquier cambio se registra en `MEMORIA_PROYECTO.md` (sección *Decisiones*). Los puntos marcados **[CONFIRMADO AAAA-MM-DD]** han sido validados por el usuario (ver `MEMORIA_PROYECTO.md`, Petición 2); los marcados **[PENDIENTE DE CONFIRMAR]** son propuestas aún no validadas.

## 1. Perímetro del análisis

- **Sección de la Consejería competente en Salud** (con la denominación y código de cada año) y **sección del SAS**.
- Los códigos y denominaciones se mapean en `data/equivalencias/secciones.csv` y `data/equivalencias/programas.csv`. Nunca se supone que un código es igual entre años sin comprobarlo en el documento original.
- **Doble cómputo [CONFIRMADO 2026-11-10]:** la Consejería transfiere fondos al SAS (capítulos IV y VII). Si se suman Consejería + SAS sin eliminar esas transferencias internas, el total se infla. Criterio: publicar (a) cada sección por separado y (b) un total **consolidado** que reste las transferencias Consejería→SAS, indicando siempre cuál de los dos se muestra.

## 2. Fases presupuestarias

| Fase en `data/processed` | Fuente habitual | Definición |
|---|---|---|
| `inicial` | Ley de Presupuestos / documentación de Hacienda | Crédito inicial aprobado (o prorrogado). |
| `definitivo` | Liquidación / Cuenta General | Inicial + modificaciones. |
| `obligaciones` | Liquidación / Cuenta General | Obligaciones reconocidas en el ejercicio. |

**Grado de ejecución** = `obligaciones / definitivo × 100`. Se publica también, como lectura complementaria, `obligaciones / inicial × 100`, indicando claramente cuál es cuál.

## 3. Métricas y fórmulas

Para un importe `X(t)` del año `t`:

| Métrica | Fórmula | Etiqueta |
|---|---|---|
| Euros corrientes | `X(t)` | la de la fuente |
| Euros constantes (año base `b`) | `X(t) × IPC(b) / IPC(t)` | `DERIVADO` |
| Por habitante | `X(t) / Población(1 de enero de t)` | `DERIVADO` |
| % del presupuesto total de la Junta | `X(t) / Total gastos Junta(t) × 100`, misma fase en numerador y denominador | `DERIVADO` |
| Variación interanual | `(X(t) − X(t−1)) / X(t−1) × 100` | `DERIVADO` |
| Tasa media anual | `(X(t_fin)/X(t_ini))^(1/(t_fin−t_ini)) − 1` | `DERIVADO` |

Reglas:
- Las variaciones se calculan **para todos los pares de años consecutivos** de la serie, no solo para los seleccionados.
- Si se publica una tasa media, se publica para la **serie completa** y, si se pide un subperiodo, también para los demás subperiodos de igual longitud o por legislaturas completas, con el mismo método.

### 3.1 Deflactor [CONFIRMADO 2026-11-10]

- **Índice:** IPC general, **media anual**, ámbito **Andalucía** (INE, base 2021; media de los 12 índices mensuales, ver INC-008). El IPC general nacional queda documentado como lectura alternativa.
- **Año base:** 2025 (euros constantes de 2025).
- Si 2025 aún no tiene media anual cerrada en el momento del cálculo, se indicará el último dato disponible.
- No se usa, por ahora, un deflactor específico del gasto público (decisión del usuario, 2026-11-10).

### 3.2 Población

- **Cifras oficiales de población a 1 de enero** (Revisión del Padrón municipal, INE) para Andalucía. Se usa la población a 1 de enero del ejercicio `t`.
- 2010-2021: tabla 2853 del INE. 2022-2025: suma de los municipios andaluces del fichero oficial `pobmun.zip` (la suma reproduce la tabla 2853 en 2021). Ver INC-007.
- **[CONFIRMADO 2026-11-10]** Se usa el padrón en toda la serie. El Censo anual (tabla 67988, 2021-2025) no se mezcla en la serie; solo se cita como alternativa en la metodología.

### 3.3 Lectura de la Cuenta General

- Hasta 2022, la liquidación de gastos es el apartado 3-1; desde 2023, el 2-1 (el 3-1 pasa a ser ingresos). Ver INC-004.
- En los resúmenes 2010-2014 cada sección ocupa dos líneas: la primera con crédito inicial, crédito definitivo, gastos comprometidos, pagos realizados y remanentes; la segunda con modificaciones, obligaciones reconocidas y obligaciones pendientes de pago.

## 1bis. Perímetro "sanidad" consolidado [CONFIRMADO 2026-11-10]

- El total sin doble cómputo se toma de la **liquidación consolidada oficial** de la Cuenta General, no de un cálculo propio.
- Perímetro `sanidad_consolidado`: todas las entidades sanitarias con sección propia en el consolidado. Son la Consejería competente en Salud, el SAS, las agencias públicas empresariales sanitarias (2021-2022), el Consorcio Sanitario Público del Aljarafe y el Instituto de Salud de Andalucía (2025). Ver `data/equivalencias/perimetro_sanidad.csv`, INC-015 e INC-016.
- Denominador del "% del total": total consolidado de la Junta (todas las secciones y capítulos), en la misma fase.

## 3bis. Serie larga 2010-2025 y cambios de perímetro [CONFIRMADO 2026-11-10]

- Entre 2010 y 2014 el SAS no figura como sección propia en los resúmenes de liquidación y la Consejería incluía otras competencias (Bienestar Social, Igualdad, Políticas Sociales). Ver INC-005.
- Criterio: las comparaciones de la serie larga se hacen **por programas sanitarios equivalentes**, usando `data/equivalencias/programas.csv`. La sección completa de cada año se puede mostrar como dato descriptivo, nunca como serie homogénea.
- Implementación: perímetro `sanidad_programas` (`scripts/analisis/sanidad_programas.py`). Comprende el SAS, los programas D.S.G. (41A/12O/12S) y de la función 41 de la Consejería, y las otras entidades sanitarias con sección propia en el consolidado, sin transferencias internas. Excluye 31B, 31P, 44H y los programas sociales de 2013-2015.
  - Las transferencias al SAS de 2010-2019 se miden con los ingresos del SAS (450/750), con la medida que reproduce la eliminación oficial en cada periodo (INC-018).
  - En 2010-2014 solo se publican el total y el capítulo VI (INC-019).

## 4. Años con presupuesto prorrogado

- Se anotan en `INCIDENCIAS_DATOS.md` y en la columna `notas` de cada registro.
- **[CONFIRMADO 2026-11-10]** En un año prorrogado, el `crédito inicial` es el crédito prorrogado según la documentación oficial (2022: documentación de la prórroga publicada por Hacienda; 2019: créditos de la Ley 3/2019). Si no existiera documento oficial, `NO_DISPONIBLE`; nunca se copia el año anterior. El año se marca como prorrogado en tablas y gráficos.

## 5. Fondos extraordinarios (COVID, REACT-UE, MRR)

- **[CONFIRMADO 2026-11-10]** La serie principal los incluye (son crédito y gasto de la sección). Cuando la documentación permita identificarlos (servicio / fuente de financiación), se publica además la serie **sin** ellos. Los años afectados se marcan siempre.
- Implementación (`scripts/extraccion/fondos_extraordinarios.py`, `scripts/analisis/sin_fondos.py`):
  - Se restan las obligaciones del SAS financiadas con COVID-19 (código S0691), REACT-UE y MRR (códigos MR…), leídas en las desviaciones de financiación de la Cuenta General y en la Memoria de las cuentas del SAS.
  - Solo para la fase de obligaciones.
  - No identificables: el Fondo COVID-19 no finalista (INC-021) y lo ejecutado por la Consejería fuera del SAS (INC-023).
  - Los fondos M.A.C. (FEDER/FSE del marco ordinario) se consideran ordinarios.

## 6. Legislaturas

La columna `gobierno_legislatura` identifica la legislatura del Parlamento de Andalucía en la que **se aprobó** la Ley de Presupuestos (o en la que se prorrogó). Es un dato identificativo, sin uso valorativo. Las fechas se toman de fuentes oficiales del Parlamento de Andalucía y se documentan en `data/equivalencias/legislaturas.csv`.

## 7. Trazabilidad

- Cada registro de `data/processed/` lleva `fuente_id` (id de `catalogo_fuentes.csv`) y `fiabilidad`.
- Cada extracción en `data/interim/` indica el fichero original, la página (PDF) o la hoja/celda (Excel).
- Los scripts son reproducibles: con el catálogo y los scripts de `scripts/` se regenera todo.

## 8. Ficheros grandes

Opción elegida (la más sencilla, sin dependencias adicionales):
- Los originales de **≤ 50 MB** se guardan en git en `data/raw/<año>/`.
- Los de **> 50 MB** se excluyen con una línea específica en `.gitignore`; quedan registrados en `catalogo_fuentes.csv` (URL + `sha256`) y se recuperan con `scripts/descarga/`. La nota del catálogo indica `fuera_de_git`.
- No se usa Git LFS para no obligar a los compañeros a instalarlo.

## 9. Gráficos

- Ejes de magnitud empiezan en cero; si no es así, se indica en el propio gráfico.
- Gráficos que se comparan entre sí usan la misma escala.
- Cada gráfico indica: fuente, unidades, euros corrientes o constantes (y año base), fecha de descarga y fiabilidad.
- Paleta de grises (rampa ordinal validada `#b5b4ae` / `#7a7974` / `#3a3936`). No se usan rojo, azul, verde, morado ni naranja para datos, porque pueden asociarse a partidos.
- Cada gráfico se acompaña de un `.csv` con sus datos (vista de tabla).
