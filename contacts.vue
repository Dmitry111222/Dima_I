<template>
  <section class="page2">
  <h1>Контакты{{ $route.params.id }}</h1>
    <div class="main-text1">
      <div class="custom">
        <div class="itemFullText">
          <h4>По вопросам организации концертов группы 25/17:</h4>
          <p>
             Дурманов Илья
             Электронная почта: ilyadurmanov2517@mail.ru
             Телефон: +7 954 582 79 87
          </p>
          <br>
          <h4>Менеджер:</h4>
          <p>
          Алена Брандель
          Электронная почта: alyonabr@mail.ru
          Телефон: +7 926 446 87 34, +43 6763094217<br>
          </p>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </section>
</template>
