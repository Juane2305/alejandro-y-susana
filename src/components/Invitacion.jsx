import cancion from "../assets/song.mp3";
import CountdownCircles from "./CountdownCircles";
import GoogleCalendarButton from "./GoogleCalendarButton";
import MiIconoGift from "./DatosBancariosIcon";
import { Modal } from "./Modal";
import Asistencia from "./Asistencia";
import Footer from "./Footer";
import TextoFinal from "./TextoFinal";
import LugaresLineal from "./LugaresLineal";
import GalleryElegante from "./GalleryElegante";

import hojasDecoracionIzq from "../assets/verona/hojasDecoracionIzq.svg";
import hojasDecoracionDer from "../assets/verona/hojasDecoracionDer.svg";
import decoracionImagenes from "../assets/verona/decoracionImagenes.svg";
import decoracionDressCode from "../assets/verona/decoracionDressCode.svg";
import ringsInicio from "../assets/ringsInicio.svg";
import decoracionBajoNombres from "../assets/verona/decoracionBajoNombres.svg";

import DressCodeVerona from "./dressCodeVerona";
import MusicScreen from "./MusicScreen";

const Invitacion = () => {
  const targetDate = new Date("2026-02-14T21:30:00-03:00");

  const colorPrincipal = "#69795d";
  const colorSecundario = "#69795d";

  return (
    <div className="w-full font-robotoSerif relative overflow-hidden bg-[#f8f5f0]">
      <div className="absolute z-40">
        <MusicScreen cancion={cancion} />
      </div>

      <div
        className="relative flex flex-col justify-center items-center min-h-screen w-full text-center bg-center bg-cover font-eleganteText space-y-5 overflow-hidden"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/dfschbyq2/image/upload/v1741620131/Invitacio%CC%81n_Vertical_Boda_Casamiento_Minimalista_Verde_y_Blanco_dlihnb.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <img
          src={hojasDecoracionIzq}
          alt="Decoración Izquierda"
          className="
            absolute 
            top-0 
            -left-28
            pointer-events-none 
            w-116 
            md:w-136      
            lg:w-208 
            lg:-left-60  
            transition-all
            duration-300
          "
        />

        <img
          src={hojasDecoracionDer}
          alt="Decoración Derecha"
          className="
            absolute 
            bottom-0 
            -right-28
            pointer-events-none 
            w-116
            md:w-136
            lg:w-208
            lg:-right-60
            transition-all
            duration-300
          "
        />


        {/* <img
          src={ringsInicio}
          alt="Decoración bajo nombres"
          className="w-32 md:w-40 h-auto"
        /> */}
        <h1 className="text-6xl md:text-8xl font-marckScript text-[#4b5147] z-10 italic">
          Alejandro <br /> & <br /> Susana
        </h1>

         <img
          src={decoracionBajoNombres}
          alt="Decoración bajo nombres"
          className="w-48 sm:w-72 md:w-84 h-auto"
        /> 

        <div className="flex items-center justify-center py-2 px-4 bg-[#c8d4c1] mt-2">
          <p className="font-normal text-[#4b5147] text-lg">
            1 4 . 0 2 . 2 0 2 6
          </p>
        </div>

      </div>

      <div>
        <section
          id="contador"
          className="bg-white py-10 border-y-4 border-[#9eba8a]"
        >
          <CountdownCircles
            targetDate={targetDate}
            containerClasses="my-8"
            backgroundColor="#e5e7eb"
            progressColor="#9eba8a"
            textColor="black"
            valueClassName="text-3xl font-light"
            labelClassName="text-base font-thin"
          />
        </section>

        <div className="bg-[#69795d]">
          <div data-aos="fade-up">
            <LugaresLineal
              borderColor="border-[#a2b891]"
              buttonStyle="border-[#a2b891] text-lg"
              iglesia="Basílica San Vicente Ferrer"
              hora_iglesia="21:30hs"
              salon="Te esperamos en Formosa 1515, Godoy Cruz, Mendoza"
              hora_civil="13:00hs"
              hora_fiesta="22:15hs"
              link_ceremonia="https://maps.app.goo.gl/PQA6DDHZGgbyoMaL9"
              link_fiesta="https://maps.app.goo.gl/3mjLxYvoqp1Mfjj17"
            />
          </div>
        </div>

        <div className="relative py-16 bg-white">
          <img
            src={decoracionImagenes}
            alt="Decoración lateral"
            className="hidden md:block absolute -left-36 top-1/2 transform -translate-y-1/2 pointer-events-none"
            style={{
              width: "30rem",
              transform: "translateY(-50%) scaleX(-1)",
            }}
          />
          <img
            src={decoracionImagenes}
            alt="Decoración lateral invertida"
            className="hidden md:block absolute -right-36 top-1/2 transform -translate-y-1/2 pointer-events-none"
            style={{ width: "30rem" }}
          />
          
          <div data-aos="fade-up" className="max-w-4xl lg:max-w-lg mx-auto px-6">
              <div className="text-center mb-8">
                <img
                  src={ringsInicio}
                  alt="Decoración anillos"
                  className="w-16 lg:w-32 mx-auto opacity-80"
                />
              </div>
            <div className="relative bg-linear-to-br from-[#69795d] to-[#4b5147] p-1.5 rounded-3xl shadow-2xl">
              <div className="bg-white p-4 rounded-3xl">
                <img
                  src="https://res.cloudinary.com/dfschbyq2/image/upload/v1764772270/WhatsApp_Image_2025-12-02_at_10.35.09_AM_utekil.jpg"
                  alt="Ale & Susi"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
              
              {/* Decoración de esquinas */}
              {/* <div className="absolute -top-3 -left-3 w-8 h-8 border-t-4 border-l-4 border-[#9eba8a] rounded-tl-lg"></div>
              <div className="absolute -top-3 -right-3 w-8 h-8 border-t-4 border-r-4 border-[#9eba8a] rounded-tr-lg"></div>
              <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-4 border-l-4 border-[#9eba8a] rounded-bl-lg"></div>
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-4 border-r-4 border-[#9eba8a] rounded-br-lg"></div> */}
            </div>
            
          </div>
        </div>
        {/* 
          <div className="bg-white border border-b-4 border-[#9eba8a]">
            <InstagramWall
              userClass="text-[#4b5147]"
              logoClass="text-[#9eba8a]"
              user="@fran_y_mari"
            />
          </div> */}

        <div className="bg-[#69795d] text-center relative text-white px-3">
          <GoogleCalendarButton
            buttonClass="border-white rounded-full"
            titleCalendar="Casamiento de Alejandro y Susana"
            salon="Formosa 1515, M5501 Godoy Cruz, Mendoza, Argentina"
            fechaComienzo="20260214T221500"
            fechaFin="20260215T053000"
          />
        </div>

        <div className="relative bg-white py-10">
          <img
            src={decoracionDressCode}
            alt="Decoración DressCode Izq"
            className="hidden md:block absolute -left-20 top-1/2 transform -translate-y-1/2 pointer-events-none"
            style={{
              width: "20rem",
              transform: "translateY(-50%)",
            }}
          />
          <img
            src={decoracionDressCode}
            alt="Decoración DressCode Der"
            className="hidden md:block absolute -right-20 top-1/2 transform -translate-y-1/2 pointer-events-none"
            style={{
              width: "20rem",
              transform: "translateY(-50%) scaleX(-1)",
            }}
          />

          <DressCodeVerona dressCode="Formal" />
        </div>

        <div className="pt-20 flex flex-col justify-center items-center py-20 gap-y-5 bg-[#69795d] text-white">
          <div data-aos='fade-up'>
            <MiIconoGift />
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-center px-5 md:px-0 text-lg" data-aos='fade-up'>
              Si deseás hacernos un regalo te dejamos nuestros datos
            </p>
            <div className="flex flex-col md:flex-row gap-4 mt-5" data-aos='fade-up'>
              <Modal 
                nombreBoton="Datos de Susana"
                claseBoton="rounded-full hover:shadow-lg border-[#a2b891] bg-gray-100 text-gray-900 py-4 px-6 border-2 transition hover:transform hover:scale-105"
                claseBotonModal="bg-[#9eba8a] border-[#9eba8a]"
                claseModal="bg-[#9eba8a]"
                borderModal="border-[#9eba8a]"
                textColor="text-[#9eba8a]"
                styleBotonModal={{
                  backgroundColor: "white",
                  borderColor: "#9eba8a",
                }}
                styleModal={{ backgroundColor: colorSecundario }}
                styleBorderModal={{ borderColor: colorPrincipal }}
                styleTextColor={{ color: colorPrincipal }}
                cvu="0000003100066725428190"
                alias="susanapadilla"
                nombre="Susana Beatriz Padilla"
              />
              <Modal 
                nombreBoton="Datos de Alejandro"
                claseBoton="rounded-full hover:shadow-lg border-[#a2b891] bg-gray-100 text-gray-900 py-4 px-6 border-2 transition hover:transform hover:scale-105"
                claseBotonModal="bg-[#9eba8a] border-[#9eba8a]"
                claseModal="bg-[#9eba8a]"
                borderModal="border-[#9eba8a]"
                textColor="text-[#9eba8a]"
                styleBotonModal={{
                  backgroundColor: "white",
                  borderColor: "#9eba8a",
                }}
                styleModal={{ backgroundColor: colorSecundario }}
                styleBorderModal={{ borderColor: colorPrincipal }}
                styleTextColor={{ color: colorPrincipal }}
                cvu="0000003100048040961617"
                alias="diego.gallardoo09"
                nombre="Diego Alejandro Gallardo"
              />
            </div>
          </div>
        </div>

        <section className="bg-white py-12 text-center border-b-4 border-[#9eba8a] px-6 md:px-20 relative">
          <div
            data-aos="fade-up"
            className="max-w-2xl mx-auto bg-white border border-[#d8d3c4] rounded-3xl p-8 shadow-sm"
          >
            <p className="text-[#4b5147] text-lg md:text-2xl font-robotoSerif leading-relaxed">
              Para brindar la oportunidad a todos nuestros invitados de relajarse y festejar al máximo sin preocuparse por sus pequeñines, les pedimos amablemente su presencia sin niños
            </p>
          </div>
        </section>

        <Asistencia
          clase="py-10 bg-white bg-fixed border-b-4 border-[#9eba8a]"
          claseTitle="text-[#9eba8a]"
          claseButton="border-2 border-[#9eba8a] font-semibold hover:bg-[#9eba8a]  text-gray-700 hover:text-white rounded-full"
          linkAsistencia="https://docs.google.com/forms/d/e/1FAIpQLSf0NIKXeUyfmRUS0KxhMcPw5CDogbP_8jpWQJ2ub9weEOvLKA/viewform?usp=dialog"
        />


        <div className="font-robotoSerif text-xl italic bg-white">
          <TextoFinal textoFinal="¡Gracias por venir!" />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Invitacion;
