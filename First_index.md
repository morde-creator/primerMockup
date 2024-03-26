<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="Agregar algun slogan, o algo">
    <meta name="author" content="Devcrud">
    <title>Cadena de Restaurantes</title>
   


    <!-- Iconos  -->
    <link rel="stylesheet" href="assets/vendors/themify-icons/css/themify-icons.css">

    <link rel="stylesheet" href="assets/vendors/animate/animate.css">

    <!-- Estilos de boostrap 
	<link rel="stylesheet" href="assets/css/foodhut.css">
</head>
<body data-spy="scroll" data-target=".navbar" data-offset="40" id="home">
    
    <!-- Barra de navegación -->
    <nav class="custom-navbar navbar navbar-expand-lg navbar-dark fixed-top" data-spy="affix" data-offset-top="10">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="#home">Inicio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#about">Acerca de</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#gallary">Galería</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#book-table">Reservar Mesa</a>
                </li>
            </ul>
            <a class="navbar-brand m-auto" href="#">
                <img src="Modifcar para el logo" class="brand-img" alt="">
                <span class="brand-txt">Restaurant</span>
            </a>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="#blog">Blog<span class="sr-only">(actual)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#testmonial">Reseñas</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#contact">Contáctanos</a>
                </li>
                <li class="nav-item">
                    <a href="components.html" class="btn btn-primary ml-xl-4">Componentes</a>
                </li>
            </ul>
        </div>
    </nav>
    <!-- Cabecera -->
    <header id="home" class="header">
        <div class="overlay text-white text-center">
            <h1 class="display-2 font-weight-bold my-3">Nombre Razon Social .s.a</h1>
            <h2 class="display-4 mb-5">Siempre fresco y Delicioso</h2>
            <a class="btn btn-lg btn-primary" href="#gallary">Ver nuestra galería</a>
        </div>
    </header>

    <!-- Sección Acerca de -->
    <div id="about" class="container-fluid wow fadeIn" id="about"data-wow-duration="1.5s">
        <div class="row">
            <div class="col-lg-6 has-img-bg"></div>
            <div class="col-lg-6">
                <div class="row justify-content-center">
                    <div class="col-sm-8 py-5 my-5">
                        <h2 class="mb-4">Acerca de Nosotros</h2>
                        <p>Somos un grupo de estudiantes, en busca de la aprobacion semestral del Ramo!.</p>
                        <p><b>Tnemos las mejores intenciones de aquello.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
<!-- Sección Galería -->
<div id="Galey" class="text-center bg-dark text-light has-height-md middle-items wow fadeIn">
    <h2 class="section-title">NUESTRO MENÚ</h2>
</div>
<div class="galería fila">
    <div class="col-sm-6 col-lg-3 elemento-galería wow fadeIn">
        <img src="assets/imgs/gallary-1.jpg" alt="plantilla por DevCRID http://www.devcrud.com/" class="imagen-galería">
        <a href="#" class="superposición-galería">
            <i class="ícono-galería ti-plus"></i>
        </a>
    </div>
    <!-- Agregar más fotos a la galeria-->
</div>

<!-- Sección Reservar una mesa -->
    <div class="container-fluid tiene-superposición-de-fondo text-center text-light has-height-lg middle-items" id="book-table">
    <div class="">
        <h2 class="section-title mb-5">RESERVAR UNA MESA</h2>
        <div class="fila mb-5">
            <!-- Formulario para reservar mesa -->
        </div>
        <a href="#" class="btn btn-lg btn-primary" id="rounded-btn">BUSCAR MESA</a>
    </div>
</div>

<!-- Sección Blog -->
<div id="blog" class="container-fluid bg-dark text-light py-5 text-center wow fadeIn">
    <!-- Contenido del blog -->
</div>

<!-- Sección Testimonios -->
<div id="testimonio" class="container-fluid wow fadeIn bg-dark text-light has-height-lg middle-items">
    <!-- Contenido de testimonios -->
</div>

<!-- Sección Contacto -->
<div id="contacto" class="container-fluid bg-dark text-light border-top wow fadeIn">
    <!-- Contenido de contacto -->
</div>

<!-- Pie de página -->
<div class="container-fluid bg-dark text-light has-height-md middle-items border-top text-center wow fadeIn">
    <!-- Contenido del pie de página -->
</div>
<div class="bg-dark text-light text-center border-top wow fadeIn">
    <!-- Contenido adicional del pie de página -->
</div>

<!-- Sección Reserva de mesa -->
<div class="container-fluid has-bg-overlay text-center text-light has-height-lg middle-items" id="reservar-mesa">
    <div class="">
        <h2 class="section-title mb-5">RESERVAR MESA</h2>
        <div class="row mb-5">
            <div class="col-sm-6 col-md-3 col-xs-12 my-2">
                <input type="email" id="reserva-mesa" class="form-control form-control-lg custom-form-control" placeholder="CORREO ELECTRÓNICO">
            </div>
            <div class="col-sm-6 col-md-3 col-xs-12 my-2">
                <input type="number" id="reserva-mesa" class="form-control form-control-lg custom-form-control" placeholder="NÚMERO DE INVITADOS" max="20" min="0">
            </div>
            <div class="col-sm-6 col-md-3 col-xs-12 my-2">
                <input type="time" id="reserva-mesa" class="form-control form-control-lg custom-form-control" placeholder="HORA">
            </div>
            <div class="col-sm-6 col-md-3 col-xs-12 my-2">
                <input type="date" id="reserva-mesa" class="form-control form-control-lg custom-form-control" placeholder="12/12/12">
            </div>
        </div>
        <a href="#" class="btn btn-lg btn-primary" id="rounded-btn">BUSCAR MESA</a>
    </div>
</div>

<!-- Sección BLOG -->
<div id="blog" class="container-fluid bg-dark text-light py-5 text-center wow fadeIn">
    <h2 class="section-title py-5">EVENTOS EN EL REFUGIO DE COMIDA</h2>
    <div class="row justify-content-center">
        <div class="col-sm-7 col-md-4 mb-5">
            <ul class="nav nav-pills nav-justified mb-3" id="pills-tab" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#alimentos" role="tab" aria-controls="pills-home" aria-selected="true">Alimentos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#jugos" role="tab" aria-controls="pills-profile" aria-selected="false">Jugos</a>
                </li>
            </ul>
        </div>
    </div>
    <div class="tab-content" id="pills-tabContent">
        <div class="tab-pane fade show active" id="alimentos" role="tabpanel" aria-labelledby="pills-home-tab">
            <div class="row">
                <div class="col-md-4">
                    <div class="card bg-transparent border my-3 my-md-0">
                        <img src="assets/imgs/blog-1.jpg" alt="plantilla por DevCRID http://www.devcrud.com/" class="rounded-0 card-img-top mg-responsive">
                        <div class="card-body">
                            <h1 class="text-center mb-4"><a href="#" class="badge badge-primary">$5</a></h1>
                            <h4 class="pt20 pb20">Primera Burger</h4>
                            <p class="text-white">Especialidad de la ksa</p>
                        </div>
                    </div>
                </div>
                <!-- Resto de las tarjetas de alimentos -->
            </div>
        </div>
        <div class="tab-pane fade" id="jugos" role="tabpanel" aria-labelledby="pills-profile-tab">
            <div class="row">
                <!-- Tarjetas de jugos -->
            </div>
        </div>
    </div>
</div>

<!-- Sección TESTIMONIOS -->
<div id="testimonio" class="container-fluid wow fadeIn bg-dark text-light has-height-lg middle-items">
    <h2 class="section-title my-5 text-center">TESTIMONIOS</h2>
    <div class="row mt-3 mb-5">
        <!-- Tarjetas de testimonios -->
    </div>
</div>

<!-- Sección CONTACTO -->
<div id="contacto" class="container-fluid bg-dark text-light border-top wow fadeIn">
    <div class="row">
        <!-- Mapa -->
        <div class="col-md-6 px-0">
            <div id="map" style="width: 100%; height: 100%; min-height: 400px"></div>
        </div>
        <!-- Información de contacto -->
        <div class="col-md-6 px-5 has-height-lg middle-items">
            <h3>ENCUÉNTRANOS</h3>
            <p>Testing</p>
            <div class="text-muted">
                <p><span class="ti-location-pin pr-3"></span> 12345 Calle Falsa en la esquina de ningun lado, AB CHILE</p>
                <p><span class="ti-support pr-3"></span> 569  456-7890</p>
                <p><span class="ti-email pr-3"></span>info@website.com</p>
            </div>
        </div>
    </div>
</div>

<!-- pie de página -->
<div class="container-fluid bg-dark text-light has-height-md middle-items border-top text-center wow fadeIn">
    <div class="row">
        <div class="col-sm-4">
            <h3>CONTÁCTANOS POR CORREO ELECTRÓNICO</h3>
            <p class="text-muted">info@TESTING.COM/p>
        </div>
        <div class="col-sm-4">
            <h3>LLÁMANOS</h3>
            <p class="text-muted">(123) 456-7890</p>
        </div>
        <div class="col-sm-4">
            <h3>ENCUÉNTRANOS</h3>
            <p class="text-muted">Some place 123</p>
        </div>
    </div>
</div>


<!-- núcleo -->
<script src="assets/vendors/jquery/jquery-3.4.1.js"></script>
<script src="assets/vendors/bootstrap/bootstrap.bundle.js"></script>

<!-- bootstrap affix -->
<script src="assets/vendors/bootstrap/bootstrap.affix.js"></script>

<!-- wow.js -->
<script src="assets/vendors/wow/wow.js"></script>

<!-- google maps -->
<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCtme10pzgKSPeJVJrG1O3tjR6lk98o4w8&callback=initMap"></script>

<!-- FoodHut js -->
<script src="assets/js/foodhut.js"></script>

</body>
</html>

 
