const app = new Vue({
    el: "#app",
    data: {

        posicionActual: 0,
        posicionActual2: 0,
        posicionActual3: 0,
        posicionActual4: 0,
        isCollapsed: true,
        isOpen: true,
        cambiomodal: false,
        idioma: false,
        cargando: true,
        imagen: [
            "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        ],
        imagen1: [
            "https://res.cloudinary.com/desarrollofrutosdelcampo/image/upload/v1626115705/img/quienes_somoss-01_yxeuhz.png",
            "https://res.cloudinary.com/desarrollofrutosdelcampo/image/upload/v1626117056/img/misionn-01_ylmfb4.png",
            "https://res.cloudinary.com/desarrollofrutosdelcampo/image/upload/v1626117056/img/vision-01_cgtiwt.png",
        ],
        imagen2: [
            "https://res.cloudinary.com/desarrollofrutosdelcampo/image/upload/v1626117055/img/planta-01_wotv9w.png",
            "https://res.cloudinary.com/desarrollofrutosdelcampo/image/upload/v1626117057/img/cultivboo-01_hwtcxw.png",
            "https://res.cloudinary.com/desarrollofrutosdelcampo/image/upload/v1626117054/img/calidad-01_d1dzrm.png",
        ],

        texts: [{
                title: "¿Who we are?",
                paragraph: "Fruits of the field, is a worker cooperative. Specialized in the production of Papaya of the highest quality, established in 2018 in the city of Villavicencio, Department of Meta Colombia, formed by a group of farmers and engineers, with more than 15 years of experience in planting, production, distribution and marketing of papaya nationally and internationally.",
            },
            {
                title: "Mission",
                paragraph: "1) That all our crops are environmentally friendly. 2) To implement the highest technology in our crops and packing plant. 3) To offer the best product to our customers. 4) To maintain a work environment and a healthy life model for the human being, keeping a high social responsibility in the development of our activities.",
            },
            {
                title: "Vision",
                paragraph: "To be recognized worldwide as the best producer, distributor and marketer of papaya and integrator of papaya producers in Colombia, focusing on the economy at scale, providing technical assistance and training for its employees.",
            },
        ],

        texts2: [{
                title: "Packing plant",
                paragraph: "Certified by the ICA with Code No EMP 500016, packing capacity of 2 containers per day, (40,800 Kg), where we handle the highest standards of quality, biosafety and product safety.",
            },
            {
                title: "Crop",
                paragraph: "Certified by the ICA with code N 500017, the only one in the country with efficient fertigation and emplasticado system, we work with precision agriculture, Good Agricultural Practices so our crops are environmentally friendly and 100% sustainable.",
            },
            {
                title: "Quality",
                paragraph: "In Frutos del Campo we are committed to quality, since we work our crops with technology, being the leading company in innovation, for that reason our operational processes are focused on clean agriculture, the safety of our products, and the care of the environment, being our crops totally sustainable.",
            },
        ],

        certificadoDescargas: [{
                title: "No. 505730167",
                paragraph: "Registration as a producer of the following plant species for fresh export: Papaya (Carica Papaya), in an area of eight (8) hectares and Banana (Musa Paradisiaca), with seven (7) hectares.",
                file: "./Files/RegistroNo505730167.pdf",
            },
            {
                title: "No. 500016",
                paragraph: "Registration of the company COOPERATIVA DE TRABAJO ASOCIADO FRUTOS DEL CAMPO - FRUTOS DEL CAMPO CTA as a packing plant of vegetables for fresh export.",
                file: "./Files/RegistroNo500016.pdf",
            },
            {
                title: "No. 500017",
                paragraph: "Registration as exporter of fresh vegetables to the company COOPERATIVA DE TRABAJO ASOCIADO FRUTOS DEL CAMPO - FRUTOS DEL CAMPO CTA.",
                file: "./Files/RegistroNo500017.pdf",
            },

        ],

        texts4: [{
                title: "Crop",
                paragraph: "Certified by the ICA with code N 500017, the only one in the country with efficient fertigation and emplasticado system, we work with precision agriculture, Good Agricultural Practices so our crops are environmentally friendly and 100% sustainable.",
            },
            {
                title: "Plant",
                paragraph: "We have a packing plant with a capacity of 40,800kg where we manage quality and biosecurity standards for both the product and the worker.",
            },
            {
                title: "Expor",
                paragraph: "We have infrastructure for export with high standards of quality, biosafety and innocuousness of the Tainung Papaya..",
            },
        ],
        swiperImagenes: null

    },

    mounted() {

        this.cargando = false

        this.swiperImagenes = new Swiper(".imagenes", {
            loop: true,
            navigation: {
                nextEl: ".next",
                prevEl: ".prev",
            },
        });
    },

    methods: {
        mostrarTexto1: function(posicion) {
            this.posicionActual = posicion;
        },

        mostrarTexto2: function(posicion2) {
            this.posicionActual2 = posicion2;
        },

        mostrarTexto3: function(posicion3) {
            this.posicionActual3 = posicion3;
        },

        atras1: function() {
            if (this.posicionActual > 0) {
                this.posicionActual--;
            } else {
                this.posicionActual = this.texts.length - 1
            }
        },

        adelante1: function() {
            if (this.posicionActual < this.texts.length - 1) {
                this.posicionActual++;
            } else {
                this.posicionActual = 0
            }
        },

        getClase(posicion) {
            if (posicion === this.posicionActual) {
                return "activado";
            }
            return "";
        },

        atras2: function() {
            if (this.posicionActual2 > 0) {
                this.posicionActual2--;
            } else {
                this.posicionActual2 = this.texts.length - 1
            }
        },

        adelante2: function() {
            if (this.posicionActual2 < this.texts.length - 1) {
                this.posicionActual2++;
            } else {
                this.posicionActual2 = 0
            }
        },

        getClase2(posicion2) {
            if (posicion2 === this.posicionActual2) {
                return "activado";
            }
            return "";
        },

        atras3: function() {
            if (this.posicionActual3 > 0) {
                this.posicionActual3--;
            } else {
                this.posicionActual3 = this.texts.length - 1
            }
        },

        adelante3: function() {
            if (this.posicionActual3 < this.texts.length - 1) {
                this.posicionActual3++;
            } else {
                this.posicionActual3 = 0
            }
        },

        getClase3(posicion3) {
            if (posicion3 === this.posicionActual3) {
                return "activado";
            }
            return "";
        },

        atras4: function() {
            if (this.posicionActual4 > 0) {
                this.posicionActual4--;
            } else {
                this.posicionActual4 = this.texts.length - 1
            }
        },

        adelante4: function() {
            if (this.posicionActual4 < this.texts.length - 1) {
                this.posicionActual4++;
            } else {
                this.posicionActual4 = 0
            }
        },

        getClase4(posicion4) {
            if (posicion4 === this.posicionActual4) {
                return "activado";
            }
            return "";
        },

        toggleCollapsed() {
            this.isCollapsed = !this.isCollapsed
        },

        animation() {
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })
        },


        toggleModal: function() {
            this.cambiomodal = !this.cambiomodal
        },


        cambiarIdioma() {
            this.idioma = !this.idioma
        }


    },

    computed: {
        menu() {
            if (this.isCollapsed) {
                return "nav collapsed"
            }
            return "nav"
        },

        modal() {
            if (this.cambiomodal) {
                return "modalAbierta"
            }
            return "modalCerrada"
        },


        lenguaje() {
            if (this.idioma) {
                return "english"
            }
            return "nada"
        }



    }
});

var rotar = new Swiper(".cambiar__logos", {
    slidesPerView: 4,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        320: {
            slidesPerView: 1
        },


        649: {
            slidesPerView: 3
        },
    }

});

/*
var swiper = new Swiper(".imagenes", {
    loop: true,
    autoplay: {
        disableOnInteraction: false,
        delay: 10000,
    },
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
    },
});*/

window.onscroll = function() {
    if (document.documentElement.scrollTop >= 100) {
        document.querySelector(".arriba").classList.add('show')
    } else {
        document.querySelector(".arriba").classList.remove('show')
    }
}



// JS PLAY MODAL

// JS PLAY MODAL