# Grakonosze

Gra terenowa zrealizowana w ramach Hackationu z przedmiotu Inżynieria Oprogramowania w roku 2023/2024.

## Wizja projektu

### Elevator Pitch

Dla uczniów szkół średnich, którzy chcą studiować informatykę, nasza gra terenowa na dni otwarte AGH jest innowacyjną formą interaktywnej zabawy edukacyjnej, pozwalającą na odkrycie Wydziału Informatyki. W odróżnieniu od tradycyjnych dni otwartych, nasz produkt daje uczestnikom możliwość poznania kierunku studiów, ale także poznanie dydaktyków w przystępnej formie jaką są mini gry edukacyjne.

### Cel i Misja Projektu

**Cel**: Stworzenie angażującej i interaktywnej gry terenowej, która pozwoli uczniom szkół średnich na lepsze zrozumienie i poznanie Wydziału Informatyki AGH oraz zainteresowanie ich studiami na kierunkach informatycznych.

**Misja**: Naszym celem jest nie tylko zaprezentowanie możliwości studiowania informatyki na AGH, ale także zainspirowanie przyszłych studentów do podjęcia tego kierunku poprzez interaktywną i edukacyjną zabawę. Chcemy, aby uczestnicy mogli poznać naszych wykładowców, studentów oraz realia studiowania w przystępny i angażujący sposób.

### Opis Projektu

**"Grakonosze"** to gra terenowa zaprojektowana specjalnie na dni otwarte AGH dla Wydziału Informatyki.
Uczestnicy będą poruszać się po kampusie, skanując kody QR rozmieszczone w różnych punktach kontrolnych. Każdy kod QR odblokowuje mini grę edukacyjną, która testuje różne umiejętności informatyczne i logiczne. Po ukończeniu mini gry, uczestnik otrzymuje token w formie wirtualnego pieniążka z wizerunkiem dydaktyka WI AGH, w kolorze zależnym od wyniku (brąz, srebro, złoto, diament). Dodatkową funkcją będą kody QR zaszyte w prezentacjach i pokazach podczas dnia otwartego za które dostaje się tokeny bonusy, które nie ma pod sobą mini gierek. Na koniec, w zależności od uzyskanej ilości punktów, uczestnik otrzymuje nagrodę.

**Mini gry**:

- **Optymalizacja sieci neuronowych** - gracz przesuwając suwakami stara się znaleźć się najlepsze wartości parametrów sieci neuronowych. Im lepsze dopasowanie tym więcej punktów gracz uzyska.
- **Geoguesser** - gra polegająca na wskazaniu na schemacie budynku D17 trzech miejsc, które na podstawie zaznaczonych odległości przeliczy ilość punktów, które zostanął zmapowane na poziom tokenu.
- **"Zdjęcie z.."** - gracz musi zrobić zdjęcie z wymienioną w zadaniu osobą. Aplikacja zweryfikuje poprawność zdjęcia i na tej podstawie przyzna token o odpowiednim poziomie.
- **Puzzle** - gracz przesuwając jeden puzzel w czasie i o jedno pole musi ułożyć dany obrazek.
- **Find QR code** - kody QR zaszyte w prezentacjach. Dany kod QR odpowiada danemu poziomowi tokenu.

Na koniec dnia zostanie ukazany **score board dla wszystkich graczy** i 3 najlepsze osoby otrzymają główne nagrody z "wysyłką do domu" lub do odebrania na terenie AGH.

### Grupa Docelowa

Nasza gra jest skierowana do uczniów szkół średnich, szczególnie tych, którzy są zainteresowani studiami na kierunku informatyka. Główną grupą docelową są uczniowie ostatnich klas, którzy rozważają aplikację na studia wyższe w nadchodzącym roku akademickim.

### Wymagania funkcjonalne

1. **Gra terenowa dla uczniów szkół średnich**: Gra musi być możliwa do zrealizowania zarówno w budynku Wydziału Informatyki, jak i na terenie całego kampusu AGH.
2. **Czas gry**: Cała gra powinna być możliwa do przeprowadzenia w ciągu 1-2 godzin, aby zmieścić się w harmonogramie dnia otwartego.
3. **Dostęp do mini gier**: Uczestnicy powinni móc wchodzić do mini gier za pomocą kodów QR, które będą umieszczone w różnych punktach kontrolnych.
4. **System nagród i progresji**: Gra musi zawierać system nagród i progresji, który umożliwi realizację różnych typów nagród za ukończenie zadań.

### Stos technologiczny

- **Frontend**: [React Native](https://reactnative.dev/) - do stworzenia aplikacji mobilnej, która będzie interfejsem dla graczy.
- **Backend**: [FastAPI](https://fastapi.tiangolo.com/) - do zarządzania logiką gry, autoryzacji użytkowników, punktami kontrolnymi i zadaniami.

### Koncepcja interfejsu użytkownika - przykładowe ekrany

Makiety UI zaimplementowane zostały w **Figmie: [link](https://www.figma.com/proto/zLwlb5mijGz9pDexNVcsQA/Grakonosze?node-id=5-2&m=dev&scaling=scale-down&page-id=0%3A1&t=Hs1iGgzUfzpNYYYe-1)**

### Ryzyko

- **Techniczne:** Możliwe problemy z działaniem aplikacji na różnych urządzeniach mobilnych, integracja kodów QR, zapewnienie stabilności serwera. Integracja wszystkich minigier w aplikacji,
- **Organizacyjne:** Koordynacja punktów kontrolnych i zarządzanie dużą liczbą uczestników.
- **Logistyczne:** Rozmieszczenie punktów kontrolnych, dostępność miejsc, zarządzanie czasem gry.

### Plan prac

**Faza Planowania**:

- Określenie wymagań
- Zdefiniowanie grupy docelowej

**Faza Projektowania**:

- Tworzenie makiet UI
- Zdefiniowanie staku technologicznego
- Projektowanie architektury systemu
- Projektowanie mini gier

**Faza Implementacji i testowania**:

- Implementacja frontendu
- Implementacja backendu
- Integracja frontendu z backendem
- Przeprowadzenie testów

**Faza Wdrażania**:

- Instalacja i konfiguracja na miejscu
- Testy na produkcji, czyli zabaczymy jak wszystko zadziała na najbliższym dniu otwartym ;)

**Faza Oceny**:

- Zbieranie feedbacku od uczestników
- Analiza wyników i wniosków na przyszłość

### Plany rozwoju

- Wprowadzanie wiecej mini gier
- Rozszerzenie funkcjonalności na "not location based", chcemy uzyskać wiekszą skalowalność
- Dodanie logowania i autoryzacji użytkowników

## Zespół

- [Aleksandra Poskróbek](https://github.com/Olciaaa)
- [Igor Urbanik](https://github.com/Radinyn)
- [Kacper Kotkiewicz](https://github.com/kkotkiewicz)
- [Karolina Kucia](https://github.com/kkkucia)
- [Remigiusz Kozicki](https://github.com/remekozicki)
- [Szymon Rusiecki](https://github.com/Rusiek)

# Odpalenie projektu

1. Przejdź do backend/README.md i wykonaj potrzebne inftrukcje do odpalenia backendu
2. Przejdź do frontend/README.md i wykonaj potrzebne inftrukcje do odpalenia frontendu
3. Brawo twoja aplikacja już działa ;)
