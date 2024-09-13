---
sidebar_position: 8
---

# DELALERT

## Sintassi

  ```
DELALERT messaggio [, categoria [, arg1, ..., arg5]]
  ```

## Parametri
|Parametro            | Descrizione                                                                                                                   |                
|---------------------|-------------------------------------------------------------------------------------------------------------------------------|
| **messaggio**       | 	Costante integer o DEFMSG o param integer o messaggio implicito                                                             |
| **categoria**       | 	costante o variabile integer, char o byte. Assegna una categoria numerica all’allarme.                                      |
| **arg1, ..., arg5** | 	Costante, dispositivo, stringa, variabile, vettore, matrice, DEFMSG                                                         |

## Descrizione
Fa eseguire al PC supervisore la cancellazione di un avviso inviato precedentemente con l'istruzione ALERT.
Affinché la cancellazione abbia effetto, tutti i valori impostati nei parametri devono coincidere con quelli utilizzati per generare l’avviso; i parametri definiti in fase di cancellazione possono essere un sott'insieme, seppur necessariamente i primi, di quelli utilizzati per generare l'avviso. 

Il parametro **categoria** viene utilizzato per raggruppare avvisi della stessa categoria e poterli smistare in caselle differenti in interfaccia grafica. Se non serve indicare una casella specifica va assegnata la costante predefinita NOPLACE. Il range di valori impostabili è compreso tra 0 (NOPLACE) e 1023. 

Vedere anche l'istruzione [ALERT](ALERT.md).
