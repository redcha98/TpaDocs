---
sidebar_position: 1
---

# ECATACTIVATEMODE

## Sintassi

  ```
 ECATACTIVATEMODE asse, modalità, errore
  ```

## Parametri
|Parametro                 | Descrizione                     |                
|--------------------------|---------------------------------|
| **asse**                 | Dispositivo di tipo asse        |         
| **modalità**             | Costante o variabile integer    |              
| **errore**               | Variabile integer               |         
 
## Descrizione
Imposta la **modalità** di controllo dell’**asse** secondo le specifiche DS402.

L’istruzione è utile per eseguire movimenti assoluti tramite modalità di controllo posizione non sincrona oppure azzeramenti su camma/sensore tramite la modalità di controllo homing.

La macro verifica prima che l’oggetto di configurazione modalità di controllo (_0x6060 + 0x800 * PosizioneAsse_) sia presente tra i PDO del nodo. Se così fosse ne imposta il valore. Altrimenti Avvia una procedura di scrittura SDO dell’oggetto.

Il parametro **errore** conterrà il codice numerico dell’errore, 0 se non si sono verificati errori.


