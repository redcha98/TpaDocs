---
sidebar_position: 1
---

# CHAIN

## Sintassi

  ```
  CHAIN asse_enc_master, asse_slave1 [, ...asse_slave5]
  ```

## Parametri
|Parametro                         | Descrizione                                                               |                
|----------------------------------|---------------------------------------------------------------------------|
| **asse_enc_master**              | nome del dispositivo tipo asse o encoder che funzionerà da master         |      
| **asse_slave1...asse_slave5**    | nome del dispositivo tipo asse che funzionerà da slave                    |         

## Descrizione
Asserve gli assi_slave (1÷5) al dispositivo **asse_enc_master**. Ciò significa che il movimento di ciascun **asse_slave** verrà determinato dal movimento dell’asse_enc_master in base al rapporto di concatenamento definito dall’istruzione [RATIO](RATIO.md). 

L’aggancio degli assi_slave avviene immediatamente, sia per assi fermi che in movimento, senza applicare nessuna rampa di velocità per adeguare il movimento di **asse_slave** al rapporto richiesto. Pertanto, se l’istruzione CHAIN viene eseguita quando il rapporto delle velocità tra **asse_enc_master** e **asse_slave** è diverso da [RATIO](RATIO.md), la velocità target dell’**asse_slave** subirà una variazione a gradino. 

Tutti i dispositivi indicati devono avere la stessa unità di misura e gli assi_slave non devono essere in errore e non devono essere già inseriti in un canale di interpolazione.
È impossibile asservire un **asse_slave** che sia già master (direttamente o indirettamente) del dispositivo **asse_enc_master** oppure che sia già slave. Inoltre, slave e master devono essere dispositivi distinti.

Per disabilitare il concatenamento di un **asse_slave** è possibile eseguire un’istruzione [UNCHAIN](UNCHAIN.md) o una [FREE](FREE.md).

### Esempio
  ```c {2} showLineNumbers
;// concateno l'asse Y all'asse X
CHAIN	X, Y	
;// muovo l'asse X. Y replica il movimento di X
MOVINC	X, 100
 ```
