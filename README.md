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

# Gestione dell'applicazione

## Autenticazione 🔒

L'autenticazione dell'applicazione è stata implementata utilizzando Clerk. Clerk semplifica il processo di registrazione, accesso e gestione delle credenziali degli utenti, fornendo una solida base per garantire la sicurezza dell'applicazione.
Di seguito la documentazione ufficiale di [Clerk](https://clerk.com/docs/quickstarts/nextjs)

## ORM 💾

Per semplificare l'interfacciamento con il db è stato scelto l'ORM Drizzle. Un ORM (Object-Relational Mapping) è un concetto e un'implementazione software che facilita la conversione e l'interazione tra oggetti in un linguaggio di programmazione orientato agli oggetti e le tabelle di un database relazionale.
Permette agli sviluppatori di lavorare con oggetti nel proprio codice, senza dover scrivere direttamente le query SQL per interagire con il database.
Di seguito la documentazione ufficiale di [Drizzle](https://orm.drizzle.team/docs/overview)

## Gestione dei form con Formik 🥁

Formik è stato integrato nell'applicazione per semplificare la gestione dei form. Possiamo gestire facilmente la validazione dei campi, la gestione dello stato del form e la sottomissione dei dati in modo intuitivo e senza dover scrivere codice boilerplate ripetitivo.
