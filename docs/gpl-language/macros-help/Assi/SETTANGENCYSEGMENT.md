---
sidebar_position: 17
---

# SETTANGENCYSEGMENT

## Sintassi

  ```
SETTANGENCYSEGMENT tipo_raccordo, lun_segmento
  ```

## Parametri
|Parametro               | Descrizione                                                         |                
|------------------------|---------------------------------------------------------------------|            
| **tipo_raccordo**      | tipo di raccordo: _NOFILLET, _ARC                                   |                
| **lun_segmento**       | valore double, distanza dall’incrocio dei due tratti                |


## Descrizione
Configura il raccordo geometrico applicato alle interpolazioni tra due movimenti consecutivi. 

Se **tipo_raccordo** è _NOFILLET non viene fatto nessun raccordo e il parametro **lun_segmento** viene ignorato. 

Se **tipo_raccordo** è _ARC i due tratti vengono raccordati con uno o più archi di circonferenza la cui dimensione è determinata a partire dal parametro **lun_segmento**.