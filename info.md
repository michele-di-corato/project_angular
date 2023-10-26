Scopo dell'applicazione:
Creare un applicazione che riesca a gestire - utenti - luoghi per vacanza

Per ogni entità è richiesta

- una lista
- un dettaglio
- modifica
- eliminazione

Sarà posibile inserire uno o più utenti ed uno o più luoghi di vacanza e quindi, attraverso delle CRUD inserite nell'apposito service gestire le operazioni sulle entità.

L'applicazione prevede:

- la visualizzazione delle entità attraverso una lista:
  - per gli utenti sarà visualizzato il nome e cognome concatenati
  - per il luogo sarà visualizzato la città, la nazione e la stagione preferita, concatenati.
  - al click sulla riga si visualizza azione dettaglio mentre le azioni Modifica ed Elimina attreverso lo sliding (a destra elimina, a sinistra modifica)
- un dettaglio che rappresenta tutte le informazioni per ogni entità
- una form di modifica che permette la modifica degli stessi dati (visualizzando in modo opportuno il valore nei selettori e poterli modificare)
- creazione delle entità, con opportuna form di inserimento

---

ENTITA' DI DATO (interfacce)

Entità UserDto

- id (numerico)
- name (stringa)
- surname (stringa, required)
- sex (numerico, id enum Sex)
- year (numerico, required)
- residence (stringa, required)
- favoriteTypeHoliday (numerico, id enum HolidayType)
- favoritePlace (numerico, id luogo)

Entità PlaceDto

- id (numerico)
- country (stringa, required)
- city (stringa, required)
- favoriteSeason (numerico, id enum Season, required)
- typeHoliday (numerico, id enum HolidayType, required)
- temperatureMax (numerico)
- temperatureMin (numerico)

Enum Sex

- Man
- Woman
- Other

Enum HolidayType

- Adventure
- Relax
- Family
- Culture

Enum Season

- Spring
- Summer
- Autumn
- Winter

---

CAMPI NELLA FORM

Entità UserForm

- id (numerico)
- name (stringa)
- surname (stringa)
- sex (selettore)
  - componente ion-select con le seguenti option: Uomo, Donna, Altro
- year (numerico)
- residence (stringa)
- favoriteTypeHoliday (selettore)
  - componente ion-select con le seguenti option: Avventura, Relax, Per famiglie, Cultura
- favoritePlace (selettore)
  - che contiene la lista dei luoghi inseriti

Entità PlaceForm

- id (numerico)
- country (stringa)
- city (stringa)
- favoriteSeason (selettore)
  - componente ion-select con le seguenti option: Primavera, Estate, Autunno, Inverno
- typeHoliday (selettore)
  - componente ion-select con le seguenti option: Avventura, Relax, Per famiglie, Cultura
- temperatureMax (numerico)
- temperatureMin (numerico)

Tutti i selettori saranno della forma
{
id: numerico (derivato dell'enum)
label: stringa
}

Tutti i dati saranno gestiti attraverso un Subject, ogni entità avrà il suo e le azioni CRUD per gestire la creazione, la modifica e l'eliminazione andranno a modificare l'array legato al Subject specifico.
