# Incidencias de datos

Registro de huecos, discrepancias entre fuentes, años prorrogados, cambios de estructura y problemas de descarga. Redacción descriptiva, sin valoraciones.

Formato de cada incidencia:

```
### INC-NNN · <título breve>
- Fecha de registro:
- Años afectados:
- Tipo: descarga | prórroga | cambio_estructura | discrepancia | hueco | criterio_contable | otro
- Descripción:
- URL probadas / documentos:
- Estado: abierta | resuelta | aceptada (no resoluble)
- Tratamiento aplicado:
```

---

## Años con presupuesto prorrogado

Comprobado a partir del número y la fecha de la Ley (o del decreto de prórroga) leídos en el propio documento descargado.

| Ejercicio | Norma | ¿Prorrogado a 1 de enero? | Fuente | Estado |
|---|---|---|---|---|
| 2010 | Ley del Presupuesto 2010 (número y fecha no legibles en la copia de Hacienda) | sin confirmar | 2010-HAC-L01 | pendiente (INC-003) |
| 2011 | ídem | sin confirmar | 2011-HAC-L01 | pendiente (INC-003) |
| 2012 | ídem | sin confirmar | 2012-HAC-L01 | pendiente (INC-003) |
| 2013 | ídem | sin confirmar | 2013-HAC-L01 | pendiente (INC-003) |
| 2014 | Ley 7/2013, de 23 de diciembre | No | 2014-HAC-L01 | comprobado |
| 2015 | Ley 6/2014, de 30 de diciembre | No | 2015-HAC-L01 | comprobado |
| 2016 | Ley del Presupuesto 2016 (número y fecha no legibles en la copia de Hacienda) | sin confirmar | 2016-HAC-L01 | pendiente (INC-003) |
| 2017 | ídem | sin confirmar | 2017-HAC-L01 | pendiente (INC-003) |
| 2018 | Ley 5/2017, de 5 de diciembre | No | 2018-BOJA-001 | comprobado |
| 2019 | Ley 3/2019, de 22 de julio (BOJA nº 141, 24/07/2019) | **Sí, hasta la entrada en vigor de la Ley 3/2019** | 2019-HAC-L01 | comprobado; decreto de prórroga no descargado (INC-002) |
| 2020 | Ley 6/2019, de 19 de diciembre | No | 2020-BOJA-001 | comprobado |
| 2021 | Ley 3/2020, de 28 de diciembre | No | 2021-BOJA-001 | comprobado |
| 2022 | Decreto 286/2021, de 28 de diciembre (condiciones de la prórroga del Presupuesto para 2022) | **Sí, todo el ejercicio** | 2022-BOJA-001 | comprobado (INC-001) |
| 2023 | Ley 1/2022, de 27 de diciembre | No | 2023-BOJA-001 | comprobado |
| 2024 | Ley 12/2023, de 26 de diciembre | No | 2024-BOJA-001 | comprobado |
| 2025 | Ley 7/2024, de 23 de diciembre | No | 2025-BOJA-001 | comprobado |

## Cambios de estructura (secciones y programas)

Ver `data/equivalencias/secciones.csv`. Resumen de los códigos leídos en la Cuenta General:

| Periodo | Consejería (código · denominación) | SAS (código) |
|---|---|---|
| 2010 | 16 · Consejería de Salud | sin sección propia en los resúmenes (INC-005) |
| 2011-2012 | 15 · Consejería de Salud | ídem |
| 2013 | 16 · C. de Salud y Bienestar Social | ídem |
| 2014 | 12 · C. Igualdad, Salud y Políticas Sociales | ídem |
| 2015 | 1200 · C. Igualdad, Salud y Políticas Sociales | 1231 |
| 2016-2018 | 1200 · Consejería de Salud | 1231 |
| 2019-2022 | 1500 · Consejería de Salud y Familias | 1531 |
| 2023-2025 | 1300 · Consejería de Salud y Consumo | 1331 |

Los cambios de denominación implican cambios de competencias incluidas en la sección (p. ej. igualdad, políticas sociales, familias, consumo). Cualquier comparación de la sección completa entre años debe tenerlo en cuenta; la comparación por programas requiere la tabla `programas.csv` (pendiente).

## Incidencias

### INC-001 · Ejercicio 2022 con presupuesto prorrogado
- Fecha de registro: 2026-11-10
- Años afectados: 2022
- Tipo: prórroga
- Descripción: no hubo Ley de Presupuesto para 2022. El Decreto 286/2021, de 28 de diciembre (BOJA nº 251, 31/12/2021), establece las condiciones de la prórroga del Presupuesto 2021. La web de Hacienda publica la documentación de la prórroga ("Prórroga del Presupuesto de la Comunidad Autónoma de Andalucía 2022") con los mismos estados que un presupuesto ordinario (ruta `/export/prorroga_presup2022/`).
- Documentos: 2022-BOJA-001, 2022-HAC-001 a 006.
- Estado: aceptada.
- Tratamiento aplicado: el `crédito inicial` de 2022 se toma de la documentación oficial de la prórroga (no copiando 2021) y se marca en `notas`. Confirmado por el usuario el 2026-11-10.

### INC-002 · Ejercicio 2019: prórroga hasta julio
- Fecha de registro: 2026-11-10
- Años afectados: 2019
- Tipo: prórroga
- Descripción: la Ley 3/2019, de 22 de julio, del Presupuesto para 2019 se publicó en BOJA nº 141 el 24/07/2019. Entre el 1 de enero y su entrada en vigor rigió el presupuesto prorrogado de 2018. El crédito inicial que figura en la Cuenta General 2019 (2019-IGJA-001) corresponde a la Ley aprobada; queda por comprobar cómo se registran en la liquidación los meses de prórroga.
- Documentos: 2019-HAC-L01. **No descargado:** decreto u orden de prórroga para 2019.
- Estado: abierta.
- Tratamiento aplicado: pendiente de localizar en BOJA la norma de prórroga de 2019.

### INC-003 · Leyes 2010-2013, 2016 y 2017: falta número y fecha
- Fecha de registro: 2026-11-10
- Años afectados: 2010, 2011, 2012, 2013, 2016, 2017
- Tipo: hueco
- Descripción: para estos años la web de Hacienda ofrece una copia del texto de la Ley ("Documento completo") en la que no se ha podido leer el número ni la fecha de la Ley. Por tanto no se ha comprobado documentalmente si hubo prórroga a 1 de enero.
- URL: ver `data/catalogo_fuentes.csv` (ids `20XX-HAC-L01`).
- Estado: abierta.
- Tratamiento aplicado: descargar las versiones publicadas en BOJA y completar la tabla de prórrogas. Hasta entonces, "sin confirmar".

### INC-004 · Cuenta General: rutas y estructura distintas según el ejercicio
- Fecha de registro: 2026-11-10
- Años afectados: 2010-2025
- Tipo: cambio_estructura / descarga
- Descripción:
  - 2010-2021 y 2023-2025: ruta `…/fiscalizacion/rendicion/cuentaAAAA/descargas/…`.
  - 2022: la ruta anterior devuelve 404; los ficheros están en `…/fiscalizacion/rendicion/junta/docs/content/ja/` (Junta) y `…/content/aa/sas/` (SAS).
  - 2025: la página de menú `cuenta2025/cuenta/menu.htm` devuelve 404, pero `cuenta2025/cuenta/junta.htm`, `sas.htm` y los PDF están accesibles. El contenido de los PDF indica "EJERCICIO: 2025".
  - Desde 2023 (Orden de 21 de diciembre de 2022 sobre la formación de la Cuenta General) cambia la numeración: la liquidación del presupuesto de **gastos** pasa a ser el apartado **2-1** y el **3-1 corresponde a ingresos** (en 2010-2022, 3-1 era gastos). Cambian también las columnas: 2023-2025 muestran "Créditos presupuestarios" en lugar de inicial/modificaciones/definitivo en columnas separadas (pendiente de revisar en extracción).
  - El detalle por partida (`JUNTA3-1-6`, `SAS3-1-6`) solo se ha encontrado para 2020-2022.
- Estado: aceptada (documentada).
- Tratamiento aplicado: manifiestos de descarga con la ruta correcta de cada año; las URL probadas sin éxito se recogen aquí.

### INC-005 · 2010-2014: el SAS no aparece como sección propia en los resúmenes de liquidación
- Fecha de registro: 2026-11-10
- Años afectados: 2010-2014
- Tipo: cambio_estructura
- Descripción: en los ficheros de liquidación del SAS de 2010-2014 (`SAS3-1-1`), la línea de sección muestra el código y nombre de la Consejería (16, 15, 16, 12), con importes distintos de los que figuran para esa misma sección en el fichero de la Junta (`JUNTA3-1-1`). Ejemplo 2010: crédito inicial 9.695.608.618,00 € (Junta, sección 16) frente a 8.989.188.159,00 € (fichero del SAS, sección 16). A partir de 2015 el SAS tiene código propio (1231).
- Documentos: 2010-IGJA-001/005 … 2014-IGJA-001/005.
- Estado: abierta.
- Tratamiento aplicado: pendiente de determinar, con la documentación de cada año, qué perímetro recoge cada cifra y si existen transferencias internas Consejería→SAS que deban consolidarse (relacionado con la pregunta abierta sobre doble cómputo). No se suman Consejería y SAS hasta resolverlo. Criterio confirmado (2026-11-10): la serie larga se homogeneiza por programas sanitarios equivalentes.

### INC-006 · Discrepancias en el crédito definitivo del SAS entre la web del SAS y la Cuenta General
- Fecha de registro: 2026-11-10 (ampliada el mismo día con 2023 y 2024)
- Años afectados: 2022, 2023, 2024
- Tipo: discrepancia
- Descripción: la web de estadísticas del SAS ("Datos básicos económicos 2019-2024", SAS-WEB-001) y la Cuenta General dan el siguiente crédito definitivo del SAS (millones €):

  | Año | Web del SAS | Cuenta General | Diferencia |
  |---|---|---|---|
  | 2020 | 11.635,87 | 11.635,87 | 0,00 |
  | 2021 | 11.790,49 | 11.790,49 | 0,00 |
  | 2022 | 12.740,15 | 12.740,54 | −0,39 |
  | 2023 | 14.145,27 | 14.145,03 | +0,24 |
  | 2024 | 15.033,10 | 15.033,76 | −0,66 |

  La cifra de la Cuenta General está comprobada contra tres documentos de la propia Cuenta General (detalle por programas, resumen por servicios y, en 2020-2022, resumen por secciones). Generado por `scripts/validacion/validar_liquidacion.py` (V7).
- Estado: abierta (no resoluble con la documentación descargada).
- Tratamiento aplicado: se muestran ambas cifras cuando se cite la web del SAS; la serie principal usa la Cuenta General (`OFICIAL_PRIMARIA`, documento contable de cierre).

### INC-007 · Población: la tabla 2853 del INE termina en 2021; padrón frente a Censo anual
- Fecha de registro: 2026-11-10
- Años afectados: 2021-2025
- Tipo: hueco / discrepancia
- Descripción:
  - La tabla 2853 (padrón por CCAA) descargada termina en 2021. Para 2022-2025 se dispone del fichero oficial municipal del padrón (`pobmun.zip`, INE-POB-002); la suma de los 785 municipios andaluces reproduce exactamente la cifra de la tabla 2853 en 2021 (8.472.407) y la usada por la web del SAS para 2022 (8.500.187).
  - El Censo anual de población (tabla 67988, INE-POB-003) da cifras distintas para los mismos años: 2021 → 8.484.804 (censo) frente a 8.472.407 (padrón); 2025 → 8.676.713 frente a 8.666.412.
- Estado: resuelta (decisión del usuario, 2026-11-10).
- Tratamiento aplicado: se usa el padrón en toda la serie 2010-2025; el censo no se mezcla.

### INC-008 · IPC: no hay media anual oficial por CCAA en la tabla descargada
- Fecha de registro: 2026-11-10
- Años afectados: 2010-2025
- Tipo: otro
- Descripción: la tabla 50913 (IPC base 2021) es mensual y llega a 2025M12. La tabla de medias anuales consultada (50934) solo contiene datos nacionales. La media anual de Andalucía se calculará como media aritmética de los 12 índices mensuales (`DERIVADO`).
- Estado: resuelta (decisión del usuario, 2026-11-10): IPC de Andalucía, media anual calculada, año base 2025.

### INC-009 · Web del SAS: las URL de estadísticas cambian de contenido
- Fecha de registro: 2026-11-10
- Tipo: descarga
- Descripción: la URL `…/archivo-estadisticas/presupuesto-0` aparecía en el buscador como "Distribución económica. Presupuesto inicial por capítulos. 2020-2024" y al descargarla su título era "Distribución funcional. Presupuesto por programas. 2024". Las direcciones con sufijo numérico no son estables.
- Estado: aceptada.
- Tratamiento aplicado: se guarda la página HTML tal cual con su `sha256`; en el catálogo se anota el título real.

### INC-010 · Portal de Presupuestos: nombres de fichero no predecibles
- Fecha de registro: 2026-11-10
- Años afectados: 2010-2025
- Tipo: descarga
- Descripción: cada ejercicio usa rutas y numeraciones distintas (p. ej. la sección de Salud es `tomo12-5-14` en 2020-2022 y `tomo12-5-11` en 2023-2025; el SAS es `estadoIII-a-6`, `-a-7` o `-a-4`). En 2010-2013 solo hay libros completos (hasta 1.849 páginas). Algunos ficheros de 2020 y 2019 están en `/export/drupaljda/`.
- Estado: aceptada.
- Tratamiento aplicado: las URL se toman siempre de la página oficial de cada año (no se construyen por patrón) y quedan en los manifiestos de `scripts/descarga/`.

### INC-011 · Liquidación de la Consejería por capítulos 2010-2019
- Fecha de registro: 2026-11-10
- Años afectados: 2010-2019
- Tipo: hueco
- Descripción: para 2010-2019 se han descargado los resúmenes de liquidación de la Junta por secciones, capítulos (total Junta), servicios y programas, pero no un estado que cruce **sección × capítulo** para la Consejería (el detalle por partida `JUNTA3-1-6` solo se ha encontrado para 2020-2022). Para el SAS sí hay resumen por capítulos en todos los años.
- Estado: abierta.
- Tratamiento aplicado: buscar en la Cuenta General otros apartados (p. ej. desarrollo por clasificación funcional) o en la Cámara de Cuentas / Ministerio de Hacienda.

### INC-012 · Cuenta General 2023 del SAS: página sin rotular
- Fecha de registro: 2026-11-10
- Años afectados: 2023
- Tipo: otro
- Descripción: la página 6 de `SAS2-1-2.pdf` 2023 (2023-IGJA-005) muestra "Sección:" y "Clasif.funcional:" en blanco y no incluye la fila del capítulo IX. Sus totales cuadran con el resto del documento.
- Tratamiento aplicado: se identifica como programa **41G (Prestaciones complementarias y farmacéuticas)** porque su crédito inicial (2.566.551.286,00 €) es idéntico al del programa 41G del presupuesto inicial 2023 del SAS (2023-HAC-005, págs. 57-60) y porque ocupa la misma posición en 2024 y 2025, donde sí está rotulada. El capítulo IX se toma como 0 (los totales impresos de la página cuadran sin él). Queda anotado en la columna `notas`.
- Estado: resuelta.

### INC-013 · Obligaciones reconocidas mayores que el crédito definitivo en algunas celdas programa × capítulo
- Fecha de registro: 2026-11-10
- Años afectados: 2020-2025 (26 casos)
- Tipo: criterio_contable
- Descripción: en 26 combinaciones programa × capítulo las obligaciones superan el crédito definitivo (p. ej. SAS, programa 41B, capítulo I, todos los años). Afecta sobre todo al capítulo I (personal). La lista completa está en `data/interim/validacion_liquidacion.md` (V5).
- Explicación descriptiva: los créditos se vinculan jurídicamente a un nivel de agregación superior al de programa × capítulo, por lo que una celda concreta puede superar su crédito si el conjunto vinculado no lo supera. Pendiente de citar la norma concreta de vinculación de cada Ley de Presupuesto.
- Estado: aceptada.
- Tratamiento aplicado: los datos se mantienen tal cual. En esas celdas el grado de ejecución supera el 100 %, y se debe indicar junto al dato.

### INC-014 · Cuenta General 2025: el "resumen por capítulo del SAS" publicado contiene datos de otra entidad
- Fecha de registro: 2026-11-10
- Años afectados: 2025
- Tipo: descarga / discrepancia
- Descripción: el fichero enlazado en la página del SAS de la Cuenta General 2025 como "II.1.1. Resumen por Capítulo" (`…/cuenta2025/descargas/ooaa/sas/SAS2-1-1.pdf`, 2025-IGJA-004) no identifica la entidad y totaliza 42.155.156,00 € de crédito inicial. El SAS 2025 suma 14.872.995.026,00 €. Esos totales coinciden con los del resumen por capítulo del Patronato de la Alhambra y Generalife de la misma Cuenta General (`…/ooaa/pag/PAG2-1-1.pdf`), aunque los dos ficheros no son idénticos byte a byte.
- Estado: abierta. Se podría comunicar a la Intervención General.
- Tratamiento aplicado: el fichero se conserva en `data/raw/` sin modificar (es el original publicado), pero no se usa como dato del SAS. El total del SAS 2025 se valida contra el resumen por servicios del SAS (2025-IGJA-006), que cuadra al céntimo (V2b).

### INC-015 · Transferencias de la Consejería: cambio de programa en 2023 y base para el total consolidado
- Fecha de registro: 2026-11-10
- Años afectados: 2020-2025
- Tipo: cambio_estructura
- Descripción: entre el 98,4 % y el 98,8 % del crédito inicial de la Consejería corresponde a los capítulos IV y VII (transferencias). La mayor partida está en el programa **41H** en 2020-2022 (capítulo IV: 9.867,7 M€ en 2020) y en el programa **12S** en 2023-2025 (capítulo IV: 13.036,7 M€ en 2023). Por tanto, la comparación por programas entre 2022 y 2023 requiere la tabla de equivalencias de programas.
- Estado: resuelta (2026-11-10).
- Tratamiento aplicado: se usa la **liquidación consolidada oficial** de la Cuenta General (10.5 en 2020-2022; 7.1.2 en 2023-2025), en la que la Intervención General elimina las transferencias internas. Se ha verificado de forma independiente en 2020-2022, partida a partida, que Consejería sin consolidar − transferencias a entidades del consolidado (artículos 41 y 71) = Consejería consolidada, al céntimo (`scripts/validacion/validar_consolidacion.py`). La codificación de esos conceptos cambia en 2021: 410→411 (SAS), 412→414 (Consorcio Sanitario Público del Aljarafe), 413 (agencias sanitarias).

### INC-016 · Agencias públicas empresariales sanitarias: cambio de perímetro 2020-2022
- Fecha de registro: 2026-11-10
- Años afectados: 2020-2022
- Tipo: cambio_estructura
- Descripción:
  - 2020: la Consejería transfiere fondos a la A.P.E. Sanitaria Costa del Sol, a la Empresa Pública de Emergencias Sanitarias y a las A.P.E. Sanitarias Hospital de Poniente, Hospital Alto Guadalquivir y Bajo Guadalquivir (658,6 M€ de crédito inicial en el capítulo IV, 2020-HAC-003, pág. 22). Las agencias no forman parte del consolidado.
  - 2021: las agencias figuran como secciones propias en el consolidado (1551 a 1555; 740,9 M€ de obligaciones) y la transferencia de la Consejería (concepto 413) se elimina al consolidar.
  - 2022: sus secciones figuran con 0 €; la actividad está integrada en el SAS.
  - Normativa: Decreto 193/2021, de 6 de julio (asunción por el SAS de los fines de las agencias; 2021-BOJA-N01); Decretos 290/2021 y 294/2021, de 28 de diciembre (disolución; 2021-BOJA-N02 y N03). Los Decretos 291 a 293/2021 están pendientes de descargar.
  - Consecuencia: el total "Consejería + SAS" del consolidado de 2021 deja fuera 740,9 M€ de gasto sanitario.
- Estado: resuelta.
- Tratamiento aplicado: perímetro `sanidad_consolidado` con todas las entidades sanitarias con sección propia (decisión del usuario, 2026-11-10; `data/equivalencias/perimetro_sanidad.csv`). El reparto por entidad y por capítulo sí cambia entre 2020 y 2022, y se indica junto a los datos.

### INC-017 · Fondos extraordinarios (COVID-19, REACT-UE, MRR)
- Fecha de registro: 2026-11-10 (actualizada el mismo día)
- Años afectados: 2020-2025
- Tipo: hueco
- Descripción: la decisión del usuario es publicar la serie con los fondos extraordinarios y, cuando sean identificables, también sin ellos.
- Estado: **resuelta parcialmente** (2026-11-10).
- Tratamiento aplicado:
  - Se identifican las obligaciones del SAS financiadas con COVID-19 (código S0691), REACT-UE y MRR (códigos MR…), según las desviaciones de financiación de la Cuenta General (2020-2022) y la Memoria de las cuentas anuales del SAS (2023-2025).
  - La serie sin ellos está en `data/processed/sanidad_sin_fondos_extraordinarios_2010_2025.csv` (fase de obligaciones).
  - Quedan sin identificar el Fondo COVID-19 no finalista (INC-021) y los fondos ejecutados por la Consejería fuera del SAS (INC-023).

### INC-018 · Transferencias de la Consejería al SAS: ejecución y medida para eliminar el doble cómputo (2010-2019)
- Fecha de registro: 2026-11-10
- Años afectados: 2010-2019
- Tipo: criterio_contable
- Descripción:
  - Crédito inicial y definitivo: las previsiones del SAS por transferencias de la Junta (conceptos de ingreso 450 y 750) coinciden al céntimo con lo que elimina la consolidación oficial en 2010-2013 y 2016-2019.
  - Obligaciones: en 2010-2016 el programa 41H (Planificación y Financiación) de la Consejería tiene remanentes de crédito (de 83,8 a 552,4 M€ al año). En 2017-2019 los remanentes son inferiores a 0,3 M€.
  - En 2010-2016 la eliminación oficial coincide con los derechos reconocidos netos del SAS; en 2017-2019, con la previsión definitiva. 2014 y 2015 tienen diferencias pequeñas (−0,07 y 42,0 M€) atribuibles a transferencias a otras entidades consolidadas desde programas no sanitarios.
  - Datos: `data/interim/transferencias_junta_sas_2010_2022.csv`.
- Estado: aceptada.
- Tratamiento aplicado: la serie por programas usa, en cada periodo, la medida que reproduce la eliminación oficial (`scripts/analisis/sanidad_programas.py`).

### INC-019 · Serie larga: limitaciones por capítulo y del programa de Dirección y Servicios Generales
- Fecha de registro: 2026-11-10
- Años afectados: 2010-2018
- Tipo: hueco / cambio_estructura
- Descripción:
  - El resumen por programas de la Cuenta General de 2010-2014 no desglosa capítulos. Por eso en 2010-2014 solo se publican el total y el capítulo VI.
  - El capítulo VI de 2010-2014 se toma del consolidado de la sección, que incluye la inversión de programas no sanitarios de la Consejería: entre 2,2 y 18,2 M€ (inversión de toda la Consejería sin el SAS, según el año y la fase).
  - El programa de Dirección y Servicios Generales (41A) se denomina "D.S.G. de Salud y Bienestar Social" (2013) y "D.S.G. Igualdad, Salud y Políticas Sociales" (2014-2018). En esos años da servicio también a áreas no sanitarias. Se incluye completo, porque el documento no permite repartirlo.
  - En 2010-2012 la sección de la Consejería tiene entre 30,6 y 31,9 M€ anuales (obligaciones) en programas no sanitarios no identificados individualmente; quedan fuera del perímetro.
- Estado: aceptada (no resoluble con los documentos disponibles).
- Tratamiento aplicado: notas en tablas y gráficos.

### INC-020 · 2012: diferencia entre crédito definitivo e inicial
- Fecha de registro: 2026-11-10
- Años afectados: 2012
- Tipo: otro
- Descripción: en el perímetro `sanidad_programas`, el crédito definitivo de 2012 (11.021,0 M€) supera al inicial (9.360,1 M€) en 1.660,9 M€ (+17,7 %), la mayor diferencia de la serie 2010-2025.
- Estado: abierta.
- Tratamiento aplicado: pendiente de analizar el estado de modificaciones de crédito de la Cuenta General 2012 (apartado 2) para documentar, sin interpretarlas, las modificaciones que lo explican.

### INC-021 · Fondo COVID-19 del Estado (2020): no identificable en la ejecución
- Fecha de registro: 2026-11-10
- Años afectados: 2020
- Tipo: hueco
- Descripción:
  - En la liquidación de ingresos de la Junta de 2020 (2020-IGJA-016) ningún concepto incluye "COVID" en su denominación. El concepto 401 "Otras transferencias" tiene una previsión inicial de 436,0 M€, modificaciones de +1.439,8 M€ y derechos reconocidos netos de 2.596,3 M€, pero el documento no detalla su composición.
  - En el gasto, el único código COVID del ámbito sanitario es el S0691 "Emergencia de salud pública COVID-19": 44,2 M€ de obligaciones del SAS en 2020.
  - Un fondo no finalista no se vincula a gastos concretos, por lo que no puede seguirse su destino en la ejecución presupuestaria.
- Estado: aceptada (no resoluble con la ejecución presupuestaria).
- Tratamiento aplicado: la serie "sin fondos extraordinarios" no lo descuenta, y se indica junto a los datos de 2020. Una posible fuente de contraste es la información del Ministerio de Hacienda sobre el reparto del Fondo COVID-19.

### INC-022 · Memoria de las cuentas del SAS 2024: el detalle de finalistas no suma su total
- Fecha de registro: 2026-11-10
- Años afectados: 2024
- Tipo: discrepancia
- Descripción: en el cuadro 6.1 de la Memoria 2024 (2024-IGJA-011), las filas de detalle de "Gastos financiados con ingresos finalistas" suman 153.338,65 miles € de obligaciones. El total del bloque es 153.761,04 miles €, que coincide con el servicio 18 del resumen por servicios (153.761.038,14 €). La diferencia es de 422,39 miles €.
- Estado: abierta (incoherencia del documento oficial).
- Tratamiento aplicado: se toman las filas publicadas. El MRR del SAS en 2024 se da como horquilla: 64,68 M€ (filas MR publicadas) a 65,10 M€ (si la diferencia correspondiera a un código MR).

### INC-023 · Fondos extraordinarios de la Administración General: no se restan, por riesgo de doble cómputo
- Fecha de registro: 2026-11-10
- Años afectados: 2021-2025
- Tipo: criterio_contable
- Descripción:
  - La Administración General registra obligaciones con códigos MRR sanitarios (MR0618…, MR04110302): 76,6 M€ (2022), 145,1 M€ (2023) y 24,3 M€ (2025). En 2021 y 2024 solo se publica la desviación.
  - Parte de esas obligaciones son transferencias al SAS, que el SAS registra con desfase temporal. Ejemplo INVEAT: 75,0 M€ de obligaciones de la Junta en 2022 frente a 2,2 M€ (2022) y 76,3 M€ (2023) de derechos del SAS.
  - El gasto directo de la Consejería con fondos europeos en programas sanitarios (capítulos I, II y VI) es de 2,1 M€ (2020), 2,0 M€ (2021) y 3,4 M€ (2022).
  - Pendiente de verificar: las obligaciones INVEAT de la Administración General en 2023 (140,51 M€) coinciden con sus derechos de 2022 (140,51 M€). Puede tratarse de cifras acumuladas.
- Estado: aceptada.
- Tratamiento aplicado: solo se descuentan los fondos ejecutados por el SAS. Lo de la Administración General figura como contexto en el informe.

### INC-024 · 2025: denominación de la consejería de adscripción del SAS en su Memoria
- Fecha de registro: 2026-11-10
- Años afectados: 2025 y siguientes
- Tipo: cambio_estructura
- Descripción: la cabecera de la Memoria de las cuentas anuales del SAS de 2025 (2025-IGJA-011), formulada en 2026, cita la "Consejería de Presidencia, Sanidad y Emergencias". La liquidación del presupuesto de 2025 sigue usando la sección 1300 "Consejería de Salud y Consumo".
- Estado: abierta.
- Tratamiento aplicado: sin efecto en 2010-2025. Revisar la estructura de secciones cuando se incorpore el ejercicio 2026.

### INC-025 · Memorias de programas: 2022 sin memoria publicada y programas que cambian de sección
- Fecha de registro: 2026-11-11
- Años afectados: 2020, 2021, 2022, 2025
- Tipo: hueco
- Descripción:
  - 2022 (prórroga del Presupuesto 2021): la página oficial `https://www.juntadeandalucia.es/organismos/economiahaciendayfondoseuropeos/areas/presupuestos/anteriores/paginas/proyecto-presupuesto-2022.html` (HTTP 200, consultada 2026-11-11) enlaza el estado de gastos, el Decreto de prórroga, el anexo de inversiones y el libro de entidades instrumentales, pero ningún documento "Memoria". Memoria 2022: `NO_DISPONIBLE`.
  - La memoria 2021 de la Consejería de Salud y Familias (2021-HAC-007) no tiene apartado propio del programa 41C; en la pág. impresa 590 indica que el programa 41H "recoge ahora también como objetivo lo que recogía en años anteriores el Programa 41C". Por ello se ha descargado también la memoria 2020 de la Consejería (2020-HAC-007), que sí tiene apartado del 41C.
  - La memoria 2025 de la Consejería de Salud y Consumo (2025-HAC-007, pág. impresa 343) indica la "desaparición del Programa 41K" en la Consejería "para pasar a presupuestarse" en el Instituto de Salud de Andalucía (sección 13.32). Se ha descargado la memoria de ese Instituto (2025-HAC-009), donde el 41K figura como "Generación y Gestión del Conocimiento en Salud y Salud Pública".
- Estado: aceptada.
- Tratamiento aplicado: memorias registradas en `data/catalogo_fuentes.csv` con `tipo_documento` = `memoria` (valor añadido a `scripts/descarga/descargar.py`); URL en `scripts/descarga/manifiesto_memorias.csv`.

### INC-026 · Programa 41K en 2025: la memoria lo sitúa en el Instituto de Salud de Andalucía y la liquidación en la Consejería
- Fecha de registro: 2026-11-11
- Años afectados: 2025
- Tipo: discrepancia
- Descripción:
  - Memoria del Presupuesto 2025 de la Consejería de Salud y Consumo (2025-HAC-007, pág. impresa 343): "la desaparición del Programa 41K, Política de Calidad y Modernización, en el Presupuesto 2025 de la Consejería, para pasar a presupuestarse en ese Instituto".
  - Liquidación 2025 de la Cuenta General (2025-IGJA-002, pág. 45): el programa 41K figura en la sección 1300 (Consejería) con 27.167.593,59 € de obligaciones reconocidas (capítulos 1, 2, 4 y 7).
  - Consolidado 2025 (2025-IGJA-009): el programa 41K de la sección 1332 (Instituto de Salud de Andalucía) figura con 0,00 € de obligaciones en todos los capítulos.
  - Presupuestado frente a ejecutado, 41K 2025: en la Consejería, crédito inicial 0,00 €, definitivo 34.491.348,00 € y obligaciones 27.167.593,59 €. En el Instituto, crédito inicial 57.954.419,00 € (coincide con su memoria, 2025-HAC-009), definitivo 11.937.085,00 € y obligaciones 0,00 €.
- Estado: abierta.
- Tratamiento aplicado: se muestran las cifras de la liquidación tal como figuran (41K en la Consejería). La web explica el programa con la memoria y advierte de esta discrepancia. Sin interpretar la causa.

