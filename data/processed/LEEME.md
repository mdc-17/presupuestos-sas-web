# Datos procesados

## `liquidacion_consejeria_sas_2020_2025.csv`

Liquidación del presupuesto de gastos de la **Consejería competente en Salud** y del **SAS**, ejercicios 2020-2025, según la Cuenta General de la Junta de Andalucía (Intervención General).

- **Nivel:** año × sección × programa × capítulo. En 2020-2022 se suman los servicios de cada programa; en 2023-2025 el documento ya viene a ese nivel.
- **Fases:** `inicial` (créditos iniciales), `definitivo` (créditos definitivos), `obligaciones` (obligaciones reconocidas netas).
- **Unidades:** euros corrientes, con 2 decimales, sin redondear.
- **Fiabilidad:** `OFICIAL_PRIMARIA`.
- **Secciones:** 1500 / 1531 (2020-2022), 1300 / 1331 (2023-2025). Ver `data/equivalencias/secciones.csv`.
- **Generación:** `scripts/extraccion/cuenta_general.py` (PDF → `data/interim/`) y `scripts/extraccion/procesar_liquidacion.py` (→ este fichero).
- **Validación:** `scripts/validacion/validar_liquidacion.py` → `data/interim/validacion_liquidacion.md`. Veredicto (2026-11-10): **VALIDADO CON INCIDENCIAS** (INC-006, INC-012 a INC-015).

### Columnas

| Columna | Contenido |
|---|---|
| `año` | Ejercicio. |
| `gobierno_legislatura` | Vacía: pendiente de `data/equivalencias/legislaturas.csv`. |
| `seccion` | Código de sección tal como figura en el documento. |
| `servicio` | Vacía (agregado de todos los servicios). El detalle por servicio de 2020-2022 está en `data/interim/`. |
| `programa_codigo`, `programa_nombre` | Tal como figuran en el documento (en 2023-2025 los nombres aparecen sin espacios por la maquetación del PDF). |
| `capitulo` | 1 a 9. |
| `concepto` | Vacía (nivel capítulo). |
| `fase` | `inicial`, `definitivo` u `obligaciones`. |
| `importe_eur` | Importe en euros corrientes. |
| `fuente_id` | Id en `data/catalogo_fuentes.csv`. |
| `fiabilidad` | Etiqueta de fiabilidad. |
| `notas` | Contexto (prórroga, identificación de páginas) y páginas del PDF de origen. |

### Advertencias de uso

1. **No sumar Consejería + SAS** sin consolidar: casi todo el crédito de la Consejería son transferencias, en su mayor parte al SAS (INC-015). El total consolidado está pendiente.
2. 2022 es un ejercicio con **presupuesto prorrogado** (INC-001).
3. Hay celdas programa × capítulo con obligaciones mayores que el crédito definitivo (INC-013).
4. Comparar programas entre años exige la tabla de equivalencias de programas (pendiente): por ejemplo, las transferencias de la Consejería pasan del programa 41H al 12S en 2023.

## `liquidacion_consolidada_junta_2010_2025.csv`

Liquidación **consolidada** oficial del presupuesto de gastos de la Junta (Junta + agencias; sin transferencias internas), **todas las secciones**, 2020-2025. Nivel sección × capítulo en 2020-2022 (estado 10.5) y sección × programa × capítulo en 2023-2025 (estado 7.1.2). `OFICIAL_PRIMARIA`. Generado por `scripts/extraccion/consolidado.py`. Atención: los códigos de sección se reutilizan entre años para entidades distintas; usar `data/equivalencias/perimetro_sanidad.csv`.

## `ipc_andalucia_anual.csv` y `poblacion_andalucia.csv`

IPC general de Andalucía (base 2021), media anual, con el factor a euros de 2025 (`DERIVADO`). Población a 1 de enero según el padrón (tabla 2853 hasta 2021, `OFICIAL_SECUNDARIA`; suma municipal 2022-2025, `DERIVADO`). Serie 2010-2025. Generado por `scripts/analisis/series_base.py`.

## `metricas_sanidad_2010_2025.csv`

Métricas `DERIVADO` por perímetro (`sanidad_programas` 2010-2025, principal; `sanidad_consolidado` y entidades 2020-2025), año, capítulo (`total` o 1-9) y fase: euros corrientes, euros constantes 2025, € por habitante (corrientes y constantes), % del total consolidado de la Junta y grado de ejecución. El perímetro principal de la serie larga es `sanidad_programas`. Generado por `scripts/analisis/metricas_sanidad.py`.

## `sanidad_programas_2010_2025.csv`

Serie larga homogénea de la sanidad pública andaluza por programas sanitarios (perímetro `sanidad_programas`), por año, capítulo y fase, en euros corrientes (`DERIVADO`). En 2010-2014 solo total y capítulo VI. Generado por `scripts/analisis/sanidad_programas.py`, que incluye sus comprobaciones (`data/interim/validacion_sanidad_programas.md`).

## `fondos_extraordinarios_2020_2025.csv`

Filas de las desviaciones de financiación de la Cuenta General: SAS (todas las filas; columna `fondo` = COVID-19 / REACT-UE / MRR / ordinario) y Administración General de la Junta (solo códigos COVID y MR). Derechos y obligaciones reconocidas del ejercicio en euros. Las de la Memoria del SAS 2023-2025 vienen en miles de euros en el documento y se han multiplicado por 1.000 (`unidad_documento`). `OFICIAL_PRIMARIA`. Generado por `scripts/extraccion/fondos_extraordinarios.py`.

## `sanidad_sin_fondos_extraordinarios_2010_2025.csv`

Obligaciones reconocidas del perímetro `sanidad_programas` con y sin los fondos extraordinarios del SAS (COVID-19, REACT-UE, MRR), con euros constantes de 2025 y € por habitante de la serie sin fondos. `DERIVADO`. Generado por `scripts/analisis/sin_fondos.py`.
