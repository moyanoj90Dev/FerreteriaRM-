
import { Lista_Id } from "./controler.js/lista_Id.js";
import { menuResponsivo} from "./controler.js/menu.js";
import { muestraContenido } from "./controler.js/muestraContenido.js";
import { FERRETERIA_RM_datos } from "./FERRETERIA_RM_datos.js";
import { db } from "./index.js";


//CONTROLADORES: PRODUCTOS GENERALES 
muestraContenido(Lista_Id.CARD_1_DESCRIPCION__PRODUCTOS_GENERALES,  FERRETERIA_RM_datos.PRODUCTOS_GENERALES.CARD_1.DESCRIPCION)
muestraContenido(Lista_Id.CARD_2_DESCRIPCION__PRODUCTOS_GENERALES,  FERRETERIA_RM_datos.PRODUCTOS_GENERALES.CARD_2.DESCRIPCION)
muestraContenido(Lista_Id.CARD_3_DESCRIPCION__PRODUCTOS_GENERALES,  FERRETERIA_RM_datos.PRODUCTOS_GENERALES.CARD_3.DESCRIPCION)
muestraContenido(Lista_Id.CARD_4_DESCRIPCION__PRODUCTOS_GENERALES,  FERRETERIA_RM_datos.PRODUCTOS_GENERALES.CARD_4.DESCRIPCION)
muestraContenido(Lista_Id.CARD_5_DESCRIPCION__PRODUCTOS_GENERALES,  FERRETERIA_RM_datos.PRODUCTOS_GENERALES.CARD_5.DESCRIPCION)

//CONTROLADORES: PRODUCTOS GENERALES 
muestraContenido(Lista_Id.CARD_6_DESCRIPCION__OFERTAS, FERRETERIA_RM_datos.OFERTAS.CARD_6.DESCRIPCION);
muestraContenido(Lista_Id.CARD_6_PRECIOS__OFERTAS, FERRETERIA_RM_datos.OFERTAS.CARD_6.PRECIO);
muestraContenido(Lista_Id.CARD_6_PRECIOS_ANTERIORES__OFERTAS, FERRETERIA_RM_datos.OFERTAS.CARD_6.PRECIO_ANTERIOR);


muestraContenido(Lista_Id.CARD_7_DESCRIPCION__OFERTAS, FERRETERIA_RM_datos.OFERTAS.CARD_7.DESCRIPCION);
muestraContenido(Lista_Id.CARD_7_PRECIOS__OFERTAS, FERRETERIA_RM_datos.OFERTAS.CARD_7.PRECIO);
muestraContenido(Lista_Id.CARD_7_PRECIOS_ANTERIORES__OFERTAS, FERRETERIA_RM_datos.OFERTAS.CARD_7.PRECIO_ANTERIOR);

muestraContenido(Lista_Id.CARD_8_DESCRIPCION__OFERTAS, FERRETERIA_RM_datos.OFERTAS.CARD_8.DESCRIPCION);
muestraContenido(Lista_Id.CARD_8_PRECIOS__OFERTAS, FERRETERIA_RM_datos.OFERTAS.CARD_8.PRECIO);
muestraContenido(Lista_Id.CARD_8_PRECIOS_ANTERIORES__OFERTAS, FERRETERIA_RM_datos.OFERTAS.CARD_8.PRECIO_ANTERIOR);

muestraContenido(Lista_Id.CARD_9_DESCRIPCION__OFERTAS, FERRETERIA_RM_datos.OFERTAS.CARD_9.DESCRIPCION);
muestraContenido(Lista_Id.CARD_9_PRECIOS__OFERTAS, FERRETERIA_RM_datos.OFERTAS.CARD_9.PRECIO);
muestraContenido(Lista_Id.CARD_9_PRECIOS_ANTERIORES__OFERTAS, FERRETERIA_RM_datos.OFERTAS.CARD_9.PRECIO_ANTERIOR);






//aparecer ventana de menu
const iconeMenuResponsivo = document.getElementById('icone__menu-responsivo')
iconeMenuResponsivo.addEventListener('click', (event)=> {

    const clase = menuResponsivo();

    clase.classList.add('header__container__nav-responsive-lateral-ver')

})
console.log(menuResponsivo())

console.log(iconeMenuResponsivo)


//sacar ventana de menu 
iconeMenuResponsivo.addEventListener('blur', (event)=> {

    setTimeout(function() {
        clase.classList.remove('header__container__nav-responsive-lateral-ver');
      }, 1000);
    const clase = menuResponsivo();
})




console.log(db)