<template>
  <div>
    <input type="text" placeholder="账户名/手机号/Email">
    <input type="password" placeholder="请输入您的密码">
    <button>登录</button>
    <div class="login_link">
      <a href="#">立即注册</a>
      <a href="#">找回密码</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login"
}
</script>

<style lang="scss" scoped>
input {
  height: 40px;
  color: gray;
  font-size: 12px;
  border: none;
  border-bottom: 1px solid gray;
  width: 100%;
  outline: none;
  text-indent: 10px;
}
button {
  background-color: #e54847;
  border: none;
  border-radius: 3px;
  width: 95%;
  margin: 12px 10px 8px 10px;
  height: 50px;
  color: white;
  font-size: 20px;
}
.login_link {
  display: flex;
  justify-content: space-between;
}
a {
  display: flex;
  justify-content: space-between;
  color: #e54847;
  text-decoration: none;
  font-size: 12px;
  margin: 0 5px;
}
</style>