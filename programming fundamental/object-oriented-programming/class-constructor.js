class Admin {
  username = "";
  email = "";
  password = "";

  constructor(_username, _email, _password) {
    this.username = _username; //this itu kyk buat key di dalam properties object
    this.email = _email;
    this.password = _password;
  }

  displayAdminProfile() {
    return this.password;
  }
}

const admin = new Admin("Jovin01", "jovin.najwan@gmail.com", 12345); //jenis expression (new)

console.log(admin);
console.log(admin.displayAdminProfile());
