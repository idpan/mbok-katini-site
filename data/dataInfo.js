module.exports = {
  phoneNumber: "081284799737",
  whatsapp_link: function (text) {
    return `https://api.whatsapp.com/send/?phone=62${this.phoneNumber.substring(
      1
    )}&text=${text.split(" ").join("%20")}`;
  },
  location: "Jl.Made no.39 Pamulang Barat",
  location_link: "https://goo.gl/maps/c2dEdg88XBfC5igC8",
  gofood_link: "https://gofood.link/a/FhwGhuY",
  instagram_link:
    "https://instagram.com/waroengmakan_mbokkatini?igshid=YmMyMTA2M2Y=",
};
