export function getToken() {
  return localStorage.getItem("ant-cloud-token");
}

export function setToken(token) {
  return localStorage.setItem("ant-cloud-token", token);
}
