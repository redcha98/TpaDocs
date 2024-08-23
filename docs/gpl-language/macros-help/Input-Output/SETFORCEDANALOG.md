---
sidebar_position: 23
---

# SETFORCEDANALOG 

## Sintassi

  ```
 SETFORCEDANALOG	ingressoanalogico, valore
  ```

## Parametri
|Parametro                 | Descrizione                                            |                
|--------------------------|--------------------------------------------------------|
| **ingressoanalogico**    | nome di dispositivo ingresso analogico                 | 
| **valore**               | costante o variabile integer o double                  |               

## Descrizione
Forza il **valore** nell'ingresso analogico specificato da **ingressoanalogico**. 
Per poter utilizzare questa istruzione è necessario aver già abilitato la forzatura degli ingressi, con l'istruzione [ENABLEFORCEDINPUT](ENABLEFORCEDINPUT.md). 

Vedere anche
[DISABLEFORCEDINPUT](DISABLEFORCEDINPUT.md),
[SETFORCEDINPUT](SETFORCEDINPUT.md), 
[RESETFORCEDINPUT](RESETFORCEDINPUT.md), 
[SETFORCEDPORT](SETFORCEDPORT.md).