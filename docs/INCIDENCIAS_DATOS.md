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
| 2026 | Ley 8/2025, de 22 de diciembre (BOJA nº 251, 31/12/2025) | No | 2026-BOJA-001 | comprobado |
| 2027 | Proyecto de Ley del Presupuesto 2027 (presentado en octubre de 2026; no aprobado a 2026-11-11) | sin determinar | 2027-HAC-001 | pendiente de aprobación |

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


### INC-027 · EGSP: la metodología no contiene una definición expresa de la partida «Conciertos» de la clasificación económico-presupuestaria
- Fecha de registro: 2026-11-11
- Años afectados: 2002-2024 (serie EGSP de devengo)
- Tipo: hueco
- Descripción:
  - La «Metodología. Estadística de Gasto Sanitario Público 2024» (MSAN-EGSP-004, 21 págs.) define la remuneración del personal, el consumo intermedio y el consumo de capital fijo (apartado III.1, págs. 13-14) y las funciones (apartado III.2, págs. 14-16), pero no incluye un párrafo de definición de la categoría económica «Conciertos». La palabra «conciertos» aparece en la delimitación del ámbito funcional (pág. 6) y en las definiciones funcionales de «Servicios primarios de salud» y «Servicios especializados» (pág. 15).
  - Textos oficiales más próximos localizados: «Principales resultados» EGSP 2024 (MSAN-EGSP-003, pág. 5 del PDF / 3 impresa: «los gastos en compras al sector privado a través de conciertos») y «Diferentes series de gasto sanitario» (MSAN-EGSP-006, pág. 3: «Solo aquellos provistos mediante la compra de servicios a agentes privados (conciertos) están debidamente tipificados»).
  - Las tablas de la EGSP se publican en una única edición vigente (serie 2002-2024, edición mayo 2026); los años 2023 y 2024 figuran como «Cifras provisionales».
- URL probadas / documentos:
  - https://www.sanidad.gob.es/estadEstudios/estadisticas/inforRecopilaciones/gastoSanitario2005/home.htm (HTTP 200)
  - https://www.sanidad.gob.es/estadEstudios/estadisticas/inforRecopilaciones/gastoSanitario2005/tablasEstEGSP/Metodologia_general.pdf (HTTP 200)
  - https://www.sanidad.gob.es/estadEstudios/estadisticas/docs/GastoSanitarioPublico_NotaMetodologica.pdf (HTTP 200; sin definiciones de partidas)
  - https://www.sanidad.gob.es/estadEstudios/estadisticas/docs/EGSP2008/egspMetodologiaGeneral.pdf (HTTP 200; es la metodología de la edición 2023, mismo texto sobre conciertos; no descargada a data/raw)
  - https://www.sanidad.gob.es/estadEstudios/estadisticas/sisInfSanSNS/pdf/IGTGS2005.pdf y .../grupodeTrabajoSanitario2007.pdf (HTTP 200; informes del Grupo de Trabajo de la Conferencia de Presidentes; tratan los conciertos de 1999-2005 sin definirlos; no descargados a data/raw)
  - https://www.sanidad.gob.es/estadEstudios/estadisticas/inforRecopilaciones/gastoSanitario.htm (HTTP 404)
- Estado: abierta.
- Tratamiento aplicado: definición expresa de la partida «Conciertos» = `NO_DISPONIBLE`. Se citan literalmente los textos oficiales más próximos indicados arriba, con su página, al documentar las diferencias con el artículo 25 del SAS.


### INC-028 · Ejecución del SAS por clasificación económica (artículo 25): documentos y nivel de detalle según el ejercicio
- Fecha de registro: 2026-11-11
- Años afectados: 2010-2025
- Tipo: cambio_estructura / descarga
- Descripción:
  - Páginas oficiales del SAS en la Cuenta General consultadas el 2026-11-11 (HTTP 200): `…/rendicion/cuenta2010/sas.htm`, `…/cuenta2011/sas.htm`, `…/cuentaAAAA/cuenta/sas.htm` (2012-2021 y 2023-2025) y `…/rendicion/junta/docs/content/aa/sas/index.html` (2022). Para 2010 y 2011, `…/cuentaAAAA/cuenta/sas.htm` devuelve 404; la página del SAS cuelga directamente de `…/cuentaAAAA/` (enlazada desde `…/cuentaAAAA/cuentaAAAA.htm`).
  - Documentos que publican la liquidación de gastos del SAS por debajo del capítulo:
    - 2010-2019: apartado 3.2 «Desarrollo por clasificación funcional a nivel de aplicación (2010-2014) / partida (2015-2019) presupuestaria» (`SAS3-2.pdf`) y apartado 3.3 «Desarrollo por clasificación funcional y vinculación» (`SAS3-3.pdf`).
    - 2020-2022: «Desarrollo por clasificación funcional a nivel de partida presupuestaria» (`SAS3-1-5.pdf`) y «Desarrollo por clasificación funcional y vinculación» (`SAS3-1-6.pdf`, ya catalogado como 20XX-IGJA-010).
    - 2023-2025: «II.1.4. Resumen por conceptos» (`SAS2-1-4.pdf`). En 2023 el documento se desglosa por clasificación funcional (programa) y concepto; en 2024 y 2025, solo por concepto para el total del SAS (5 páginas, sin programa). Desde 2023 no se ha encontrado en la página oficial un documento a nivel de partida ni de vinculación.
  - En los documentos de vinculación de 2015-2022 la línea muestra solo el código, sin denominación. El artículo 25 aparece vinculado a nivel de artículo (código `25`) en 2010-2014 y 2016-2022 (p. ej. `…41C25 00` en 2020); en 2015 (`2015-IGJA-013`) aparece con códigos de 5 dígitos más sufijo (p. ej. `…41C253021401`), es decir, con más detalle que el artículo.
  - En 2014 y 2015 hay aplicaciones del artículo 25 también en el programa 31P (además de 41C); en el resto de años los documentos solo las muestran en 41C.
  - Columnas: 2010-2022, crédito inicial, modificaciones, crédito definitivo, gastos comprometidos, obligaciones reconocidas, pagos, obligaciones pendientes y remanentes; 2023-2025, créditos iniciales, modificaciones y definitivos, gastos comprometidos, obligaciones reconocidas netas, pagos, obligaciones pendientes de pago a 31 de diciembre y remanentes de crédito.
- URL probadas / documentos: ver `scripts/descarga/manifiesto_ejecucion_economica_sas.csv` (ids 2010-2019-IGJA-012/013, 2020-IGJA-017, 2021-IGJA-016, 2022-IGJA-016, 2023-2025-IGJA-013).
- Estado: aceptada (documentada).
- Tratamiento aplicado: se descargan los documentos de cada año tal como se publican. El nivel de detalle no es homogéneo (programa × artículo/partida en 2010-2023; total del SAS por concepto en 2024-2025); el único nivel presente en todos los años es el total del SAS por artículo/concepto del capítulo II; en los años con desglose por programa, ese total exige sumar programas en la extracción. Sin interpretar cifras.
- Observaciones de la extracción (2026-11-11, `scripts/extraccion/medios_ajenos_ejecucion.py`):
  - 2016: en la vinculación `1231067980 41C 25`, sufijo 29 (2016-IGJA-013, pág. 47), las obligaciones (52.850.150,62 €) superan al crédito definitivo (52.434.293,40 €). Por eso el total del artículo 25 de 2016 tiene un grado de ejecución del 100,06 %. Es el único caso a nivel de vinculación en 2010-2022; a nivel de línea hay 477 de 1.090.
  - 2024: el concepto 257 figura rotulado «X», con crédito 0,00 € y obligaciones de 7.661,00 € (2024-IGJA-013, pág. 3). En 2023 se llama «TRANSPORTE SANITARIO». En 2024-2025 el transporte se presupuesta en el concepto 227 (subconceptos .23-.26, artículo 22).
  - 2023: el servicio 06 tiene 12 bloques de conceptos del capítulo II sin rótulo; varios figuran con el definitivo y las obligaciones a 0,00 €.


### INC-029 · Artículo 25 «Asistencia sanitaria con medios ajenos» (SAS + Consejería) frente a la partida «Conciertos» de la EGSP: las cifras no coinciden
- Fecha de registro: 2026-11-11
- Años afectados: 2010-2024 (EGSP 2023 y 2024: cifras provisionales)
- Tipo: discrepancia
- Descripción:
  - Magnitudes comparadas: (a) obligaciones reconocidas del artículo 25 del SAS y de la Consejería, **sin el concepto 257** (transporte sanitario), según la Cuenta General (`sas_medios_ajenos_2010_2025.csv`, `consejeria_medios_ajenos_2010_2025.csv`; `DERIVADO` de `20XX-IGJA-012/013/014/016/017/018`, `OFICIAL_PRIMARIA`); (b) partida «Conciertos» del bloque económico-presupuestario de la EGSP, Comunidad Autónoma de Andalucía (`MSAN-EGSP-001`, hoja «Tabla 3.4.01», fila 75, `OFICIAL_SECUNDARIA`, descarga 2026-11-11). Diferencia = (a) − (b); diferencia % = diferencia / (b) × 100.
  - Lectura complementaria: en los 23 años de la hoja, «Conciertos» es igual, al céntimo, a la suma de las filas 2.2.1.1 «Servicios hospitalarios», 2.2.1.2 «Servicios especializados», 2.2.2 «Servicios primarios de salud», 2.2.4 «Traslado de enfermos» (producción de mercado) y 3.1 «Entre AA.PP. Por servicios concertados» (`scripts/validacion/validar_medios_ajenos.py`, V16). Es una igualdad numérica, no una definición publicada (INC-027). Por ello se muestra también (c) = «Conciertos» − 2.2.4 «Traslado de enfermos» (`DERIVADO`), que excluye el transporte como la serie (a).

    | Año | (a) Art. 25 sin 257 (€) | (b) EGSP Conciertos (€) | (a) − (b) (€) | % | (c) EGSP sin traslado (€) | (a) − (c) (€) | % sobre (c) | EGSP provisional |
    |---|---|---|---|---|---|---|---|---|
    | 2010 | 331.547.821,76 | 515.167.000,00 | -183.619.178,24 | -35,64 | 338.421.000,00 | -6.873.178,24 | -2,03 | no |
    | 2011 | 300.820.293,23 | 446.568.000,00 | -145.747.706,77 | -32,64 | 307.466.000,00 | -6.645.706,77 | -2,16 | no |
    | 2012 | 322.202.506,55 | 460.375.368,69 | -138.172.862,14 | -30,01 | 309.103.368,69 | 13.099.137,86 | 4,24 | no |
    | 2013 | 275.115.892,13 | 385.456.000,00 | -110.340.107,87 | -28,63 | 265.291.000,00 | 9.824.892,13 | 3,70 | no |
    | 2014 | 286.910.757,61 | 424.344.000,00 | -137.433.242,39 | -32,39 | 289.255.000,00 | -2.344.242,39 | -0,81 | no |
    | 2015 | 254.967.863,41 | 397.981.000,00 | -143.013.136,59 | -35,93 | 263.624.000,00 | -8.656.136,59 | -3,28 | no |
    | 2016 | 190.826.939,82 | 380.143.000,00 | -189.316.060,18 | -49,80 | 249.057.000,00 | -58.230.060,18 | -23,38 | no |
    | 2017 | 350.733.470,95 | 422.629.000,00 | -71.895.529,05 | -17,01 | 287.616.000,00 | 63.117.470,95 | 21,95 | no |
    | 2018 | 310.815.988,00 | 424.528.000,00 | -113.712.012,00 | -26,79 | 289.963.000,00 | 20.852.988,00 | 7,19 | no |
    | 2019 | 295.160.456,74 | 442.912.000,00 | -147.751.543,26 | -33,36 | 301.916.000,00 | -6.755.543,26 | -2,24 | no |
    | 2020 | 317.835.280,74 | 471.760.000,00 | -153.924.719,26 | -32,63 | 324.961.000,00 | -7.125.719,26 | -2,19 | no |
    | 2021 | 306.584.731,19 | 550.845.321,45 | -244.260.590,26 | -44,34 | 400.245.828,45 | -93.661.097,26 | -23,40 | no |
    | 2022 | 491.454.958,49 | 580.237.006,13 | -88.782.047,64 | -15,30 | 408.220.704,37 | 83.234.254,12 | 20,39 | no |
    | 2023 | 499.076.277,58 | 594.356.249,78 | -95.279.972,20 | -16,03 | 424.232.249,78 | 74.844.027,80 | 17,64 | sí |
    | 2024 | 428.190.872,10 | 625.011.774,24 | -196.820.902,14 | -31,49 | 442.284.774,24 | -14.093.902,14 | -3,19 | sí |

  - Suma 2010-2024: (a) 4.962.244.110,30 €; (b) 7.122.313.720,29 € (−30,33 %); (c) 4.901.656.925,53 € (+1,24 %). Las sumas de todos los pares de años consecutivos están en `data/interim/medios_ajenos/validacion_medios_ajenos.md` (V17).
  - Otras coincidencias numéricas observadas (V16): la fila 2.2.2 «Servicios primarios de salud» coincide con las obligaciones del concepto 254 de la Consejería con diferencias de 0 a 484,54 € (redondeo a miles) en 2011-2024; en 2010 la diferencia es de −771.660,00 €. Las obligaciones del concepto 257 (SAS + Consejería) son menores que la fila 2.2.4 «Traslado de enfermos» entre un 1,47 % y un 9,61 % (sobre la cifra EGSP) en 2010-2023, salvo 2013, en que son mayores un 0,54 %; en 2024 el transporte ya no está en el artículo 25.
  - Diferencias de definición que constan en documentos oficiales (hipótesis descriptivas; ninguna cuantificada por separado):
    1. **Criterio de imputación temporal.** La EGSP se elabora «de acuerdo con el principio contable de devengo —gasto real o efectivo, en el lenguaje presupuestario— frente a [...] el principio de caja: liquidaciones presupuestarias» (`MSAN-EGSP-004`, pág. 4). La serie (a) son obligaciones reconocidas del ejercicio. En 2016-2017 y 2021-2022 las diferencias (a) − (c) tienen signo contrario en años consecutivos (−58,2 M€ y +63,1 M€; −93,7 M€ y +83,2 M€); la suma de 2016-2017 difiere un +0,91 % y la de 2021-2022 un −1,29 %.
    2. **Perímetro de agentes.** La EGSP recoge «todas aquellas unidades institucionales del sector AAPP cuya actividad principal este incluida en las funciones definidas por la COFOG en su apartado 7: SALUD» y «aquellas empresas públicas del sector sanitario que [...] suministran servicios y bienes a la colectividad» (`MSAN-EGSP-004`, pág. 6). Para 2024 lista en Andalucía: Consejería de Salud y Consumo, SAS, Escuela Andaluza de Salud Pública y Agencia de Servicios Sociales y Dependencia de Andalucía (Plan sobre Drogodependencias) (pág. 18). La relación de agentes de años anteriores no figura en ese documento; en 2010-2021 existían agencias públicas empresariales sanitarias con presupuesto propio (INC-016), cuyo gasto no está en (a). No verificado.
    3. **Contenido de las partidas.** La metodología no define «Conciertos» (INC-027). Las funciones de la EGSP incluyen conciertos de atención primaria y especializada «con profesionales, instituciones o empresas que sean de titularidad pública o privada», y «Traslado de enfermos» incluye «la concertación de servicios de ambulancias» y «los gastos efectuados mediante transferencia corriente (reintegro de gastos) por desplazamientos» (`MSAN-EGSP-004`, pág. 15). La fila 3.1 (transferencias entre AA.PP. por servicios concertados) suma 4.526.000 € en 2010 y 0 € desde 2020. El artículo 25 es una clasificación económica presupuestaria; la EGSP clasifica por agente y función.
    4. **Consolidación.** En 2021 el consolidado oficial elimina 1.055.329,93 € del capítulo II del SAS (diferencia entre la liquidación sin consolidar y la consolidada); los documentos disponibles no permiten saber si afecta al artículo 25. En el resto de 2020-2025 el capítulo II del SAS y de la Consejería no varía al consolidar.
    5. **Provisionalidad.** EGSP 2023 y 2024: «(*) Cifras provisionales.»
- URL probadas / documentos: `MSAN-EGSP-001` (Tabla 3.4.01), `MSAN-EGSP-002` (pág. 72), `MSAN-EGSP-004` (págs. 4, 6, 15, 18); Cuenta General `20XX-IGJA-012`, `20XX-IGJA-014`, `2020-IGJA-017/018`, `2021-2022-IGJA-016/017`, `2023-IGJA-013/014`, `2024-IGJA-013/014`.
- Estado: aceptada (no resoluble con los documentos disponibles).
- Tratamiento aplicado: se muestran ambas cifras; no se ajusta ninguna. Tabla completa (con el artículo 25 con 257 y la diferencia correspondiente) en `data/interim/medios_ajenos/contraste_art25_egsp_2010_2024.csv` (`DERIVADO`). La lectura (c) es un cálculo propio a partir de dos filas de la misma tabla oficial; se presenta como complementaria, no como sustituta de «Conciertos».


### INC-030 · Consejería 2025: el artículo 25 no se puede separar en la liquidación por conceptos
- Fecha de registro: 2026-11-11
- Años afectados: 2025
- Tipo: hueco
- Descripción: el resumen por conceptos de la liquidación de la Administración General 2025 (`2025-IGJA-014`) no desglosa por sección. Su artículo 25 (solo el concepto 254 «Asistencia con especialistas») figura con 7.875.000,00 € de crédito inicial, 8.180.839,91 € de definitivo y 5.785.795,72 € de obligaciones (pág. 3), para el conjunto de la Administración General. El crédito inicial de la Consejería en el presupuesto 2025 (`2025-HAC-003`, pág. 36) es también 7.875.000,00 €. En 2010-2024 el artículo 25 de otras secciones de la Junta tiene importes de 0 a 100.000 € de crédito inicial y de 0 a 5.655,00 € de obligaciones (`data/interim/medios_ajenos/junta_art25_otras_secciones_2010_2025.csv`), pero no se ha supuesto que en 2025 todo corresponda a la Consejería.
- URL probadas / documentos: `2025-IGJA-014`, `2025-HAC-003`.
- Estado: abierta (pendiente de un documento de 2025 con desglose por sección).
- Tratamiento aplicado: Consejería 2025, crédito inicial `DERIVADO` del presupuesto; definitivo y obligaciones `NO_DISPONIBLE` (importe vacío) en `consejeria_medios_ajenos_2010_2025.csv`. En `data/processed/metricas_medios_ajenos_2010_2025.csv` (2026-11-11, tras la validación del informe): los conceptos 251, 252, 253, 255 y 256 de la Consejería en 2025 (definitivo y obligaciones) se fijan en 0,00 € (`DERIVADO`), porque en `2025-IGJA-014` (pág. 3) el único concepto 25x de toda la Administración General es el 254; el concepto 254 de la Consejería sigue `NO_DISPONIBLE` (no se le imputa ninguna parte de los 5.785.795,72 € de la Administración General), igual que el total del artículo. El total SAS + Consejería de 2025 solo existe en crédito inicial. El contraste con la EGSP llega a 2024, último año publicado.


### INC-031 · Artículo 25 en 2014-2015: reparto entre Consejería y SAS y programa 31P
- Fecha de registro: 2026-11-11
- Años afectados: 2013-2016
- Tipo: cambio_estructura
- Descripción (lo que muestran los documentos):
  - 2010-2014: la Consejería presupuesta el concepto 252.04 «Con entidades privadas» (programa 41C, servicio 01; y 31P, servicio 01). Crédito inicial de la Consejería en 2014: 123.653.827,00 € (artículo 25).
  - 2014: en la Consejería, modificaciones de −54.178.421,31 € en 41C/01 252.04 y de −378.978,40 € en 31P/01 252.04 (`2014-IGJA-014`, págs. 312 y 273); definitivo del artículo 69.234.925,41 € y obligaciones 68.710.028,44 €. En el SAS, modificaciones de +21.432.925,35 € en 41C 252.04 (definitivo 21.758.925,35 €; obligaciones 81.230.832,74 €, `2014-IGJA-012`, pág. 44) y de +378.978,40 € en 31P 252.04 (pág. 8). El importe de 31P es el mismo con signo contrario en ambas entidades. Modificaciones del artículo 25 del SAS en 2014: +112,6 M€ en total.
  - Concepto 252, obligaciones SAS + Consejería: 2013, 143.541.515,42 €; 2014, 141.977.130,77 €; 2015 (solo SAS), 125.112.369,78 €.
  - 2015: el 252.04 deja de figurar en la Consejería y se presupuesta en el SAS (inicial del concepto 252 en el SAS: 126.526.872,00 €). Desde 2015 el artículo 25 de la Consejería es casi solo el concepto 254 (asistencia dental y podológica).
  - 2014 y 2015: el SAS tiene líneas del artículo 25 en el programa 31P (obligaciones 378.675,00 € y 281.321,10 €), además del 41C.
  - 2016: en el SAS, el concepto 252 tiene 137.000.000,00 € de inicial, 41.126.473,13 € de definitivo y 58.155.122,70 € de obligaciones; el artículo 25 del SAS tiene obligaciones (310.187.559,97 €) mayores que el definitivo (310.008.783,03 €) (INC-028).
- URL probadas / documentos: `2014-IGJA-012`, `2014-IGJA-014`, `2015-IGJA-012`, `2015-IGJA-014`, `2014-HAC-004`, `2015-HAC-002`.
- Estado: aceptada (documentada).
- Tratamiento aplicado: la serie principal suma SAS + Consejería, por lo que el cambio de entidad no altera el total; las series por entidad muestran el cambio tal cual. Los documentos no indican el motivo de las modificaciones; no se interpreta.


### INC-032 · Perímetro del artículo 25: programa 31P y concepto 257 de la Consejería
- Fecha de registro: 2026-11-11
- Años afectados: 2010-2022 (31P); 2020 (257 de la Consejería)
- Tipo: criterio_contable
- Descripción:
  - El perímetro decidido para la serie de medios ajenos es «SAS + Consejería, todos los años» (artículo 25 completo de cada sección). En la Consejería, buena parte del artículo 25 está en el programa 31P (prestación/asistencia dental, servicio 02; 252.04 con entidades privadas, servicio 01, hasta 2014): obligaciones del programa 31P en la Consejería de 9.523.912,92 € (2010), 8.383.820,42 € (2011), 9.367.936,44 € (2012), 9.384.442,90 € (2013), 8.436.858,37 € (2014), 7.394.816,90 € (2015), 7.450.269,58 € (2016), 7.603.778,02 € (2017), 7.822.962,38 € (2018), 7.748.009,40 € (2019), 6.073.862,48 € (2020), 6.637.081,40 € (2021) y 6.055.296,70 € (2022). En 2023 el artículo 25 de la Consejería figura en el programa 41D (servicio 02, concepto 254) y en 2024 el documento (`2024-IGJA-014`) no desglosa por programa. En el SAS hay líneas de 31P en 2014 y 2015 (INC-031).
  - El perímetro sanitario general del proyecto (`sanidad_programas`, `docs/METODOLOGIA.md`) **excluye el programa 31P**. Las dos series usan, por tanto, perímetros distintos para la Consejería.
  - La fila 2.2.2 «Servicios primarios de salud» de la EGSP coincide, con redondeo a miles, con las obligaciones del concepto 254 de la Consejería en 2011-2024, concepto que en 2011-2022 está en su mayor parte en el programa 31P (INC-029).
  - En 2020 la Consejería tiene 30.250,00 € de definitivo y obligaciones en el concepto 257 (transporte sanitario); la serie «sin 257» también los excluye.
- URL probadas / documentos: `20XX-IGJA-014` (2010-2019), `2020-IGJA-018`, `2021-2022-IGJA-017`.
- Estado: resuelta el 2026-11-11. El usuario decide incluir el artículo 25 completo de la Consejería, también el programa 31P, que se muestra desglosado aparte (docs/MEMORIA_PROYECTO.md, sección 3).
- Tratamiento aplicado: ninguno sobre las cifras. Los programas de cada año figuran en `notas` de `consejeria_medios_ajenos_2010_2025.csv`.


### INC-033 · Equivalencias incompletas para los ficheros del artículo 25
- Fecha de registro: 2026-11-11
- Años afectados: 2010-2025
- Tipo: otro
- Descripción:
  - Secciones: todas tienen correspondencia en `data/equivalencias/secciones.csv`, pero 21 solo tras normalizar la escritura: «16 31»/«15 31»/«12 31» (liquidación, 2010-2014) frente a «16.31»/«15.31»/«12.31»; «16 00»/«15 00»/«12 00» frente a «16»/«15»/«12»; y «12.31»…«13.31» (presupuesto, 2015-2025) frente a «1231»…«1331».
  - Programas: `data/equivalencias/programas.csv` no tiene el programa 41C en 2021-2025 (`sas_medios_ajenos_inicial_2010_2025.csv` lo usa como `4.1.C` en todos los años) ni el 31P en ningún año (citado en `notas` de los ficheros del artículo 25). `programas.csv` figura como «Pendiente» en su LEEME.
- Estado: abierta.
- Tratamiento aplicado: ninguno sobre los datos. Se recomienda completar `programas.csv` (41C del SAS 2021-2025; 31P) y documentar la regla de normalización de secciones.


### INC-034 · Resumen mensual de junio de 2026 (Junta): fichero de modificaciones de crédito no disponible
- Fecha de registro: 2026-11-11
- Años afectados: 2026
- Tipo: descarga
- Descripción: la página oficial del resumen de ejecución mensual de junio de 2026 (Junta de Andalucía) enlaza el documento «Modificaciones de Crédito por Sección/Capítulo» (`descargas/junta/2_JUNTA-1.pdf`), pero el servidor devuelve 404. El resto de documentos de junio (Cuenta de Gastos Públicos a nivel de Seguimiento de la Junta y del SAS; modificaciones del SAS) sí se descargaron (`2026-IGJA-001`, `-003`, `-004`). El mismo documento de agosto de 2026 sí está disponible (`2026-IGJA-006`).
- URL probadas / documentos:
  - `https://www.juntadeandalucia.es/haciendayadministracionpublica/servicios/fiscalizacion/rendicion/mensuales2026/junio/descargas/junta/2_JUNTA-1.pdf` → HTTP 404 (enlace tomado de `…/mensuales2026/junio/junta.htm`).
  - `…/mensuales2026/junio/descargas/junta/JUNTA-1.pdf` → HTTP 404.
  - `…/mensuales2026/junio/descargas/junta/1_JUNTA-1.pdf` → HTTP 404.
- Estado: abierta.
- Tratamiento aplicado: `2026-IGJA-002` queda en el manifiesto `scripts/descarga/manifiesto_factcheck_2026_2027.csv` sin registrar en el catálogo (NO_DISPONIBLE). Se puede reintentar con `python3 scripts/descarga/descargar.py lote scripts/descarga/manifiesto_factcheck_2026_2027.csv`.


### INC-035 · Contratos del SAS citados en el factcheck: documentos no localizados y diferencias entre documentos oficiales
- Fecha de registro: 2026-11-11
- Años afectados: 2023-2026 (contratación; no afecta a las series presupuestarias)
- Tipo: descarga / discrepancia
- Descripción:
  - **Documentos no localizados (acuerdos marco de pruebas diagnósticas por provincia, 2025-2026).** En TED/DOUE (consulta del 2026-11-11) hay anuncio de licitación de las 8 provincias (`CONTR-TED-002`…`-014`), pero anuncio de adjudicación solo de Huelva, Almería, Jaén y Granada (`CONTR-TED-015`…`-019`). No se han encontrado anuncios de adjudicación ni de formalización de Cádiz (CONTR 2025 0000723897), Sevilla (CONTR 2025 0000697024), Málaga (CONTR 2025 0000737232) ni Córdoba (CONTR 2026 0000003051), ni los pliegos (PCAP) de ninguna de las ocho provincias. Las fichas de expediente del Perfil de Contratante de la Junta son una aplicación JavaScript sin contenido estático; los documentos solo se pueden descargar por URL directa (`…/pdc_sirec_documentacion/rest/descargar/documento/<n>` o `…/anuncio/<n>`) y no se ha encontrado el número de documento de estos anuncios. No se ha usado el índice interno de búsqueda de la plataforma.
  - **Diferencias entre documentos oficiales del mismo expediente (se recogen tal cual, sin corregir):**
    - Acuerdo marco de procedimientos quirúrgicos (CONTR 2023 0000902330): el importe 231.886.643,50 € figura como «Presupuesto base de licitación», «Importe total (con IVA)» e «Importe total (sin IVA)» con la misma cifra en el Perfil de Contratante (`CONTR-JDA-001`, `CONTR-JDA-002`), y como «Conjunto de contratos previstos: 231.886.643,50 € (IVA incluido)» en el DOUE (`CONTR-TED-001`). La nota de prensa del SAS (`CONTR-SAS-001`) lo denomina «valor estimado de 231 millones de euros»; el «Valor estimado» de los anuncios oficiales es 533.339.280,05 € (IVA excluido).
    - Jaén (CONTR 2025 0000703722): el anuncio de licitación (`CONTR-TED-005`) indica «Presupuesto total: 22.120.166,68€ (exento IVA)» y «Valor estimado, IVA excluido: 50 876 383,36 EUR»; los anuncios de adjudicación (`CONTR-TED-017`, `-018`) indican «Presupuesto total: 22.120.166,68 € (IVA incluido)» y «Valor estimado, IVA excluido: 22 120 166,68 EUR».
    - Huelva (CONTR 2025 0000690800): en el anuncio de adjudicación (`CONTR-TED-015`) el campo «Valor máximo del acuerdo marco» figura 9 veces como «39 319 433,80 EUR» y una vez (LOT-0008) como «3 919 433,80 EUR».
- URL probadas / documentos:
  - API de búsqueda de TED `https://api.ted.europa.eu/v3/notices/search` (consultas por texto «CONTR 2025 0000723897», «0000697024», «0000737232», «0000003051», por identificador de procedimiento y por «pruebas diagnósticas» + «Servicio Andaluz de Salud» con `notice-type=can-standard` desde 2026-01-01): sin anuncios de adjudicación para esas cuatro provincias. Algunas consultas devolvieron HTTP 429 (límite de peticiones) y se repitieron.
  - Buscador web restringido a `juntadeandalucia.es` («pruebas diagnósticas» + anuncio de adjudicación/formalización 2026; números de expediente CONTR): sin resultados para estos expedientes.
  - `https://www.juntadeandalucia.es/haciendayadministracionpublica/apl/pdc-front-publico/feed/rssPublicadas` → HTTP 200, pero solo contiene las últimas publicaciones (sin estos expedientes).
  - `https://www.juntadeandalucia.es/haciendayadministracionpublica/apl/pdc-front-publico/perfiles-licitaciones/buscador-general` → HTTP 200, aplicación JavaScript sin datos en el HTML.
- Estado: abierta.
- Tratamiento aplicado: ninguno sobre las cifras. Se recomienda consultar manualmente en el navegador el Perfil de Contratante del SAS (buscador de licitaciones de la Junta) por número de expediente para descargar el PCAP y los anuncios de adjudicación/formalización que falten, y registrarlos en `scripts/descarga/manifiesto_factcheck_contratos.csv`.
