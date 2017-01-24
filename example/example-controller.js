'use strict';

var ExampleCtrl = function($rootScope, $document, $timeout, $scope) {

	var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. " +
		          "Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor." +
		          "Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, " +
		          "ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor." +
		          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

	$scope.side = '';


	$scope.events = [{
		// ********************************* TRABAJO MUDO ***********************
		badgeClass: 'default',
		badgeIconClass: 'glyphicon-wrench',
		title: 'NEW JOB',
		when: '06/2016 - now - Mexico City',
		date: '2017',
		dateClass: 'label-danger',

		year: '2017',
		contentTags: '<span class=" label label-default">Drupal</span>' +
		'<span class=" label label-primary">Cordova</span>' +
		'<span class=" label label-success">NODEjs</span><br>' +
		'<span class=" label label-info">Unity3D</span>' +
		'<span class=" label label-warning">C#</span>' +
		'<span class=" label label-danger">PHP</span>',
		contentHtml: '<small>I start working at <a href="https://www.mudo.mx">MUDO&#39;S LAB</a> as a software engineer.<br>' +
								'Full Stack Web Developer.' +
									' Developing Web, Hybrid and Augmented Reality apps.</small><br><hr>'+
									' con esto comenzó la loca idea de crear diferentes dinámicas para aprovechar al máximo la realidad aumentada'
	}, {
		// ********************************* PREMIOS EBIC ***********************

		badgeClass: 'info',
		badgeIconClass: 'glyphicon-queen',
		title: 'Winner Premios EBIC 2016',
		contentHtml: '<small>Premio <a target="_blank" href="http://www.iecisa.com/es/actualidad/noticias/newsenticasturias16/">EBIC</a> ' +
									'Premios a los mejores proyectos tecnológicos de la universidad de Oviedo' +
									' <hr> <h4>SERIOUS GAME PARA EL ESTUDIO DE FUNCIONES VISUALES: SEGUIMIENTO OCULAR</h4></small>'+
									' <hr>' +
									'',
		contentImages:'	'+
									' <div class="col-xs-4 col-md-6">'+
									  ' <a target="_blank" href="https://prezi.com/mtkcz8xzrnfr/serious-game-para-el-estudio-de-funciones-visuales-seguimie/"><img class="img-responsive" src="../assets/sprites/prezi.svg" /></a>'+
									 '</div>'+
										 '<div class="col-xs-4 col-md-6">'+

									'    <a target="_blank" href="https://www.youtube.com/embed/VmMPN0wVfTY?wmode=opaque"><img class="img-responsive" src="../assets/sprites/youtube.png"  /> </a>'+
									 '</div>'+
									'',


//		contentVideo: '<iframe width="560" height="315" src="https://www.youtube.com/embed/VmMPN0wVfTY?wmode=opaque" frameborder="0" allowfullscreen></iframe>',
		dateClass: 'label-warning',
		date: '07/2016'

	}, {
		// ********************************* PROYECTO FINAL DE CARRERA ***********************

		badgeClass: 'warning',
		badgeIconClass: 'glyphicon-education',
		title: 'PRESENTATION FINAL PROJECT ',
	//	when: '11 hours ago via Twitter',
		year:'2015',
		date: '12/2015',
		dateClass: 'label-primary',
		contentHtml: ' <h4>SERIOUS GAME PARA EL ESTUDIO DE FUNCIONES VISUALES: SEGUIMIENTO OCULAR</h4>'+
	//	' <hr>' +
		'<h6 class="text-capitalize">Implementation of VR devices in <a target="_blank" href="https://en.wikipedia.org/wiki/VRPN">VRPN</a>'+
	 ' and serious games in <a target="_blank" href="https:\\www.unity3d.com">Unity3D</a>.</h6><hr>'+
		'<p class="text-justify"><small> Desarrollo de serious games como ejercicios de refuerzo en terapias para niños con problemas en el control motor de los ojos,' +
		' ambliopia, ojo vago.<br> Para ello se contó con el uso de eyetrackers, dispositivos de realidad virtual que son capaces de'+
		' registrar el movimiento ocular en referencia a una pantalla de ordenador. <br>' +
		'Estos juegos provocan que se refuerze la visión periférica, seguimiento y el movimiento sacádico, provocando que el niño '+
		'se divierta mientras se mejora su problema visual.</small></p>',

		content:	'<small><ul class="list-group">'+
			'<li class="list-group-item ">Courses realice when i was student </li>'+
			'<li class="list-group-item ">• Unity3d</li>'+
			'<li class="list-group-item ">• Active Directory - Windows Server</li>'+
			'<li class="list-group-item ">• Zbrush</li>'+
			'<li class="list-group-item ">• Videogames Programming and development</li>'+
			'<li class="list-group-item ">• Graphic Programming applied to medicine</li>'+
			'</ul></small>',

		contentTags: '<span class=" label label-default">VRPN</span>' +
				'<span class=" label label-primary">Unity3D</span>' +
				'<span class=" label label-success">C#</span><br>' +
				'<span class=" label label-info">C++</span>' +
				'<span class=" label label-warning">EyeTracking</span>',

		contentImages:'	'+
									' <div class="col-xs-4 col-md-6">'+
										' <a target="_blank" href="https://prezi.com/mtkcz8xzrnfr/serious-game-para-el-estudio-de-funciones-visuales-seguimie/"><img class="img-responsive" src="../assets/sprites/proyectofinal.jpg" /></a>'+
									 '</div>'+
									 ' <div class="col-xs-4 col-md-6">'+
 										' <img class="img-responsive" src="../assets/sprites/proyectofinalbook.jpg" />'+
 									 '</div>'

	}];

	// ********************************* El cero 2015 ***********************
	$scope.events.push({
		badgeClass: 'default',
		badgeIconClass: 'glyphicon-wrench',
		title: 'Software engineer At El Cero',
		when: '10/2014 - 09/2015 - Gijón (España)',
		date: '09/2015',
		dateClass: 'label-danger',
	//	year: '2015',
		contentHtml: '<small>'+
									' Developing a product sofware. Maquetación en automático de un periódico, fotos, ads, categories, etc' +
									' and adjusting all to a predefines number of pages via reglas de colocación ' +
									'<hr><ul class="list-group">'+
									'<li class="list-group-item ">• Programming of script platform such as Adobe CS5, illustrator CS5, Indesign Server SC5.</li>'+
									'<li class="list-group-item ">• Developing Visual Studio C# project</li>'+
									//'<li class="list-group-item ">• Editing the newspaper using Freehand, PageMaker, Illustrator, Indesign, Photoshop</li>'+
									'</ul><small>',
		contentTags: 	'<span class=" label label-success">Scripting</span>' +
									'<span class=" label label-warning">SQL Server</span>' +
									'<span class=" label label-default">Scripting</span><br>' +
									'<span class=" label label-primary">Indesign CS6</span>' +
									'<span class=" label label-success">C#</span>' +
									'<span class=" label label-info">Visual Studio</span>',

	});

	// ********************************* Universidad de Oviedo intership ***********************
	$scope.events.push({
		badgeClass: 'default',
		badgeIconClass: 'glyphicon-wrench',
		title: 'IT Services Internship',
		year: '2014',
		date: '02/2014',
		dateClass: 'label-danger',
		when: '09/2013 - 02/2014  - Gijón (España)',

		contentHtml: ' <small>Becarios de la Universidad de Oviedo ' +
		'<hr><ul class="list-group">'+
		'<li class="list-group-item ">• Provide prioritised advised technical support and advise as required along the university.</li>'+
		'</ul></small>',
		contentTags: '<span class=" label label-default">Support</span>' +
									'<span class=" label label-primary">Scripting</span>'
		});


		// ********************************* Mobile developer native GAMOL ***********************
		$scope.events.push({
			badgeClass: 'default',
			badgeIconClass: 'glyphicon-wrench',
			titleHTML: 'Mobile Developer at <a href="http://gamol.com.mx/corporativo/">Gamol</a>',
			year: '2013',
			date: '03/2013',
			dateClass: 'label-danger',
			when: '06/2012 - 03/2013 - Mexico City',

			contentHtml: '<small >Developing native Android apps using version 2.3.3 and above. I worked with clients like Televisa,  ' +
			' I develop and sports app <a target="_blank" href="https://apkpure.com/yoo-sports/ch.adnroidblogger.view">Yoo Sports</a> and an' +
			' internal app for <a target="_blank" href="https://www.icitholding.com/">ICIT Holding</a><hr>' +
			'<ul class="list-group">'+
			'<li class="list-group-item ">• Managing internal applications to best practice standards </li>'+
			'<li class="list-group-item ">• Extensive communication with wide range of clients with a view to understanding their requirements</li>'+
			'<li class="list-group-item ">• Systems Architecture expertise at applications, database and technology stack</li>'+
			'<li class="list-group-item ">• Facilitating meetings and user workshops</li>'+
			'<li class="list-group-item ">• 3rd party suppliers</li>'+
			'</ul><small>',
			contentTags: '<span class=" label label-default">Android SDK</span>' +
										'<span class=" label label-primary">Java</span>',

			/*contentVideo: '	'+
						'<div class="col-sm-4 portfolio-item">' +
							'<a href="#portfolioModal5" class="portfolio-link" data-toggle="modal">' +
								'<div class="caption">' +
									'<div class="caption-content">' +
									'<i class="fa fa-search-plus fa-3x"></i>' +
									'</div>' +
								'</div>' +
							'<img src="img/portfolio/cabin.png" class="img-responsive" alt="">' +
							'</a></div>',*/
			contentImages:'' +
										'' +
										' <div class="col-xs-3 col-md-3">'+
										' <img class="img-responsive" src="../assets/sprites/yoosports/img01.jpg" />'+
										'</div>'+
										' <div class="col-xs-3 col-md-3">'+
										' <img class="img-responsive" src="../assets/sprites/yoosports/img02.jpg" />'+
										'</div>'+
										' <div class="col-xs-3 col-md-3">'+
										' <img class="img-responsive" src="../assets/sprites/yoosports/img03.jpg" />'+
										'</div>'+
										' <div class="col-xs-2 col-md-3">'+
										' <img class="img-responsive" src="../assets/sprites/yoosports/img04.jpg" />'+
										'</div>'+
										' <div class="col-xs-2 col-md-3">'+
										' <img class="img-responsive" src="../assets/sprites/yoosports/img05.jpg" />'+
										'</div>'

			});



			// ********************************* El cero 2011 ***********************
			$scope.events.push({
				badgeClass: 'default',
				badgeIconClass: 'glyphicon-wrench',
				title: 'Software engineer At El Cero',
				when: '02/2010 - 07/2011 - Gijón (España)',
				date: '07/2011',
				dateClass: 'label-danger',
				year: '2011',
				contentHtml: '<small>'+
											'  ' +
											'<hr><ul class="list-group">'+
											'<li class="list-group-item ">• Provide in-house technical support of all equipment</li>'+
											'<li class="list-group-item ">• Windows 2000 y 2003 server, MySQL, SQL server 2000, Sqlite.</li>'+
											'<li class="list-group-item ">• Internal software development VB6, Visual Basic Studio 2005, SQL Server 2005, MySQL.</li>'+
											'<li class="list-group-item ">• Web & applications development using a database server such as sql 2000, MySQL'+
											'<li class="list-group-item ">• Programming of script platform such as Adobe CS5, illustrator CS5, Indesign Server SC5.</li>'+
											'<li class="list-group-item ">• Editing the newspaper using Freehand, PageMaker, Illustrator, Indesign, Photoshop</li>'+
											'</ul><small>',
				contentTags: '<span class=" label label-default">Support</span>' +
											'<span class=" label label-primary">Internal Software</span>' +
											'<span class=" label label-info">System Admin</span><br>' +
											'<span class=" label label-warning">Database Admin</span>' +
											'<span class=" label label-success">Visual Studio</span>',

			});



			// ********************************* Universidad de Oviedo intership 2011 ***********************
			$scope.events.push({
				badgeClass: 'default',
				badgeIconClass: 'glyphicon-wrench',
				title: 'IT Services Internship',
				date: '06/2011',
				dateClass: 'label-danger',
				when: '09/2010 - 06/2011  - Gijón (España)',

				contentHtml: ' <small>Becarios de la Universidad de Oviedo ' +
				'<hr><ul class="list-group">'+
				'<li class="list-group-item  ">• Maintaining the network and active directory by using Windows 2003 servers</li>'+
				'<li class="list-group-item ">• Provide prioritised advised technical support and advise as required along the university.</li>'+
				'</ul></small>',
				contentTags: '<span class=" label label-default">Support</span>' +
											'<span class=" label label-primary">Scripting</span>'
				});




				// ********************************* PROYECTO INMERSION INGLES KAPLAN ***********************
				$scope.events.push({
				badgeClass: 'warning',
				badgeIconClass: 'glyphicon-education',
				title: 'Inmersión Inglés Internship  ',
			//	when: '11 hours ago via Twitter',
				year:'2009',
				date: '11/2009',
				dateClass: 'label-primary',
				when: '11/2009 - San Francisco (USA)',
				contentHtml: '<small>Beca de Inmersión Inglés Internship -   ' +
				 '<a target="_blank" href="https://www.kaplaninternational.com/">Kaplan International</a> ' +
				' at <mark>San Francisco (USA)</mark> '
			});

					// ********************************* INMERSION INGLES ***********************
					$scope.events.push({
					badgeClass: 'warning',
					badgeIconClass: 'glyphicon-education',
					title: 'UIMP Internship english  ',
					when: '10/2009 - A Coruña (Spain)',
				//	when: '11 hours ago via Twitter',
				//	year:'2009',
					date: '10/2009',
					dateClass: 'label-primary',
					contentHtml: '<small>Becada para realizar un curso de inmersión inglés en A Coruña ' +
					 '<a target="_blank" href="http://www.uimp.es/actividades-academicas/cursos-de-inmersion-en-ingles.html">UIMP</a> ' +
					' <mark>A Coruña</mark> '+
					' <small> ' +
					' '
				});

				// *********************************  PANAMERICANA INTERSHIP ***********************
				$scope.events.push({
				badgeClass: 'info',
				badgeIconClass: 'glyphicon-plane',
				title: 'STUDENT EXCHANGE ',
				when: '01/2009 - 08/2009 - Mexico City (Mexico)',
				date: '01/2009',
				dateClass: 'label-success',
				contentHtml: '<small>Estudiante de intercambio mediante las becas de movilidad ' +
				 '<a target="_blank" href="http://www.santander.com/csgs/Satellite/CFWCSancomQP01/es_ES/Santander/Sostenibilidad/Santander-Universidades/Becas-Santander-CRUE-de-Movilidad-Iberoamericana.html">CRUE SANTANDER</a> de cooperación iberoaméricana con destino ' +
				' <mark>Mexico City</mark> '+
				' en la <a target="_blank" href="http://www.up.edu.mx">Universidad PANAMERICANA</a><small> ' +
				' '
			});




				// ********************************* EL CERO 2009 ***********************
				$scope.events.push({
					badgeClass: 'default',
					badgeIconClass: 'glyphicon-wrench',
					title: 'My first JOB as Software developer At El Cero',
					when: '09/2002 - 01/2009 - Gijón (España)',
					date: '01/2009',
					dateClass: 'label-danger',
					//year: '2009',
					contentHtml: '<small>'+
												' While I was studing the next level, es decir, la carrera de ingeniería técnica informática ' +
												' empecé a trabajar en esta empresa desarrollando todo tipo de software multidisciplinar ' +
												'<hr><ul class="list-group">'+
												'<li class="list-group-item ">• Provide in-house technical support of all equipment</li>'+
												'<li class="list-group-item ">• Windows 2000 y 2003 server, MySQL, SQL server 2000, Sqlite.</li>'+
												'<li class="list-group-item ">• Internal software development VB6, Visual Basic Studio 2005, SQL Server 2005, MySQL.</li>'+
												'<li class="list-group-item ">• Web & applications development using a database server such as sql 2000, MySQL'+
												'<li class="list-group-item ">• Programming of script platform such as Adobe CS5, illustrator CS5, Indesign Server SC5.</li>'+
												'<li class="list-group-item ">• Editing the newspaper using Freehand, PageMaker, Illustrator, Indesign, Photoshop</li>'+
												'</ul><small>',
					contentTags: '<span class=" label label-default">Support</span>' +
												'<span class=" label label-primary">Internal Software</span>' +
												'<span class=" label label-info">System Admin</span><br>' +
												'<span class=" label label-warning">Database Admin</span>' +
												'<span class=" label label-success">Visual Studio</span>',

				});



				// ********************************* PROYECTO ModulO ***********************
				$scope.events.push({
				badgeClass: 'warning',
				badgeIconClass: 'glyphicon-education',
				title: 'Student IES Arsenio Toral ',
			//	when: '11 hours ago via Twitter',
				year:'2002',
				date: '05/2002',
				dateClass: 'label-primary',
				when: '09/2000 - 05/2002 Gijón (Spain)',
				contentHtml: '<small>HND IT Applications Disciplina académica Informatics Nota 8,6 </small> '

			});

	$scope.events.push({
		badgeClass: 'warning',
		badgeIconClass: 'glyphicon-user',
		title: 'I born at 9:30 A. M.',
		year: '1982',
		date: '80s',
		dateClass: 'label-success',

		//titleContentHtml: '<h2>Example 2 <small> header</small></h2>',
		titleContentHtml: '<img class="img-responsive" src="../assets/sprites/1982.jpg">',
		contentHtml: ' <h1>Example page header <small>Subtext for header</small></h1>',
		footerContentHtml: '<a href="">Continue Reading</a>'
		});





	$scope.addEvent = function() {
		$scope.events.push({
			badgeClass: 'info',
			badgeIconClass: 'glyphicon-check',
			title: 'First heading',
			when: '3 hours ago via Twitter',
			content: 'Some awesome content.'
		});

	};
	// optional: not mandatory (uses angular-scroll-animate)
	$scope.animateElementIn = function($el) {
		$el.removeClass('timeline-hidden');
		$el.addClass('bounce-in');
	};

	// optional: not mandatory (uses angular-scroll-animate)
	$scope.animateElementOut = function($el) {
		$el.addClass('timeline-hidden');
		$el.removeClass('bounce-in');
	};

	$scope.leftAlign = function() {
		$scope.side = 'left';
	}

	$scope.rightAlign = function() {
		$scope.side = 'right';
	}

	$scope.defaultAlign = function() {
		$scope.side = ''; // or 'alternate'
	}
};

angular.module('example').controller('ExampleCtrl', ExampleCtrl);
