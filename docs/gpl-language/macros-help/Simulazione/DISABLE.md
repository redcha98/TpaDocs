---
sidebar_position: 1
---

# DISABLE

## Sintassi

  ```
  DISABLE	asse1,[...asse6]
  ```

## Parametri
|Parametro                 | Descrizione                     |                
|--------------------------|---------------------------------|
| **asse1...[...asse6]**   | nomi di dispositivi tipo asse   |         

## Descrizione
Disabilita gli assi specificati. La disabilitazione permette di effettuare delle simulazioni della ciclica di macchina senza movimentare realmente gli assi. Un asse disabilitato non legge le informazioni che provengono dall'encoder ma simula un errore d'anello proporzionale alla velocità corrente. La disabilitazione dell'asse non disattiva tuttavia il riferimento di velocità, si avrà quindi una tensione diversa da zero sul connettore dell'asse anche durante i movimenti simulati. Pertanto, è necessario disalimentare gli azionamenti o scollegarli dalla scheda assi durante i movimenti simulati ovvero ad assi disabilitati. Vedere anche [ENABLE](ENABLE.md).