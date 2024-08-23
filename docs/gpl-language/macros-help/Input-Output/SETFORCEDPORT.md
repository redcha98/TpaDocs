---
sidebar_position: 25
---

# SETFORCEDPORT 

## Sintassi

  ```
 SETFORCEDPORT	nomeInput8, valore
  ```

## Parametri
|Parametro                 | Descrizione                                            |                
|--------------------------|--------------------------------------------------------|
| **nomeInput8**           | nome di dispositivo input8                             | 
| **valore**               | costante o variabile integer o char o byte             |               

## Descrizione
Forza il **valore** nel dispositivo di ingressi espresso da **nomeinput8**. L’input8 viene visto come una maschera di bit. Se un bit vale 1, il corrispondente ingresso viene forzato ad "ON".
Per poter utilizzare questa istruzione è necessario aver già abilitato la forzatura degli ingressi, con l'istruzione [ENABLEFORCEDINPUT](ENABLEFORCEDINPUT.md). 

Vedere anche
[DISABLEFORCEDINPUT](DISABLEFORCEDINPUT.md),
[SETFORCEDINPUT](SETFORCEDINPUT.md), 
[RESETFORCEDINPUT](RESETFORCEDINPUT.md), 
[SETFORCEDANALOG](SETFORCEDANALOG.md).