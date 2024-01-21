<template>
  <body class="body" style="margin-top: 100px;">
  <div class="container">
  <div class="p-3 m-0 border-0 bd-example" >
    <h3 style="margin-bottom: 20px;">Список актуальных проектов</h3>
    <div v-for="proj in newProject" :key="proj.name">
        <p class="h5" style="margin-top: 10px; margin-bottom: 10px;">Название проекта: {{ proj.name }}</p>
      <div :id="'collapse-' + proj.name" class="collapse show">
        <div class="card card-body">
          <p><strong>Руководитель:</strong> {{ proj.leader }}</p>
          <p><strong>Проблема:</strong> {{ proj.problem }}</p>
          <p><strong>Цель:</strong> {{ proj.goal }}</p>
          <p><strong>Уровень проекта:</strong> {{ proj.level }}</p>
          <p><strong>Количество участников:</strong> {{ proj.teamSize }}</p>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="container">
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
</body>
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
      activeProject: null
    };
  },
  methods: {
    sendProject() {
      const project = {
        name: this.nameProj,
        leader: this.lidProj,
        problem: this.errorProj,
        goal: this.celProj,
        level: this.levelProj,
        teamSize: this.kolProj
      };
      this.newProject.push(project);
      this.resetForm();
    },
    resetForm() {
      this.nameProj = '';
      this.lidProj = '';
      this.errorProj = '';
      this.celProj = '';
      this.levelProj = '';
      this.kolProj = '';
    },
    toggleCollapse(projectName) {
      if (this.activeProject === projectName) {
        this.activeProject = null;
      } else {
        this.activeProject = projectName;
      }
    },
    isCollapsed(projectName) {
      return this.activeProject !== projectName;
    }
  }
};
</script>

<style scoped>

.body {
  background: white;
  height: 700px;
   overflow: auto;
}
</style>