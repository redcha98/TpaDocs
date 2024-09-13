---
sidebar_position: 22 
---

# WATCHDOG

## Sintassi

  ```
WATCHDOG nomeoutput [, stato]
  ```

## Parametri
|Parametro          | Descrizione                                                                              |                
|-------------------|------------------------------------------------------------------------------------------|
| **nomeoutput**    | nome dispositivo di tipo output digitale.                                                |         
| **stato**         | costante predefinita. <br/>Può assumere i seguenti valori: <br/> -**ON** <br/> -**OFF**  |         
 
## Descrizione
Permette di abilitare una delle uscite WD presenti sul controllo numerico. 

Un dispositivo digitale collegato ad un’uscita WD del controllo può essere passato alla macro WATCHDOG per configurarlo come uscita di sicurezza. L'istruzione permette di individuare situazioni di errore che si verificano durante l'esecuzione del codice GPL.

La prima volta che viene eseguita con il parametro stato a ON (o senza parametro), l’istruzione abilita l’uso del watchdog. L’uscita sarà settata alta se non sono rilevati errori al controllo numerico. Per mantenere alta l’uscita, la macro deve essere continuamente richiamata entro poche decine di millisecondi. Se ciò non avviene, l'uscita di sicurezza della macchina viene resettata.

Ponendo ad OFF il parametro stato l’uscita viene immediatamente resettata.

Una volta configurata come Watchdog, non sarà più possibile pilotare lo stato dell’uscita tramite interfaccia grafica o istruzioni di ciclica eccetto per le macro WATCHDOG stessa.

Un dispositivo, per poter essere configurato come Watchdog, deve:
-	Non essere configurato come dispositivo virtuale
-	Non essere configurato come dispositivo monostabile
-	Avere un collegamento virtuale-fisico ad un’uscita WD presente direttamente sul controllo numerico.
-	Non essere configurato come SysOk (vedi macro [SYSOK](SYSOK.md)).
