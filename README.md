# Presupuestos de la sanidad pública andaluza (2010-2025) · sitio público

Sitio web: **https://mdc-17.github.io/presupuestos-sas-web/**

Presupuestos de la Consejería de Salud de la Junta de Andalucía y del Servicio Andaluz de Salud (SAS) entre 2010 y 2025, a partir de documentos oficiales. Distingue lo presupuestado (crédito inicial y definitivo) de lo ejecutado (obligaciones reconocidas) e indica en cada cifra su fuente y su nivel de fiabilidad.

## Contenido

| Carpeta | Contenido |
|---|---|
| `web/` | Consulta interactiva (página estática, sin servidor) |
| `analisis/` | Informes |
| `graficos/` | Gráficos (PNG y SVG) y los datos representados (CSV) |
| `data/processed/` | Datos procesados en CSV; descripción en `data/processed/LEEME.md` |
| `data/catalogo_fuentes.csv` | Documentos de origen: organismo, URL oficial, fecha de descarga, sha256 y fiabilidad |
| `docs/` | Metodología, fuentes, incidencias de los datos y glosario |

## Niveles de fiabilidad

| Etiqueta | Significado |
|---|---|
| `OFICIAL_PRIMARIA` | Documento original del organismo emisor (Ley de Presupuestos, Consejería de Hacienda, Cuenta General). |
| `OFICIAL_SECUNDARIA` | Dato oficial reelaborado por otro organismo público (Ministerio de Hacienda, Ministerio de Sanidad, INE…). |
| `DERIVADO` | Cálculo propio a partir de datos oficiales, con fórmula documentada. |
| `NO_DISPONIBLE` | No encontrado; se indica dónde se buscó. |

## Nota

Este repositorio se genera automáticamente a partir del repositorio de trabajo del proyecto; no se edita a mano. Solo se publican análisis revisados.
