# Creazione del DB in locale

Questo progetto fornisce un'infrastruttura Docker per gestire un database PostgreSQL locale utilizzando PgAdmin come interfaccia di amministrazione.

## Istruzioni per l'uso

1. **Avvio del database e di PgAdmin**

   Per avviare il database PostgreSQL e PgAdmin, esegui il seguente comando dalla radice del progetto:

   ```
   docker-compose up -d
   ```

   Questo avvierà due servizi: uno per il database PostgreSQL e l'altro per PgAdmin.

2. **Accesso a PgAdmin**

   Una volta che i container sono in esecuzione, puoi accedere a PgAdmin tramite il tuo browser all'indirizzo [http://localhost:5050](http://localhost:5050).

   Utilizza le seguenti credenziali predefinite per accedere a PgAdmin:

   - **Email:** admin@admin.com
   - **Password:** root

3. **Creazione di un nuovo utente e database nel database**

   Dopo aver effettuato l'accesso a PgAdmin, è necessario creare un nuovo utente e un nuovo database all'interno del database PostgreSQL.

   Per fare ciò, segui i passaggi seguenti:

   - Accedi all'interno dello shell del container Docker appena creato utilizzando il seguente comando:

     ```
     docker exec -it postgres_container sh
     ```

   - Una volta all'interno del container Docker, connettiti al database PostgreSQL utilizzando il comando seguente:

     ```
     psql postgres
     ```

   - A questo punto, puoi eseguire i seguenti comandi SQL per creare un nuovo utente e un nuovo database:

     ```sql
     CREATE USER nome-utente SUPERUSER;
     CREATE DATABASE threads-clone WITH OWNER nome-utente;
     ```

     Sostituisci `nome-utente` con il nome desiderato per il nuovo utente e `threads-clone` con il nome del nuovo database.

## Note aggiuntive

- Assicurati di controllare lo stato dei container Docker utilizzando il comando `docker-compose ps`.
- Per fermare i container, esegui il comando `docker-compose down`.
