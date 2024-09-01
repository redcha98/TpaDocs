---
sidebar_position: 3
---

# CLEARMESSAGES

## Sintassi

  ```
CLEARMESSAGES [IDposiz] 
  ```

## Parametri
|Parametro                 | Descrizione                                                                   |                
|--------------------------|-------------------------------------------------------------------------------|
| **IDposiz**              | costante o variabile integer. Categoria numerica comune a tutti gli allarmi.  |

## Descrizione
Fa eseguire al PC supervisore la cancellazione di tutti i messaggi, relativi al modulo che esegue l'istruzione, inviati precedentemente con l'istruzione MESSAGE. 

Il parametro **IDposiz** è un parametro opzionale che specifica una categoria numerica comune a tutti gli allarmi da cancellare. 

Il range di valori impostabili è compreso tra 0 (NOPLACE) e 1023. Se il parametro **IDposiz** non è specificato si esegue la cancellazione di tutti i messaggi sia nella coda di default che nelle eventuali altre code. 

Vedere anche le istruzioni [MESSAGE](MESSAGE.md) e [DELMESSAGE](DELMESSAGE.md).
