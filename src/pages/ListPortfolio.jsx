import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import Preloader from "../components/Preloader";
import "../css/tailwind.css";
import "../css/style.css";
import "../css/lightbox.min.css";
import Footer from "../components/Footer";

function ListPortfolio() {
  const myData = [
    {
      id: 1,
      image: "ginzas-birthday/thumbnail/thumbnail.jpg",
      title: "GINZA'S BIRTHDAY",
      category: "(DOCUMENTATION)",
      link: "01",
    },
    {
      id: 2,
      image: "halim-prewedding/thumbnail/thumbnail.jpg",
      title: "HALIM",
      category: "(PRE-WEDDING)",
      link: "02",
    },
    {
      id: 3,
      image: "ichas-birthday/thumbnail/thumbnail.jpg",
      title: "ICHA'S BIRTHDAY",
      category: "(DOCUMENTATION)",
      link: "03",
    },
    {
      id: 4,
      image: "lentera-coffee/thumbnail/thumbnail.jpg",
      title: "LENTERA COFFEE",
      category: "(PRODUCT)",
      link: "04",
    },
    {
      id: 5,
      image: "macaire/thumbnail/thumbnail.jpg",
      title: "MACAIRE",
      category: "(PRODUCT)",
      link: "05",
    },
    {
      id: 6,
      image: "mitas-birthday/thumbnail/thumbnail.jpg",
      title: "MITA'S BIRTHDAY",
      category: "(DOCUMENTATION)",
      link: "06",
    },
    {
      id: 7,
      image: "nazla-clothes/thumbnail/thumbnail.jpg",
      title: "NAZLA CLOTHES",
      category: "(PHOTO SHOOT)",
      link: "07",
    },
    {
      id: 8,
      image: "faizal-graduation/thumbnail/thumbnail.jpg",
      title: "FAIZAL GRADUATION",
      category: "(DOCUMENTATION)",
      link: "08",
    },
    {
      id: 9,
      image: "reni-prewedding/thumbnail/thumbnail.jpg",
      title: "RENI",
      category: "(PRE-WEDDING)",
      link: "09",
    },
    {
      id: 10,
      image: "rosita-prewedding/thumbnail/thumbnail.jpg",
      title: "ROSITA",
      category: "(PRE-WEDDING)",
      link: "10",
    },
    {
      id: 11,
      image: "sely-hunting/thumbnail/thumbnail.jpg",
      title: "SELY",
      category: "(HUNTING)",
      link: "11",
    },
    {
      id: 12,
      image: "tenang-coffee/thumbnail/thumbnail.jpg",
      title: "TENANG COFFEE",
      category: "(PRODUCT)",
      link: "12",
    },
    {
      id: 13,
      image: "irma-jabar/thumbnail/thumbnail.jpg",
      title: "IRMA JABAR",
      category: "(DOCUMENTATION)",
      link: "13",
    },
    {
      id: 14,
      image: "muhibah-angklung/thumbnail/thumbnail.jpg",
      title: "MUHIBAH ANGKLUNG",
      category: "(DOCUMENTATION)",
      link: "14",
    },
    {
      id: 15,
      image: "aya-music-cover/thumbnail/thumbnail.jpg",
      title: "AYA",
      category: "(MUSIC COVER)",
      link: "15",
    },
    {
      id: 16,
      image: "hkbp-bandung/thumbnail/thumbnail.jpg",
      title: "HKBP BANDUNG",
      category: "(DOCUMENTATION)",
      link: "16",
    },
    {
      id: 17,
      image: "safiy-kitchen/thumbnail/thumbnail.jpg",
      title: "SAFIY KITCHEN",
      category: "(CONTENT)",
      link: "17",
    },
    {
      id: 18,
      image: "rumah-batik-wijaya/thumbnail/thumbnail.jpg",
      title: "RUMAH BATIK WIJAYA",
      category: "(PRODUCT)",
      link: "18",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 21;

  // Menghitung jumlah total halaman
  const totalPages = Math.ceil(myData.length / perPage);

  // Menghitung index awal dan akhir data untuk halaman yang sedang aktif
  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;

  // Membuat array data yang ditampilkan pada halaman aktif
  const currentData = myData.slice(startIndex, endIndex);

  useEffect(() => {
    const html = document.querySelector("html");
    const body = document.querySelector("body");
    body.classList.add("bg-img-portfolio");
    if (html.className === "dark") {
      body.setAttribute("style", "background-image: url(./background-dark.jpg);");
    } else {
      body.setAttribute("style", "background-image: url(./background.jpg);");
    }

    return () => {
      body.classList.remove("bg-img-portfolio");
      body.removeAttribute("style");
    };
  }, []);
  return (
    <>
      <Preloader />
      <section className="container mx-auto px-5" style={{ minHeight: "100vh" }}>
        <div className="flex items-center py-10">
          <div className="flex items-center" style={{ minWidth: "max-content" }}>
            <div>
              <h1 className="text-4xl font-semibold dark:text-white">
                PORTFOL<span className="text-red-600">IO</span>
              </h1>
              <p className="block text-right text-base font-semibold tracking-widest dark:text-white">- DIZETO -</p>
            </div>
            <div className="flex items-center pl-20" style={{ width: "max-content" }}>
              <Link
                className="button-no-page mr-5 border-2 border-red-600 pt-1 font-semibold text-red-600 hover:bg-red-600 hover:text-white dark:border-white dark:bg-white dark:hover:border-red-600 dark:hover:bg-red-600"
                to="/"
              >
                <BsArrowLeft className="mx-auto my-1" />
              </Link>
              {Array.from({ length: totalPages }).map((_, index) => {
                const pageNumber = index + 1;
                if (pageNumber === currentPage) {
                  return (
                    <button key={pageNumber} className="button-no-page mr-5 border-2 border-red-600 bg-red-600 font-semibold text-white">
                      {pageNumber}
                    </button>
                  );
                } else {
                  return (
                    <button
                      key={pageNumber}
                      className="button-no-page mr-5 border-2 border-red-600 font-semibold text-red-600 hover:bg-red-600 hover:text-white dark:border-white dark:bg-white dark:hover:border-red-600 dark:hover:bg-red-600"
                      onClick={() => setCurrentPage(pageNumber)}
                    >
                      {pageNumber}
                    </button>
                  );
                }
              })}
            </div>
          </div>
          <div className="red-line-h-portfolio"></div>
        </div>
        <div>
          <ul className="c-grid-cols grid gap-5 pb-10">
            {currentData.map((item) => (
              <li key={item.id}>
                <div
                  className="rounded-md border border-gray-100 bg-white hover:border-red-600 dark:border-gray-700 dark:bg-dark dark:hover:border-red-600"
                  style={{ width: "100%", height: "max-content" }}
                >
                  <div className="canvas m-2">
                    <img className="scale-image rounded-md" src={require(`../assets/uploads/${item.image}`)} alt={item.title} />
                  </div>
                  <div className="red-line-h"></div>
                  <div>
                    <h3 className="px-2 text-center text-lg font-semibold dark:text-white sm:text-base lg:text-lg">{item.title}</h3>
                    <h4 className="pb-2 text-center text-sm font-semibold dark:text-white sm:text-xs lg:text-sm">{item.category}</h4>
                  </div>
                  <div className="flex justify-center">
                    <Link className="mb-4 mt-1 border-2 border-red-600 px-10 py-2 font-semibold text-red-600 hover:bg-red-600 hover:text-white" to={`/list/section/${item.link}`}>
                      OPEN
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ListPortfolio;
