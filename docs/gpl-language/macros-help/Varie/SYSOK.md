---
sidebar_position: 20
---

# SYSOK

## Sintassi

  ```
SYSOK [nomeoutput1 [, … nomeoutput8]]
  ```

## Parametri
|Parametro                            | Descrizione                                  |                
|-------------------------------------|----------------------------------------------|
| **nomeoutput1 [...nomeoutput8]**    | nome dispositivo di tipo output digitale.    |         
 
## Descrizione
Indica al controllo numerico quali sono le uscite collegate ai circuiti di sicurezza della macchina (può essere un'uscita collegata ad un relè di sicurezza che controlla l'alimentazione di potenza della macchina). Le uscite vengono attivate quando il controllo numerico ha completato l'inizializzazione della macchina. Una volta configurata come SysOk, non sarà più possibile pilotare lo stato dell’uscita tramite interfaccia grafica o istruzioni di ciclica eccetto per le macro [SYSFAULT](SYSFAULT.md) (RESET uscita SysOk) e SYSOK (SET uscita SysOk).

La macro può essere chiamata più volte, da più task e con diversi parametri. Nel sistema possono esserci al più 8 uscite configurate come SysOk. Raggiunto questo limite, l’eventuale esecuzione della macro SYSOK che cerca di configurare ulteriori uscite come SysOk fallirebbe.
Se tra i parametri della macro sono presenti uscite già configurate come SysOk ed altre che non lo sono, solo le seconde verranno aggiunte alla lista di uscite SysOk. Se il controllo numerico non rileva errori, tutte le uscite passate per parametro verranno settate ad uno stato alto. Se la macro viene chiamata senza parametri, verranno riabilitate (SET) tutte le uscite SysOk già configurate.

Un dispositivo, per poter essere configurato come SysOk, deve:
-	Non essere configurato come dispositivo virtuale
-	Non essere configurato come dispositivo monostabile
-	Avere un collegamento virtuale-fisico ad uno tra:
    -	Nodo EtherCAT TPA TRS-CAT. L’output può essere collegato solo al modulo base B-IO (prime 16 uscite), non ad un’espansione IO-E.
    -	Uscita WD presente direttamente sul controllo numerico.
-	Nel caso di collegamento con uscita WD, il dispositivo non deve essere configurato come Watchdog (vedi macro [WATCHDOG](WATCHDOG.md)).

Vedere anche l'istruzione [SYSFAULT](SYSFAULT.md).

### Esempio

```c {3,4,10,11,15,16} showLineNumbers
Function TestSysOk autorun
	
	sysok out1 out2  ;// Da questo momento i dispositivi out1 e out2 sono uscite SysOk e, 
                   ;//se non vi sono problemi rilevati nel controllo numerico, assumeranno valore alto

	resetout out1    ;// Non ha effetto. Passante.

	sysfault out1    ;// out1 viene resettato.

	sysok out1 out3 out2  ;// Da questo momento anche out3 è un uscita SysOk. 
                        ;// Se non vi sono problemi rilevati nel controllo numerico, tutte le uscite passate, assumeranno valore alto

	sysfault ;// Tutti i sysok configurati precedentemente venogno resettati.

	sysok   ;// Tutte le uscite sysok precedentemente configurate (out1, out2 e out3) 
          ;//assumono valore alto se non vi sono errori.

fret
```