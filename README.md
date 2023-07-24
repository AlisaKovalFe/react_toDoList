Логика реализация кастомного хука useLocalStorage (определение кастомного хука - это любая ф-ция, которая не является компоннетом, но внутри себя использует хуки реакт)

useLocalStorage является кастомным хуком ==> должен внутри себя использовать хуки реакта. Так как нам нужно менять состояние массива list будем использовать useState. ==>

в файле Main.js нужно вызвать наш кастомный хук useLocalStorage.

2.1) при вызове useLocalStorage 1м аргументом передаем начальное значение (у нас пустой массив) и ключ, так хранилище должно иметь ключ и то, что хранится по ключу.

2.2) По определениею useState возвращет массив, состоящий из состония и ф-ции для его изменения (чтобы реакт смог отледить изменение стейта и перерисовать шаблон). С помощью синтаксиса деструктуризации эти результаты заносятся в переменные (1-состояние, 2-ф-ция для изменения состония). ==>

2.3) кастомный хук useLocalStorage также должен возвращать состония и ф-ции для его изменения ==>

const [list, setList] = useLocalStorage([], "plan")

в файле useLS.js прописывает кастомный хук.

3.1) создаем и экспортируем ф-цию useLocalStorage 3.2) в качестве аргументов передаем некое начальное значение (у нас это пустой массив) и ключ (так же, как и в п. 2.1) 3.3) сразу пишем, что возвращаем из ф-ции массив, состоящий из состония и ф-ции для его изменения (так же, как и в п. 2.3). у нас это [value, setValue] ==>

3.4) нам нужно где-то брать начально состояние value (там мб не пустой массив, так как хранилище мб непустым), для этого создаем вложенную ф-цию getValue и передаем ее в качестве начального значения value в useState. // Вопрос: почему передаем, а не вызываем?? почему так работает??

3.5) ф-ция getValue ничего не принимает и дефолтно возвращает начальное значение (аргумент ф-ции useLocalStorage). 3.6) в ф-ции getValue создаем переменную хранилище, в которую поместим то, что взяли из локал хранилища по ключу const storage = localStorage.getItem(key)

3.7) далее нужно проверить пустое ли на данный момент хранилище или нет. Если нет, то мы должны попытаться взять оттуда данные через парсинг хранилища (там в любом случае лежит строка, поэтому парсим). Если не получается распарсить, значит возвращем дефолтное начальное значение.

    // Вопрос: зачем нам делать try catch не понима, можно ведь просто через if else?

3.8) нам нужно сохранять данные в хранилище ==> используем хук useEffect 3.9) в useEffect указываем, что при изменение ключа или того, что лежит в хранилище (value), нужно в хралище по ключу (аргумент в useLocalStorage) сохранять в виде строки новое value.

// Вопрос: правильно я понимаю, что value будет обновляться, когда будет срабатывать setValue, а на самом деле setList (когда задача будет добаляться в массив через setList), который прописан в файле Main. И получается useEffect в файле useLS будет понимать, что произошел setList и поэтому уюдет перезаписывать хранилище?
