<template>
    <div class="p-3 m-0 border-0 bd-example">
      <h1>Списко актуальных проектов</h1>
      <div v-if="project">
        <h2>{{ project.name }}</h2>
        <p>Руководитель: {{ project.leader }}</p>
        <p>Проблема: {{ project.problem }}</p>
        <p>Цель: {{ project.goal }}</p>
        <p>Уровень проекта: {{ project.level }}</p>
        <p>Количество участников: {{ project.teamSize }}</p>
      </div>
      <div v-else>
        <p>Проект не выбран.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        project: null
      };
    }
  };
  </script>
  
  <style scoped>
  /* Стили для отображения проекта */
  .body {
    background: white;
  }
  </style>