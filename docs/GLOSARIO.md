# Glosario

Definiciones de los términos presupuestarios usados en el repositorio. Las definiciones son descriptivas y siguen la terminología de la normativa presupuestaria pública española (Texto Refundido de la Ley General de la Hacienda Pública de la Junta de Andalucía y Orden de elaboración del presupuesto de cada ejercicio).

## Fases del gasto y magnitudes

| Término | Definición |
|---|---|
| **Crédito inicial** | Importe consignado en la Ley de Presupuestos aprobada para el ejercicio. Si el presupuesto está prorrogado, son los créditos del ejercicio anterior prorrogados (ver *Prórroga presupuestaria*). |
| **Modificaciones presupuestarias** | Cambios en los créditos durante el ejercicio: transferencias de crédito, generaciones, ampliaciones, incorporaciones de remanentes, créditos extraordinarios y suplementos. |
| **Crédito definitivo** | Crédito inicial + modificaciones. Es el límite máximo de gasto autorizado al cierre del ejercicio. |
| **Autorización (A)** | Acto por el que se aprueba la realización de un gasto. |
| **Compromiso / disposición (D)** | Acto por el que se acuerda con un tercero la realización del gasto. |
| **Obligaciones reconocidas (O)** | Gasto exigible, ya realizado o devengado. En este proyecto es la medida del **gasto ejecutado**. |
| **Pagos realizados (P)** | Obligaciones efectivamente pagadas. |
| **Grado de ejecución** | Obligaciones reconocidas / crédito definitivo × 100. |
| **Liquidación del presupuesto** | Estado que recoge, al cierre, créditos iniciales, modificaciones, definitivos, obligaciones y pagos. Forma parte de la Cuenta General. |
| **Cuenta General** | Documento que rinde la Intervención General de la Junta con la liquidación del presupuesto y los estados contables del ejercicio. |
| **Prórroga presupuestaria** | Si a 1 de enero no está aprobada la Ley de Presupuestos, se consideran automáticamente prorrogados los del ejercicio anterior hasta la aprobación de los nuevos. |

## Clasificaciones del presupuesto de gastos

| Clasificación | Qué indica |
|---|---|
| **Orgánica** | Quién gasta: **sección** (consejería u organismo) y **servicio** (centro gestor, fuente de financiación). |
| **Funcional / por programas** | Para qué se gasta: grupo de función, función y **programa** (p. ej. 41A, 41C…; los códigos concretos se documentan en `data/equivalencias/`). |
| **Económica** | En qué se gasta: **capítulo**, artículo, concepto y subconcepto. |

## Capítulos económicos del gasto

| Capítulo | Nombre | Tipo |
|---|---|---|
| I | Gastos de personal | Operaciones corrientes |
| II | Gastos corrientes en bienes y servicios | Operaciones corrientes |
| III | Gastos financieros | Operaciones corrientes |
| IV | Transferencias corrientes | Operaciones corrientes |
| V | Fondo de contingencia | — |
| VI | Inversiones reales | Operaciones de capital |
| VII | Transferencias de capital | Operaciones de capital |
| VIII | Activos financieros | Operaciones financieras |
| IX | Pasivos financieros | Operaciones financieras |

En sanidad, el capítulo IV incluye habitualmente la **prestación farmacéutica a través de receta** y las transferencias de la Consejería al SAS. Este último punto es relevante para evitar **doble cómputo** (ver `METODOLOGIA.md`).

## Organismos

| Término | Definición |
|---|---|
| **Consejería de Salud** | Departamento de la Junta competente en sanidad. Su denominación ha cambiado según la legislatura (ver `data/equivalencias/secciones.csv`). |
| **SAS (Servicio Andaluz de Salud)** | Agencia administrativa adscrita a la Consejería competente en salud que gestiona la asistencia sanitaria pública. Tiene su propia sección presupuestaria. |
| **Intervención General de la Junta de Andalucía (IGJA)** | Órgano de control interno y contabilidad pública; formula la Cuenta General. |
| **Cámara de Cuentas de Andalucía** | Órgano de control externo; fiscaliza la Cuenta General. |
| **AIReF** | Autoridad Independiente de Responsabilidad Fiscal (ámbito estatal). |
| **EGSP** | Estadística de Gasto Sanitario Público del Ministerio de Sanidad; homogeneiza el gasto sanitario de todas las administraciones. |

## Otros

| Término | Definición |
|---|---|
| **Euros corrientes** | Importe nominal, tal como figura en el documento. |
| **Euros constantes** | Importe deflactado con el IPC a un año base, para comparar poder adquisitivo entre años. |
| **REACT-UE** | Recursos adicionales de fondos estructurales de la UE (2021-2023) vinculados a la respuesta a la COVID-19. |
| **Fondo COVID-19** | Transferencias extraordinarias del Estado a las CCAA en 2020 (RDL 22/2020) y posteriores. |
| **MRR** | Mecanismo de Recuperación y Resiliencia (fondos *Next Generation EU*). |
