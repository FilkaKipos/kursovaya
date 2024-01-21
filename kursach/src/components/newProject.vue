<template>
    <div class="container" style="margin-top: 100px;">
      <div class="p-3 m-0 border-0 bd-example">
        <!-- Пример кода -->
  
        <form class="col align-self-center">
          <div class="col-md-7">
            <label for="nameProject" class="form-label">Название проекта</label>
            <input type="text" class="form-control" v-model="nameProj">
          </div>
          <div class="col-md-7">
            <label for="teamlid" class="form-label">Руководитель</label>
            <input type="text" class="form-control" v-model="lidProj">
          </div>
          <div class="col-md-7">
            <label for="error" class="form-label">Проблема</label>
            <input type="text" class="form-control" v-model="errorProj" placeholder="Актуальность">
          </div>
          <div class="col-md-7">
            <label for="celProject" class="form-label">Цель</label>
            <input type="text" class="form-control" v-model="celProj" placeholder="Что хотим получить?">
          </div>
          <div class="col-md-7">
            <label for="level" class="form-label">Уровень проекта</label>
            <input type="text" class="form-control" v-model="levelProj" placeholder="Краевой">
          </div>
          <div class="col-md-7">
            <label for="kolTeam" class="form-label"></label>
            <select v-model="kolProj" class="form-select">
              <option selected="">Кол-во участников</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
          <div class="col-md-7" style="margin-top: 10px;">
            <button type="submit" @click.prevent="sendProject" class="btn btn-primary">Создать</button>
          </div>
        </form>
      </div>
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div class="col-md-4 d-flex align-items-center">
          <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
            <svg class="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></svg>
          </a>
          <span class="mb-3 mb-md-0 text-body-secondary">Курсовая работа</span>
        </div>
  
        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
          <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
          <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
        </ul>
      </footer>
    </div>
    <p>{{ newProject }}</p>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newProject: [],
        nameProj: '',
        lidProj: '',
        errorProj: '',
        celProj: '',
        levelProj: '',
        kolProj: '',
      }
    },
    methods: {
      sendProject() {
        const project = {
          name: this.nameProj,
          leader: this.lidProj,
          problem: this.errorProj,
          goal: this.celProj,
          level: this.levelProj,
          teamSize: this.kolProj,
        };
        this.newProject.push(project);
        this.resetForm(); // Опционально сбросить значения полей формы после отправки
      },
      resetForm() {
        this.nameProj = '';
        this.lidProj = '';
        this.errorProj = '';
        this.celProj = '';
        this.levelProj = '';
        this.kolProj = '';
      },
    },
  };
  </script>
  
  <style scoped>
    .body {
      background: white;
    }
  </style>