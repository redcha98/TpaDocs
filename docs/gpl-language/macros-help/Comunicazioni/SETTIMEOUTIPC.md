---
sidebar_position: 15
---

# SETTIMEOUTIPC

## Sintassi

  ```
  SETTIMEOUTIPC	timeout
  ```

## Parametri
|Parametro                    | Descrizione                                                                   |                
|-----------------------------|-------------------------------------------------------------------------------|
| **timeout**                 | costante o variabile integer o double. È il tempo limite di attesa in secondi |         
	
## Descrizione
Imposta il **timeout** in secondi oltre il quale una [COMMANDIPC](COMMANDIPC.md) termina l’attesa del comando, generando un errore di sistema. 

Se mai impostato, la [COMMANDIPC](COMMANDIPC.md) aspetta sempre l’esecuzione del comando da parte del programma esterno al quale è stato richiesto.