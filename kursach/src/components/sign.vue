<template>

<div class="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5" tabindex="-1" role="dialog" id="modalSignin">
    <div class="modal-dialog" role="document">
        <div class="modal-content rounded-4 shadow">
            <div class="modal-header p-5 pb-4 border-bottom-0">
                <h1 class="fw-bold mb-0 fs-2">Авторизация</h1>
            </div>
            <div class="modal-body p-5 pt-0">
                <form>
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control rounded-3" v-model="userMail" placeholder="name@example.com">
                        <label for="floatingInput">Электронная почта</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="password" class="form-control rounded-3" v-model="userPas" placeholder="Password">
                        <label for="floatingPassword">Пароль</label>
                    </div>
                    <button class="w-100 mb-2 btn btn-lg rounded-3 btn-primary" @click.prevent="sendData">Войти</button>
                    <p style="color:red;">{{ error }}</p>
                    <small class="text-body-secondary">Нет аккаунта? <router-link to="/auth">Зарегистрироваться</router-link></small>
                </form>
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
  </template>
  
  <script>
export default {
    data() {
        return {
            users: [],
            error: '',
            userMail: '',
            userPas: '',
        }
    },
    methods: {
        sendData() {
            if (this.userMail === '') {
                this.error = 'Введите почту';
                return;
            } else if (this.userPas === '') {
                this.error = 'Введите пароль';
                return;
            }
        }
    }
}
  </script>
  
  <style scoped>
  
  </style>