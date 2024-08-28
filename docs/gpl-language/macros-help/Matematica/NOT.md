---
sidebar_position: 15
---

# NOT

## Sintassi

  ```
 NOT operando
  ```

## Parametri
|Parametro              | Descrizione                                        |                
|-----------------------|----------------------------------------------------|
| **operando**          | variabile o nome di dispositivo                    |         

## Descrizione
Esegue una operazione di NOT binario (_vengono invertiti i singoli bit_) del valore espresso da **operando**. Il risultato viene memorizzato in **operando**. 

### Esempio

```c {2} showLineNumbers
SetVal   5,varByte  ;// assegna il valore 5 a "varByte"
Not      varByte    ;// Il risultato sarà varByte = -6

;// Notazione binaria: 5 = 0000 0101, 
;// Notazione binaria: -6 = 1111 1010,
```