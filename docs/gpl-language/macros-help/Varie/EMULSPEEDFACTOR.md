---
sidebar_position: 23
---

# EMULSPEEDFACTOR

## Sintassi

  ```
EMULSPEEDFACTOR [moltiplicatore]
  ```

## Parametri
|Parametro            | Descrizione                                                                                |                
|---------------------|--------------------------------------------------------------------------------------------|
| **moltiplicatore**  | costante o variabile double                                                                |         
 
## Descrizione
Velocizza o rallenta l’esecuzione della ciclica in emulazione. La macro non ha effetto su controllo numerico fisico. 

I possibili valori per il **moltiplicatore** sono 0.25, 0.5, 1, 2, 5, 10. 

Se la macro viene chiamata senza parametri si assume 1 (esecuzione a velocità reale). 

### Esempio
```c {5} showLineNumbers
Function TestEmulSpeedFactor autorun
	
	Delay 10          ;// La macro resta bloccata per 10 secondi

	EmulSpeedFactor 2 ;// Da qui in avanti la ciclica è il doppio più veloce

	Delay 10          ;// La macro resta bloccata per 5 secondi	

fret

```



