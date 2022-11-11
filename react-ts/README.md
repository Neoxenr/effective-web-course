# **Лабораторная 3.** React - Верстка экранов Heroes, Comics and Series

!!! **Во всех лабах по React используем функциональные компоненты и typescript !!!**

С данной лабораторной мы начинаем работать с React. В репозитории с материалами можно найти шаблон с некоторыми примерами и с конфигом для линтера. В нем можно посмотреть на рекомендуемую архитектуру проекта, на mobx стор и другие примеры.

Обрати внимание, что на данной странице [Список лабораторных работ / правила и срок сдачи](https://www.notion.so/e8f45ad5e3ee4586bbed8bf52a616599), в разделе “Критерии оценки” есть список задач в рамках React лабораторных, за которые можно получить дополнительные баллы.

Требования

- Использовать предоставленный шаблон инициализированного React приложения
- Для стилизации использовать решение на свой выбор. Можно использовать какой-либо UI Kit с готовыми компонентами (например, Material UI) / CSS Modules / Styled Components. Наиболее удобным решением будет использование UI Kit
- Реализовать Header и Footer. В Header’е должен быть логотип Marvel + линки для навигации по страницам приложения. Активная страница должна как-нибудь выделяться (например, быть подчеркнутой). В Footer’e должен быть также логотип Marvel, текст “Data provided by Marvel. © ${CURRENT_YEAR} MARVEL” и ссылка на сайт [developer.marvel.com](http://developer.marvel.com/)
- Реализовать экран “Characters” со списком героев
- Реализовать экран “Comics” со списком комиксов
- Реализовать экран “Series” со списком сериалов / фильмов
- В качестве данных использовать моки - временные заглушки. Создать отдельные массивы для каждой из страниц, добавить 3-4 элемента
- Реализовать навигацию между экранами, используя библиотеку [react-router](https://reactrouter.com/en/main). Рекомендуется использовать хук [useRoutes](https://reactrouter.com/en/main/hooks/use-routes). [Пример](https://github.com/remix-run/react-router/tree/dev/examples/route-objects) реализации роутинга, используя данный хук
- Компонент - карточка для героев / комиксов / сериалов должен переиспользоваться на всех трех страницах
- Реализовывать поиск не требуется, просто сверстать инпут и кнопку
- Header и Footer должно быть на каждом экране приложения

---

## Полезные материалы

- [Документация React](https://ru.reactjs.org/docs/getting-started.html)
- [Документация react-router](https://reactrouter.com/en/main)
- [Примеры использования react-router](https://github.com/remix-run/react-router/tree/dev/examples)
- Styling
    - UI Kits: [MUI](https://mui.com/core/), [Chakra UI](https://chakra-ui.com/), [Mantine](https://mantine.dev/pages/getting-started/), [NextUI](https://nextui.org/)
    - CSS Modules: [Docs](https://github.com/css-modules/css-modules), [CSS Modules in React](https://medium.com/@ralph1786/using-css-modules-in-react-app-c2079eadbb87)
    - Styled Components: [Docs](https://styled-components.com/), [статья с хабра](https://habr.com/ru/post/591381/)
    - [Linaria](https://github.com/callstack/linaria) - zero-runtime CSS in JS library