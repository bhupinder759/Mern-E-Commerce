const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox", //live or sandbox
  client_id: "Abpl1k1HO7P5nnEVASdkPvxAUo904xBAUMd3A-iC50SBFuh80Jkr0ANDq0uwUpkXox6WN045CwOKXZ9P",
  client_secret: "EOSc2Vn288TwIChsBYe_FLcRwvaDRGmvm9wXKf0TIUtkbpi8foxBEtffoOTqvkr_8nAEz5emvkkuXBMP",
});

module.exports = paypal;