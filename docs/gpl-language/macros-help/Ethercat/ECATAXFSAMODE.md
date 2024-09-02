---
sidebar_position: 2
---

# ECATAXFSAMODE

## Sintassi

  ```
ECATAXFSAMODE asse, fsaMode
  ```

## Parametri
|Parametro                 | Descrizione                     |                
|--------------------------|---------------------------------|
| **asse**                 | Dispositivo di tipo asse        |         
| **fsaMode**              | Costante o variabile boolean    |         
 
## Descrizione
Il firmware del controllo numerico cerca sempre, per tutti gli assi EtherCAT configurati, di pilotare la macchina stati DS402 dell’asse (FSA Finite State Automaton) nello stato SWITCHED_ON. 

Questa istruzione consente di disabilitare (**fsaMode**=OFF) o riabilitare (**fsaMode**=ON) questo comportamento nel caso si volesse portare lo stato dell’**asse** ad uno stato precedente.

![EcatStatesMachine](./img/EcatStatesMachine.png)

### Esempio

  ```c {3,14} showLineNumbers
;// Disattiva il controllo della macchina stati da parte del 
;//    firmware del controllo numerico per l’asse passato
SetAxFSAMode Ax.X OFF

;// Ora posso dare il comando DISABLEVOLTAGE per portare l’asse in stato SWITCH_ON_DISABLED

;// Comando DISABLEVOLTAGE: Reset bit 1 e 7 della controlword (Vedi documentazione DS402)
EcatSetControlWord Ax.X 0 $82h 

;// … Eventuali operazioni da eseguire in questo stato

;// Riattiva il controllo della macchina stati da parte del 
;//     firmware del controllo numerico per l’asse passato
SetAxFSAMode Ax.X ON
 ```
