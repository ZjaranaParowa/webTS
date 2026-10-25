"use strict";
const formularz = document.getElementById("formularz");
const komunikat = document.getElementById("komunikat");
const lista = document.getElementById("lista");
const ean = document.getElementById("ean");
const nazwa = document.getElementById("nazwa");
const kategoria = document.getElementById("kategoria");
const sektor = document.getElementById("sektor");
const regal = document.getElementById("regal");
const polka = document.getElementById("polka");
const ilosc = document.getElementById("ilosc");
const towary = [];
formularz.addEventListener("submit", function (e) {
    e.preventDefault();
    const nowyTowar = {
        ean: ean.value.trim(),
        nazwa: nazwa.value.trim(),
        kategoria: kategoria.value.trim(),
        sektor: sektor.value.trim(),
        regal: regal.value.trim(),
        polka: polka.value.trim(),
        ilosc: Number(ilosc.value)
    };
    if (nowyTowar.ean === "" || nowyTowar.nazwa === "" || nowyTowar.kategoria === "" || nowyTowar.sektor === "" || nowyTowar.regal === "" || nowyTowar.polka === "" || ilosc.value === "" ||
        !Number.isInteger(nowyTowar.ilosc) || nowyTowar.ilosc < 0) {
        komunikat.textContent = "Uzupełnij poprawnie wszystkie pola.";
        return;
    }
    if (towary.some(t => t.ean === nowyTowar.ean)) {
        komunikat.textContent = "Towar o takim kodzie EAN już istnieje.";
        return;
    }
    towary.push(nowyTowar);
    const wiersz = document.createElement("tr");
    const dane = [nowyTowar.ean, nowyTowar.nazwa, nowyTowar.kategoria, "Sektor " + nowyTowar.sektor + ", regał " + nowyTowar.regal + ", półka " + nowyTowar.polka, String(nowyTowar.ilosc)];
    dane.forEach(function (wartosc) {
        const komorka = document.createElement("td");
        komorka.textContent = wartosc;
        wiersz.appendChild(komorka);
    });
    lista.appendChild(wiersz);
    komunikat.textContent = "Towar został dodany pomyślnie.";
    formularz.reset();
});
