/*zakres funkcjonalny:
dodawanie nowego towaru do listy
podawanie kodu ean, nazwy, kategorii i lokalizacji w magazynie
podawanie ilosci towaru
sprawdzanie poprawnosci danych
sprawdzanie czy kod ean nie jest juz wykorzystywany
wyswietlanie dodanych towarow i przechowywanie ich w pamieci
czyszczenie formularza po dodaniu nowego towaru*/






interface Towar {
    ean: string;
    nazwa: string;
    kategoria: string;
    sektor: string;
    regal: string;
    polka: string;
    ilosc: number;
}

//pobieranie elementow z html
const formularz = document.getElementById("formularz") as HTMLFormElement;
const komunikat = document.getElementById("komunikat") as HTMLParagraphElement;
const lista = document.getElementById("lista") as HTMLTableSectionElement;
const ean = document.getElementById("ean") as HTMLInputElement;
const nazwa = document.getElementById("nazwa") as HTMLInputElement;
const kategoria = document.getElementById("kategoria") as HTMLInputElement;
const sektor = document.getElementById("sektor") as HTMLInputElement;
const regal = document.getElementById("regal") as HTMLInputElement;
const polka = document.getElementById("polka") as HTMLInputElement;
const ilosc = document.getElementById("ilosc") as HTMLInputElement;

//tablica przechowujaca dodane towary
const towary: Towar[] = [];

//obsluga formularza po kliknieciu przycisku dodawania
formularz.addEventListener("submit", function (e) {
    //blokowanie odswierzania strony po wyslaniu formularza
    e.preventDefault();

    //pobieranie danych z formularza i tworzenie nowego obiektu towaru
    const nowyTowar: Towar = {
        ean: ean.value.trim(),
        nazwa: nazwa.value.trim(),
        kategoria: kategoria.value.trim(),
        sektor: sektor.value.trim(),
        regal: regal.value.trim(),
        polka: polka.value.trim(),
        ilosc: Number(ilosc.value)
    };

    //sprawdzanie czy pola sa wypelnione i czy ilosc jest poprawna
    if (nowyTowar.ean === "" || nowyTowar.nazwa === "" || nowyTowar.kategoria === "" || nowyTowar.sektor === "" || nowyTowar.regal === "" || nowyTowar.polka === "" || ilosc.value === "" ||
        !Number.isInteger(nowyTowar.ilosc) || nowyTowar.ilosc < 0) {
        komunikat.textContent = "Uzupełnij poprawnie wszystkie pola.";
        return;
    }

    //sprawdzanie czy istnieje juz towar o takim samym kodzie ean
    if (towary.some(t => t.ean === nowyTowar.ean)) {
        komunikat.textContent = "Towar o takim kodzie EAN już istnieje.";
        return;
    }

    //dodawanie nowego towaru do tablicy
    towary.push(nowyTowar);

    //tworzenie nowego wiersza tabeli
    const wiersz = document.createElement("tr");

    //przygotowanie danych towaru do wyswietlenia w tabeli
    const dane = [nowyTowar.ean, nowyTowar.nazwa, nowyTowar.kategoria, "Sektor " + nowyTowar.sektor + ", regał " + nowyTowar.regal + ", półka " + nowyTowar.polka, String(nowyTowar.ilosc)];

    //tworzenie komorek tabeli dla kazdej wartosci
    dane.forEach(function (wartosc) {
        const komorka = document.createElement("td");
        komorka.textContent = wartosc;
        wiersz.appendChild(komorka);
    });

    //dodawanie do tabeli
    lista.appendChild(wiersz);

    //wyswietlanie komunikatu i czyszczenie formularza
    komunikat.textContent = "Towar został dodany pomyślnie.";
    formularz.reset();
});

/*ZRODLA Z KTORYCH KORZYSTALEM:
w3schools
typescriptlang
chatgpt - tlumaczenie uzywania niektorych funkcji, przyklady itp, bledy npma. nie do generowania kodu.
*/