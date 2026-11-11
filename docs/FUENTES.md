# Fuentes oficiales

Descripción de las fuentes, por orden de prioridad. Las URL cambian con frecuencia: la URL efectivamente usada para cada fichero está en `data/catalogo_fuentes.csv`. Aquí se documenta el punto de entrada y lo que ofrece cada fuente. Las URL que fallan se anotan en `INCIDENCIAS_DATOS.md`.

## 1. Junta de Andalucía – Consejería de Hacienda (presupuestos)

- **Qué ofrece:** para cada ejercicio, la documentación del Presupuesto: Ley, estados de gastos e ingresos (por sección, servicio, programa y capítulo), memorias de los programas, informe económico-financiero, resúmenes.
- **Fiabilidad:** `OFICIAL_PRIMARIA`.
- **Punto de entrada:** portal de la Consejería con competencias en Hacienda (`juntadeandalucia.es/organismos/...`), apartado *Presupuestos*. Ver catálogo para las URL concretas verificadas.
- **Uso:** fase `inicial`.

## 2. BOJA (Boletín Oficial de la Junta de Andalucía)

- **Qué ofrece:** texto oficial de las Leyes de Presupuestos (con los estados de gastos resumidos por sección y capítulo en el articulado/anexos) y, en su caso, decretos u órdenes relativos a la prórroga presupuestaria.
- **Fiabilidad:** `OFICIAL_PRIMARIA`.
- **Uso:** fase `inicial` y verificación de totales; confirmación de años prorrogados.

## 3. Intervención General de la Junta de Andalucía – Cuenta General

- **Qué ofrece:** Cuenta General de cada ejercicio: liquidación del presupuesto de gastos (créditos iniciales, modificaciones, definitivos, obligaciones reconocidas, pagos) por sección, programa y capítulo.
- **Fiabilidad:** `OFICIAL_PRIMARIA`.
- **Uso:** fases `definitivo` y `obligaciones`. **Fuente clave para el gasto real.**
- La Cuenta General de un ejercicio se publica normalmente al año siguiente (tras su rendición a la Cámara de Cuentas), por lo que la del último ejercicio puede no estar disponible.

## 4. Cámara de Cuentas de Andalucía

- **Qué ofrece:** informes de fiscalización de la Cuenta General y del SAS; incluyen cuadros de liquidación y observaciones sobre la ejecución.
- **Fiabilidad:** `OFICIAL_SECUNDARIA`.
- **Uso:** contraste de la liquidación y contexto descriptivo (incidencias contables).

## 5. Ministerio de Hacienda

- **Qué ofrece:** presupuestos y liquidaciones de las CCAA con clasificación homogénea; ejecución presupuestaria mensual de las CCAA.
- **Fiabilidad:** `OFICIAL_SECUNDARIA`.
- **Uso:** contraste de cifras y total de la Junta para el cálculo de pesos.

## 6. Ministerio de Sanidad – Estadística de Gasto Sanitario Público (EGSP)

- **Qué ofrece:** gasto sanitario público consolidado por CCAA y por clasificación funcional/económica, con criterio homogéneo (criterio de devengo, perímetro distinto del presupuesto).
- **Fiabilidad:** `OFICIAL_SECUNDARIA`.
- **Uso:** comparación entre CCAA. **No es directamente comparable** con las cifras presupuestarias (perímetro y criterio distintos); se presenta siempre separada.

## 7. INE

- **IPC** (general, media anual; Andalucía y nacional) para deflactar.
- **Cifras oficiales de población** (Padrón, 1 de enero) para el cálculo per cápita.
- **Fiabilidad:** `OFICIAL_SECUNDARIA` (el dato es primario del INE, pero secundario respecto al presupuesto; los cálculos derivados son `DERIVADO`).

## 8. Portal de Transparencia de la Junta y memorias anuales del SAS

- **Qué ofrece:** información económica, presupuestaria y de actividad; memorias del SAS con datos de gasto por centro o provincia.
- **Fiabilidad:** `OFICIAL_PRIMARIA` (documentos de la propia Junta/SAS).
- **Uso:** desglose por provincia/centro, si existe.

## 9. Parlamento de Andalucía

- **Qué ofrece:** tramitación de los proyectos de Ley de Presupuestos, enmiendas aprobadas, fechas de legislaturas.
- **Fiabilidad:** `OFICIAL_PRIMARIA` para documentación parlamentaria.
- **Uso:** contexto (fechas de aprobación, enmiendas que alteran créditos) y tabla de legislaturas.

## Puntos de entrada verificados (2026-11-10)

| Fuente | URL de entrada | Notas |
|---|---|---|
| Presupuestos 2014-2025 (Hacienda) | `https://www.juntadeandalucia.es/organismos/economiahaciendayfondoseuropeos/areas/presupuestos/anteriores.html` | Una página por año; los estados de gastos están en la subpágina "Estado de Ingresos y Gastos por Programas…". 2022: "Prórroga del Presupuesto…". |
| Presupuestos 2003-2013 (Hacienda) | `…/presupuestos/anteriores/paginas/presupuestos-anteriores.html` | Solo libros completos (programas y servicios). |
| Leyes en BOJA | `https://www.juntadeandalucia.es/boja/AAAA/NNN/…` | La página HTML de cada disposición enlaza su PDF. |
| Cuenta General 2010-2021, 2023-2025 | `https://www.juntadeandalucia.es/haciendayadministracionpublica/servicios/fiscalizacion/rendicion/cuentaAAAA/cuenta/junta.htm` y `…/sas.htm` | Liquidación de gastos: apartado 3-1 hasta 2022; apartado 2-1 desde 2023 (INC-004). |
| Cuenta General 2022 | `…/fiscalizacion/rendicion/junta/docs/index.html` | Ruta distinta del resto (INC-004). |
| INE – IPC base 2021 por CCAA | `https://www.ine.es/jaxiT3/Datos.htm?t=50913` | Descarga CSV: `https://www.ine.es/jaxiT3/files/t/es/csv_bdsc/50913.csv`. |
| INE – Padrón por CCAA | `https://www.ine.es/jaxiT3/Datos.htm?t=2853` | Termina en 2021 (INC-007). |
| INE – Padrón municipal (todos los años) | `https://www.ine.es/pob_xls/pobmun.zip` | Un Excel por año; 2022-2025 incluidos. |
| INE – Censo anual | `https://www.ine.es/jaxiT3/Datos.htm?t=67988` | Alternativa al padrón (2021-2025). |
| Web del SAS – estadísticas de presupuesto | `https://www.sspa.juntadeandalucia.es/servicioandaluzdesalud/archivo-estadisticas/` | Las URL con sufijo numérico cambian de contenido (INC-009). Solo contraste. |

Fuentes **aún no consultadas**: Cámara de Cuentas de Andalucía, Ministerio de Hacienda (presupuestos y liquidaciones de las CCAA), Ministerio de Sanidad (EGSP), AIReF, Portal de Transparencia, memorias del SAS, Parlamento de Andalucía.

## Fuentes no oficiales

No se usan salvo que no haya alternativa oficial. Si se usan, se registran con `NO_OFICIAL`, en ficheros separados, y nunca se mezclan con datos oficiales en una misma serie.
