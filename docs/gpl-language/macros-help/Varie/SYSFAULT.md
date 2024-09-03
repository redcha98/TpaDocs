---
sidebar_position: 17 
---

# SYSFAULT

## Sintassi

  ```
SYSFAULT [nomeoutput1 [, … nomeoutput8]]
  ```

## Parametri
|Parametro                            | Descrizione                                  |                
|-------------------------------------|----------------------------------------------|
| **nomeoutput1 [...nomeoutput8]**    | nome dispositivo di tipo output digitale.    |         
 
## Descrizione
Disattiva i segnali di SYSOK.

Questo segnale viene disattivato per indicare che la macchina non è più in sicurezza (es.: non sono più in esecuzione i task GPL che gestiscono le emergenze).

La macro fallisce (senza eseguire alcuna operazione) se uno o più dispositivi passati non sono SysOk.

Se la macro viene chiamata senza parametri vengono resettate tutte le uscite SysOk del sistema.

Un’uscita SysOk su cui viene eseguita la macro SYSFAULT resterà in stato OFF fino a successiva chiamata
della macro SYSOK: non è possibile settare l'uscita in altro modo (comandi SetOut GPL o interfaccia utente vengono ignorati)

Vedere anche l'istruzione [SYSOK](SYSOK.md).
