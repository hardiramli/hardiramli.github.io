<template>
 
      <form @submit.prevent="onSubmit">
        <v-row>
        <v-col class="input">
          <label for="user">User ID</label>
          <input
                  type="user"
                  id="user"
                  v-model="user">
        </v-col>
        </v-row>
        <v-row>
        <v-col class="input">
          <label for="password">Password</label>
          <input
                  type="password"
                  id="password"
                  v-model="password">
        </v-col>
        </v-row>

        <div class="submit">
          <v-btn type="submit" block>Login</v-btn>
        </div>
      </form>

</template>

<script>
  export default {
    data () {
      return {
        user: '',
        password: ''
      }
    },
    methods: {
      onSubmit () {
        const formData = {
          user: this.user,
          password: this.password,
        }
        console.log(formData)
        this.$store.dispatch('login', {user: formData.user, password: formData.password}).then(() => this.$router.push(this.$route.query.redirect || '/'))
      }
    }
  }
</script>

<style scoped>
  .signin-form {
    border: 0px solid #eee;
    box-shadow: 0 0px 0px #ccc;
  }

  .input {
    margin: 10px auto;
  }

  .input label {
    display: block;
    color: #4e4e4e;
    margin-bottom: 6px;
  }

  .input input {
    font: inherit;
    width: 100%;
    padding: 6px 12px;
    border: 0;
    outline: 0;
    border-bottom: 2px solid rgb(54, 164, 253);
  }

  .input input:focus {
    outline: none;
    border-bottom: 2px solid #521751;
    
  }

  .submit button {
    border: 1px solid rgb(54, 164, 253);
    color: rgb(54, 164, 253);
    padding: 10px 20px;
    font: inherit;
    cursor: pointer;
  }

  .submit button:hover,
  .submit button:active {
    background-color: rgb(54, 164, 253);
    color: white;
  }

  .submit button[disabled],
  .submit button[disabled]:hover,
  .submit button[disabled]:active {
    border: 1px solid #ccc;
    background-color: transparent;
    color: #ccc;
    cursor: not-allowed;
  }
</style>