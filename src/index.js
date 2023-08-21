const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  nav: {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  cta: {
    h1: "Bu DOM Mükemmel",
    button: "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik":
      "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik":
      "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği":
      "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği":
      "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği":
      "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  iletisim: {
    "iletişim-h4": "İletişim",
    adres: "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    telefon: "+90 (123) 456-7899",
    email: "satis@birsirketsitesi.com.tr",
  },
  footer: {
    copyright: "Copyright Bir Şirket Sitesi 2022",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("Proje açıldı!");

/* Kodlar Buradan aşağıya */

//nav a class isimleri ve text içerik kısımları
//dynamic object keys
const menuA = document.querySelectorAll("header nav a");
menuA.forEach((m, i) => {
  m.textContent = siteContent.nav[`nav-item-${i + 1}`];
  m.classList.add("italic");
});

//img için olan DOM lar
//logo img
document
  .getElementById("logo-img")
  .setAttribute("src", siteContent.images["logo-img"]);
//cta img
document
  .getElementById("cta-img")
  .setAttribute("src", siteContent.images["cta-img"]);
// middle img
document
  .getElementById("middle-img")
  .setAttribute("src", siteContent.images["accent-img"]);

//h1 text ekle
document.querySelector(".cta h1").textContent = siteContent.cta.h1;
//button text ekle
document.querySelector("button").textContent = siteContent.cta.button;

//section main kısmı için
const contentKeys = Object.keys(siteContent["ana-içerik"]);

const contentBody = document.querySelectorAll(".text-content");
//listeden h4 ve p leri sırayla alıcaz
contentBody.forEach((c, i) => {
  c.querySelector("h4").textContent =
    siteContent["ana-içerik"][contentKeys[i * 2]];
  c.querySelector("p").textContent =
    siteContent["ana-içerik"][contentKeys[i * 2 + 1]];
});

//section contact kısmı
//h4
document.querySelector(".contact h4").textContent =
  siteContent.iletisim["iletişim-h4"];

const contactKeys = Object.keys(siteContent.iletisim);
// ["iletişim-h4","adres","telefon","email"]
const pContact = document.querySelectorAll(".contact p");

pContact.forEach((c, i) => {
  c.textContent = siteContent.iletisim[contactKeys[i + 1]];
});

//footer kısmı

const footerCopy = document.querySelector("footer a");
footerCopy.textContent = siteContent.footer["copyright"];
footerCopy.classList.add("bold");
