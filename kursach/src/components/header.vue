<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
</script>
<template>
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <router-link to="/home" class="navbar-brand">Список проектов</router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <router-link to="/projects" class="nav-link">Список проектов</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/new-project" class="nav-link">Создать новый проект</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/sign" class="nav-link">Войти</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </template>
<style>
</style>