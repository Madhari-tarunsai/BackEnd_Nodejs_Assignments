function authdetails(req, res) {
  const data = { email: "tarunsai@gmail.com", password: "1234@5678" };
  const { email, password } = req.body;

  const profile =
    email === data.email && password === data.password
      ? "login successfully done"
      : "login failed, enter correct details";

  return res.send(profile);
}

module.exports = { authdetails };
