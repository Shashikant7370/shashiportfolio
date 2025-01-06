import React from 'react'

const certificates = [
  {
    src: "/certificates/css_bombay.pdf",
    img: "/certificates/images/1.png",
  },
  {
    src: "/certificates/html_bombay.pdf",
    img: "/certificates/images/2.png",
  },
  {
    src: "/certificates/python_bombay.pdf",
    img: "/certificates/images/3.png",
  },
  {
    src: "/certificates/python_cimage.pdf",
    img: "/certificates/images/4.png",
  },
  {
    src: "/certificates/ccna.pdf",
    img: "/certificates/images/5.png",
  },
  {
    src: "/certificates/robotics.pdf",
    img: "/certificates/images/6.png",
  },
  {
    src: "/certificates/comptia_nplus.pdf",
    img: "/certificates/images/7.png",
  },
  {
    src: "/certificates/mcse.pdf",
    img: "/certificates/images/8.png",
  },
  {
    src: "/certificates/tcs_nqt.pdf",
    img: "/certificates/images/9.png",
  },
];
function Certificates() {
  return (
    <section
      id="certificates"
      className="w-full  flex flex-col m-auto justify-center items-center bg-slate-700"
    >
      <h1 className="text-white text-4xl font-semibold">Certificates</h1>
      <div className='flex flex-wrap justify-center'>
        {certificates.map(
          (certificate, index) => (
            (
              <div className="m-4 shadow-md rounded-lg p-2 flex shadow-slate-500" key={index}>
                <div className="hover:scale-105 transition-all duration-700 ">
                  <a href={certificate.src} target="_blank">
                    <img
                      src={certificate.img}
                      className="shadow-inner w-[300px] h-[200px] shadow-slate-300 p-1 rounded-xl"
                    />
                  </a>
                </div>
              </div>
            )
          )
        )}
      </div>
    </section>
  );
}

export default Certificates