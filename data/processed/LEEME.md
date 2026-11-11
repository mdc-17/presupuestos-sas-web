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

## `egsp_andalucia_2002_2024.csv`

Estadística de Gasto Sanitario Público (EGSP, Ministerio de Sanidad), serie 2002-2024 de gasto real (criterio de devengo), **Comunidad Autónoma de Andalucía**, hoja `Tabla 3.4.01` de `MSAN-EGSP-001`. Se usa como contraste de la serie del artículo 25 «Asistencia sanitaria con medios ajenos» del SAS (decisión del usuario, 2026-11-11). **No es la misma magnitud que el presupuesto de la Junta**: es una cuenta satélite que consolida a todos los agentes de gasto sanitario de la comunidad (Consejería, SAS, agencias públicas, etc.), en criterio de devengo.

- **Bloques** (`bloque`):
  - `economico_presupuestario`: filas 69-83 (cabecera de años en la fila 67). Partidas: Remuneración del personal, Consumo intermedio, Consumo de capital fijo, **Conciertos** (fila 75), Transferencias corrientes, Gasto de capital; total «GASTO PÚBLICO EN SANIDAD GASTO CONSOLIDADO DEL SUBSECTOR» (fila 81), «( - ) TRANSFERENCIAS INTERSECTORIALES» (fila 82) y «APORTACION AL GASTO PÚBLICO EN SANIDAD TOTAL CONSOLIDADO» (fila 83).
  - `cuenta_satelite_2.2_produccion_mercado`: filas 40-45 (por función) y 46 (total «2.2 PRODUCCIÓN DE MERCADO»), cabecera de años en la fila 13.
  - `cuenta_satelite_3_transferencias_corrientes`: fila 49 «3.1 - Entre AA.PP. Por servicios concertados».
  - Las filas de los bloques `cuenta_satelite_*` se incluyen para que `validador-datos` estudie su relación con «Conciertos»; **no se ha supuesto ninguna equivalencia**.
- **Unidades:** el documento da miles de euros (`unidad_documento`); `importe_eur` = valor de la celda × 1.000, con aritmética decimal exacta, sin redondear. Algunos valores conservan restos de coma flotante del .xls (p. ej. 2012 «Conciertos» = 460375368.69000003 €; Excel lo muestra como 460375,36869 miles). El CSV intermedio incluye una columna informativa con el valor a 15 cifras significativas.
- **Provisionales:** 2023 y 2024 (cabecera «2023(*)», «2024(*)»; nota «(*) Cifras provisionales.»), columna `provisional` = `sí`.
- **Origen de cada cifra:** celda en `notas` (p. ej. `Tabla 3.4.01!M75`). Los porcentajes sobre el total (filas 70-80) están solo en el CSV intermedio.
- **Fiabilidad:** `OFICIAL_SECUNDARIA`. Fecha de descarga: 2026-11-11 (catálogo).
- **Generación:** `scripts/extraccion/egsp.py` (`.venv/bin/python -I scripts/extraccion/egsp.py`). Intermedios en `data/interim/egsp/`: `MSAN-EGSP-001_tabla_3_4_01_celdas.csv` (una fila por celda: hoja, celda, cabecera, valor literal), `MSAN-EGSP-002_p72_contraste.csv` (contraste con el PDF) y `cuadres_egsp.md`.
- **Cuadres** (2026-11-11): la suma de las 6 partidas cuadra con la fila 81 en los 23 años; fila 81 − 82 = 83; filas 40-45 = 46; porcentajes = partida / total; los 345 valores del bloque coinciden con la página 72 del PDF `MSAN-EGSP-002` (redondeo de presentación a miles y a un decimal).

## `sas_medios_ajenos_inicial_2010_2025.csv`

**Crédito inicial** del artículo 25 «Asistencia sanitaria con medios ajenos» (capítulo II) del **Servicio Andaluz de Salud**, 2010-2025, por concepto y subconcepto, tal como figura en el Estado de Gastos por Programas del SAS de cada ejercicio (decisión del usuario de 2026-11-11, serie principal).

- **Nivel:** año × sección × servicio × programa × subconcepto (`concepto` = código completo, p. ej. `252.04`; `253` cuando el concepto no tiene subconceptos). En todos los años el artículo 25 del SAS aparece en un solo bloque: programa `4.1.C` «Atención sanitaria», servicio `06` «Otros servicios y centros».
- **Fase:** solo `inicial`. La ejecución (definitivo y obligaciones) se trata aparte.
- **Unidades:** euros corrientes; el documento da euros sin decimales (se escriben con `.00`). Ninguna cifra se ha redondeado ni corregido.
- **Fuentes** (`fuente_id`, todas `OFICIAL_PRIMARIA`, descarga 2026-11-10): 2010-2013 libro completo `20XX-HAC-001` (solo páginas con cabecera «SECCION: SERVICIO ANDALUZ DE SALUD»); 2014 `2014-HAC-004`; 2015 `2015-HAC-002` (tomo III); 2016-2025 `20XX-HAC-005`. La página (número de página del PDF, no el número impreso) va en `notas`, junto con el literal del concepto y del subconcepto, el servicio y la sección.
- **Códigos:** `seccion` y `programa_codigo` tal como figuran en la cabecera del documento (`16.31`, `15.31`, `12.31`, `13.31`…; `4.1.C`, que corresponde a `41C` en `data/equivalencias/programas.csv`). `gobierno_legislatura` vacía (pendiente de `data/equivalencias/legislaturas.csv`).
- **Contexto en `notas`:** 2019 (Ley aprobada en julio, INC-002), 2022 (prórroga de 2021, INC-001), 2010-2014 (el concepto 252.04 del programa 4.1.C figura también en la sección de la Consejería, servicio 01) y 2024-2025 (el transporte sanitario pasa del concepto 257 al 227, artículo 22).
- **Advertencias de uso:**
  1. Los conceptos cambian entre años (códigos que aparecen o desaparecen y literales que cambian; p. ej. `255.03` designa partidas distintas en 2010-2012 y en 2025). La tabla de presencia por año está en `data/interim/medios_ajenos/cuadres_medios_ajenos_inicial.md`.
  2. En 2010-2014 la Consejería tiene artículo 25 propio (programa 4.1.C, servicio 01, concepto 252.04), que no está en este fichero; desde 2015 ese concepto figura en el SAS. La Consejería mantiene en todos los años un artículo 25 menor (servicio 02, asistencia dental y podológica; programas 3.1.P, 4.1.C o 4.1.D según el año). Detalle en `data/interim/medios_ajenos/articulo25_inicial_2010_2025.csv` (`entidad` = `Consejería`).
  3. En 2024 y 2025 el transporte sanitario está en el concepto 227 (subconceptos .23 a .26, artículo 22), fuera del artículo 25: `data/interim/medios_ajenos/sas_transporte_sanitario_art22_inicial.csv`.
- **Generación:** `.venv/bin/python -I scripts/extraccion/medios_ajenos_inicial.py`. Intermedios en `data/interim/medios_ajenos/`: `articulo25_inicial_2010_2025.csv` (una fila por línea con importe: página, servicio, literal, importe en texto y en euros, totales impresos de concepto y artículo), `articulo25_resumen_servicios_2010_2025.csv` (fila del artículo 25 del resumen por servicios) y `cuadres_medios_ajenos_inicial.md`.
- **Cuadres** (2026-11-11): en los 16 años, la suma de subconceptos = total impreso de cada concepto, la suma de conceptos = total impreso del artículo, y el total del artículo = fila «25 . ASISTENCIA SANITARIA CON MEDIOS AJENOS» del resumen por servicios (`20XX-HAC-002` en 2010-2013, `2014-HAC-005`, `2015-HAC-004`, `20XX-HAC-006` en 2016-2025). Sin descuadres.

## `sas_medios_ajenos_2010_2025.csv`

**Crédito inicial, crédito definitivo y obligaciones reconocidas** del artículo 25 «Asistencia sanitaria con medios ajenos» (capítulo II) del **Servicio Andaluz de Salud**, 2010-2025, según la liquidación del presupuesto de gastos del SAS en la Cuenta General (Intervención General). Serie principal de la decisión del usuario de 2026-11-11.

- **Nivel (serie homogénea):** año × concepto de 3 dígitos (250-259, los que existan cada año) y total del artículo (`concepto` = `25`). `programa_codigo`, `programa_nombre` y `servicio` vacíos: total del SAS (todos los programas y servicios). `capitulo` = 2.
- **Fases:** `inicial`, `definitivo` y `obligaciones` (en 2023-2025 el documento las rotula «obligaciones reconocidas netas»). Grado de ejecución = obligaciones / definitivo (no está en este fichero; se calcula en el análisis).
- **Unidades:** euros corrientes, tal como figuran en el documento (2 decimales). Ninguna cifra se ha redondeado ni corregido.
- **Fuentes** (`fuente_id`, `OFICIAL_PRIMARIA`, descarga 2026-11-11): 2010-2019 `20XX-IGJA-012` (apartado 3.2, aplicación/partida); 2020 `2020-IGJA-017`, 2021-2022 `20XX-IGJA-016` (partida); 2023-2025 `20XX-IGJA-013` (II.1.4, resumen por conceptos). Contraste: vinculación `20XX-IGJA-013` (2010-2019) y `20XX-IGJA-010` (2020-2022, descarga 2026-11-10). Ver INC-028.
- **Fiabilidad por fila:** `OFICIAL_PRIMARIA` solo en los conceptos de 2024 y 2025 (el documento da directamente el total del SAS por concepto; se copia la línea). `DERIVADO` en el resto: en 2010-2023 cada concepto es la **suma de las líneas del nivel fino** (aplicación, partida o programa × servicio × bloque) y en todos los años el total del artículo es la suma de sus líneas. La fórmula, el número de líneas sumadas y las páginas van en `notas`.
- **Contexto en `notas`:** 2019 (Ley de julio, INC-002), 2022 (prórroga, INC-001), 2020-2025 (fondos extraordinarios no identificables en este documento, INC-017), 2014 y 2015 (parte del artículo 25 está en el programa 31P; se indican las obligaciones de cada programa).
- **`seccion`:** tal como figura (2010-2014 «16 31», «15 31», «12 31»: consejería + entidad 31; 2015-2025, 4 dígitos). `gobierno_legislatura` vacía (pendiente de `data/equivalencias/legislaturas.csv`).
- **Advertencias de uso:**
  1. Nivel de detalle distinto según el año: subconcepto de 5 dígitos por programa y servicio (2010-2014), por centro gestor y sufijo de posición (2015-2022), concepto por programa y servicio (2023) y solo total del SAS por concepto (2024-2025). La serie por concepto es el único nivel común.
  2. Los conceptos y literales cambian entre años (p. ej. 251 solo en 2010-2014 y 2018-2019; 257 «TRANSPORTE SANITARIO» en 2023 y rotulado «X», con 0 de crédito y 7.661,00 € de obligaciones, en 2024; sin 257 en 2025). Según `sas_medios_ajenos_inicial_2010_2025.csv`, en 2024-2025 el transporte sanitario se presupuesta en el concepto 227 (artículo 22), fuera de este fichero.
  3. En muchas líneas las obligaciones superan al crédito definitivo de la propia línea (el crédito vincula a nivel de artículo, salvo 2015, a nivel de subconcepto). A nivel de vinculación solo ocurre en 2016 (una línea). En 2016 el total del artículo tiene obligaciones (310.187.559,97 €) mayores que el definitivo (310.008.783,03 €).
  4. En 2010-2014 la Consejería también tiene artículo 25 (no incluido aquí; ver la sección anterior).
- **Generación:** `.venv/bin/python -I scripts/extraccion/medios_ajenos_ejecucion.py` (unos 5 minutos; con la variable `CACHE_TEXTO_PDF=<directorio>` guarda el texto extraído y las ejecuciones siguientes tardan segundos). Intermedios en `data/interim/medios_ajenos/`:
  - `ejecucion_lineas_2010_2025.csv`: nivel fino del artículo 25 (1.090 líneas): página, aplicación/partida literal, programa, servicio, centro gestor, sufijo, fondo, código y literal, y cada importe en texto literal y en euros; columna `obligaciones_supera_definitivo`.
  - `ejecucion_vinculacion_2010_2022.csv`: líneas del artículo 25 en el documento de vinculación.
  - `ejecucion_conceptos_2010_2025.csv`: serie por concepto con las 8 columnas de la liquidación, número de líneas sumadas, códigos y literales, y fórmula.
  - `ejecucion_cuadres_lectura.csv`, `ejecucion_comparacion_inicial.csv` y `cuadres_medios_ajenos_ejecucion.md`.
- **Cuadres** (2026-11-11): (0) en los 29 documentos leídos, las 1.406 comprobaciones de lectura cuadran al céntimo (cada «Total capítulo», el total general y, en 2015-2022, el servicio del centro gestor); (a) 2010-2022: la suma del nivel fino coincide con las líneas del artículo 25 de la vinculación en todas las claves y en las 8 columnas; (b) el crédito inicial de la Cuenta General coincide con el del presupuesto (`sas_medios_ajenos_inicial_2010_2025.csv`) en el artículo los 16 años, por concepto los 16 años y por subconcepto en 2010-2022; solo hay códigos con inicial 0 en la Cuenta General que no figuran en el presupuesto (creados por modificaciones); (c) obligaciones > definitivo en 477 de 1.090 líneas (detalle en el `.md`).

## `consejeria_medios_ajenos_2010_2025.csv`

**Crédito inicial, crédito definitivo y obligaciones reconocidas** del artículo 25 «Asistencia sanitaria con medios ajenos» (capítulo II) de la **Consejería competente en sanidad**, 2010-2025, según la liquidación del presupuesto de gastos de la Administración General en la Cuenta General (Intervención General). Junto con `sas_medios_ajenos_2010_2025.csv` forma el perímetro **SAS + Consejería** (decisión del usuario de 2026-11-11, Petición 10).

- **Nivel:** año × concepto de 3 dígitos y total del artículo (`concepto` = `25`). Sin programa ni servicio (total de la sección); los programas y servicios incluidos, con sus obligaciones, van en `notas`.
- **Sección** tal como figura: «16 00» (2010, 2013), «15 00» (2011-2012), «12 00» (2014), 1200 (2015-2018), 1500 (2019-2022), 1300 (2023-2025). Ver `data/equivalencias/secciones.csv`.
- **Fuentes** (`OFICIAL_PRIMARIA`, descarga 2026-11-11): 2010-2019 `20XX-IGJA-014` (apartado 3.2, aplicación/partida); 2020 `2020-IGJA-018`, 2021-2022 `20XX-IGJA-017` (partida); 2023-2024 `20XX-IGJA-014` (II.1.4, resumen por conceptos con sección). Contraste: vinculación `20XX-IGJA-015` (2010-2019).
- **Fiabilidad por fila:** `DERIVADO` (suma de las líneas del nivel fino; fórmula, número de líneas y páginas en `notas`).
- **2025:** el documento de liquidación por conceptos de la Administración General (`2025-IGJA-014`) no desglosa por sección. Crédito inicial tomado del estado de gastos del presupuesto (`2025-HAC-003`, pág. 36, suma de las líneas de la Consejería, `DERIVADO`); **definitivo y obligaciones `NO_DISPONIBLE`** (`importe_eur` vacío). Como contexto, el total de la Administración General en ese documento figura en `data/interim/medios_ajenos/junta_art25_otras_secciones_2010_2025.csv` (artículo 25 = solo el concepto 254: inicial 7.875.000,00 €, definitivo 8.180.839,91 €, obligaciones 5.785.795,72 €; pág. 3). No se ha supuesto que corresponda íntegramente a la Consejería.
- **Contexto en `notas`:** 2010-2014 (la Consejería presupuesta el concepto 252.04 «Con entidades privadas»; desde 2015 figura en el SAS), 2019 (INC-002), 2022 (INC-001). En 2014 el crédito definitivo (69,2 M€) es menor que el inicial (123,7 M€); las modificaciones figuran tal cual en el documento.
- **Advertencias de uso:** desde 2015 el artículo 25 de la Consejería es casi solo el concepto 254 (asistencia con especialistas; servicio 02 en el presupuesto). El artículo 25 de otras secciones de la Junta (importes menores, programas no sanitarios 31N, 31O, 31C, 46B) no se incluye; está en el intermedio citado.
- **Generación:** `.venv/bin/python -I scripts/extraccion/medios_ajenos_ejecucion_consejeria.py` (reutiliza los lectores de `medios_ajenos_ejecucion.py`). Intermedios en `data/interim/medios_ajenos/`: `consejeria_ejecucion_lineas_2010_2025.csv`, `junta_art25_otras_secciones_2010_2025.csv`, `consejeria_ejecucion_cuadres_lectura.csv`, `consejeria_ejecucion_comparacion_inicial.csv`, `cuadres_medios_ajenos_consejeria.md`.
- **Cuadres** (2026-11-11): (0) las comprobaciones de lectura de los 26 documentos cuadran al céntimo (cada «Total capítulo» y el total general; en 2025, la fila «TOTAL PRESUPUESTOS»); (a) 2010-2019: el total del artículo 25 de la sección coincide con la vinculación en las 8 columnas; (b) el crédito inicial coincide con el del presupuesto por artículo y concepto en 2010-2024; (c) 1 de 182 líneas con obligaciones > definitivo.

## `metricas_medios_ajenos_2010_2025.csv`

Métricas del artículo 25 «Asistencia sanitaria con medios ajenos» (SAS + Consejería), 2010-2025, para el informe `analisis/2026-11-11_medios_ajenos_2010_2025.md`. Todo `DERIVADO` de `sas_medios_ajenos_2010_2025.csv`, `consejeria_medios_ajenos_2010_2025.csv`, `sas_medios_ajenos_inicial_2010_2025.csv`, `metricas_sanidad_2010_2025.csv` (denominadores) y las series del INE (IPC de Andalucía, padrón).

- **Formato:** largo, `serie` × `año` × `fase` (`inicial`, `definitivo`, `obligaciones`). Columnas: `eur_corrientes`, `eur_constantes_2025`, `eur_hab_corrientes`, `eur_hab_constantes_2025`, `pct_cap2_sanidad_programas`, `pct_total_junta`, `grado_ejecucion_pct`, `poblacion`, `factor_ipc_2025`, `fuente_id`, `fiabilidad`, `notas`.
- **Series:** `art25_sin257` (serie principal: SAS + Consejería, con el programa 31P, sin el concepto 257 de transporte; decisiones del usuario de 2026-11-11), `art25_completo` (con el 257), por entidad (`sas_*`, `consejeria_*`), programa 31P, `art25_sin257_sin31P_consejeria` (lectura alternativa con el perímetro `sanidad_programas`), por concepto (`concepto_25x`) y transporte.
- **Grado de ejecución:** obligaciones / definitivo, solo a nivel del artículo completo (nivel de vinculación del crédito).
- **`NO_DISPONIBLE`:** importe vacío y motivo en `notas` (p. ej. total 2025 en definitivo y obligaciones, INC-030; transporte 2024-2025 en definitivo y obligaciones; capítulo II de `sanidad_programas` 2010-2014, INC-019).
- **Generación:** `.venv/bin/python -I scripts/analisis/medios_ajenos.py` (con 5 comprobaciones que detienen el script si no cuadran). Tablas del informe: `scripts/analisis/tablas_informe_medios_ajenos.py`.
