# "Основы функциональной разработки, асинхронный код"

[![Actions Status](https://github.com/alexey-sidorov-dev/otus-typescript-functional-programming/workflows/PR%20Sanity%20Check/badge.svg)](https://github.com/alexey-sidorov-dev/otus-typescript-functional-programming/actions)
[![Actions Status](https://github.com/alexey-sidorov-dev/otus-typescript-functional-programming/workflows/Coverage/badge.svg)](https://github.com/alexey-sidorov-dev/otus-typescript-functional-programming/actions)
[![Actions Status](https://github.com/alexey-sidorov-dev/otus-typescript-functional-programming/workflows/Add%20CodeSandbox%20link/badge.svg)](https://github.com/alexey-sidorov-dev/otus-typescript-functional-programming/actions)

## Домашнее задание

Реализация типовых задач с использованием OOП / ФП с покрытием кода тестами.

### Цель

Попрактиковаться в работе с TypeScript и Jest.

В ходе работы тренируются:

- работа с типами;
- решение типовых задач разработки;
- написание тестов.

### Необходимо

- создать новый репозиторий;
- настроить в нем проект (TypeScript, Jest, линтеры, GitHub Actions);
- в новой ветке решить предложенные задачи;
- сделать пуллреквест;
- сбросить пуллреквест в чат с ментором.

### Задачи

1. Написать функцию для [каррирования](https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5).

   Пример использования функции:

   ```javascript
   const func = (a, b, c, d, e) => a + b + c + d + e;

   const hof = yourFunction(func);

   console.log(hof(1, 2, 3, 4, 5)); // 15
   console.log(hof(2, 3, 4)(5, 6)); // 20
   console.log(hof(3, 4)(5, 6)(7)); // 25
   console.log(hof(4, 5)(6)(7, 8)); // 30
   console.log(hof(5)(6)(7)(8)(9)); // 35
   ```

2. Написать функцию-сумматор.

   При вызове функции с аргументами она суммирует переданные значения (полезно прочитать про методы .valueOf и .toString):

   ```javascript
   const sum = function () {
     /* put your code here */
   };

   alert(sum()); // 0;

   const s = sum();
   alert(s(1)); // 1
   alert(s(1)(2)); //3
   alert(s(3)(4)(5)); // 12

   const s3 = sum(3);

   alert(s3(5)); // 8
   alert(s3(6)); // 9
   ```

3. Реализовать функцию параллельной потоковой обработки данных.

   В конструктор передается число параллельных "потоков", которое указывает, сколько данных обрабатывается в конкретный момент времени:

   ```javascript
   const runner = new Parallel(2);

   console.log(
     await runner.jobs(
       () => new Promise((resolve) => setTimeout(resolve, 10, 1)),
       () => new Promise((resolve) => setTimeout(resolve, 50, 2)),
       () => new Promise((resolve) => setTimeout(resolve, 20, 3)),
       () => new Promise((resolve) => setTimeout(resolve, 90, 4)),
       () => new Promise((resolve) => setTimeout(resolve, 30, 5))
     )
   ); // [1, 3, 2, 4, 5];
   ```

4. Реализовать функцию, возвращающую развернутую по спирали матрицу (любой размерности):

   ```javascript
   spiral([
     [0, 1, 2, 3, 4],
     [5, 6, 7, 8, 9],
     [10, 11, 12, 13, 14],
     [15, 16, 17, 18, 19],
   ]); // [0, 1, 2, 3, 4, 9, 14, 19, 18, 17, 16, 15, 10, 5, 6, 7, 8, 13, 12, 11]
   ```

5. Реализовать функцию, реализующую сортировку с учетом правил [Semantic Versioning](https://semver.org/lang/ru/):

   ```javascript
   semverSort([
     "1.0.5",
     "2.5.0",
     "0.12.0",
     "1",
     "1.23.45",
     "1.4.50",
     "1.2.3.4.5.6.7",
   ]);
   // [ "0.12.0", "1", "1.0.5", "1.2.3.4.5.6.7", "1.4.50", "1.23.45", "2.5.0" ]
   ```

### Критерии оценки

Если в пуллреквесте не включены/не отработали линтинг и тесты из пуллреквеста, нет ссылки от GitHub Actions на CodeSandbox, задание разворачивается на доработку.

- 1 балл за реализацию, 2 балла за покрытие тестами (3 всего за каждое из заданий);
- 1 балл за корректное использование TS.

Задание считается принятым от 12 баллов.
