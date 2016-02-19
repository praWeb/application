var Login = (function () {
    function Login(username, password) {
        this.username = username;
        this.password = password;
        console.debug("entered");
    }
    return Login;
})();
exports.Login = Login;
var Bride = (function () {
    function Bride(name) {
        this.name = name;
    }
    return Bride;
})();
exports.Bride = Bride;
