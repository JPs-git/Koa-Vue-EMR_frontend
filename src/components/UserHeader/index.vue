<template>
  <div>
    <div class="welcome">{{ user.userInfo.name }}, 欢迎您</div>
    <a class="logout" href="javascript:;" @click="handleLogout">注销</a>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'UserHeader',
  methods: {
    handleLogout() {
      localStorage.setItem('token', '')
      this.$router.push('/login')
    },
  },
  computed: {
    ...mapState(['user']),
  },
  mounted() {
    this.$store
      .dispatch('getUserInfo')
      .then()
      .catch(() => {
        this.$router.push('/login')
      })
  },
}
</script>

<style scoped>
.welcome {
  float: left;
}
.logout {
  position: relative;
  left: 5px;
}
.logout:hover{
  color: blue;
  text-decoration:none;

}
</style>
