( function ( $ ) {
	"use strict";

	var $subscribeForm = $('.subscribe-form');
	var $btnSlideDown = $('#primaryBlock a');
	var $contentSlideDown = $('#primaryBlock form');
	var posScroll;

	var availableTags = [
			{
                value: "Savon au lait d'ânesse et Patchouli/Ylang-ylang",
                label: "Savon au lait d'ânesse et Patchouli/Ylang-ylang",
                price: "2,40 €",
                desc: "Santé & Nature -> Hygiène et soin",
                icon: "3.jpg"
            },
            {
                value: "Dentifrice Menthe et Thé Vert",
                label: "Dentifrice Menthe et Thé Vert",
                price: "3,90 €",
                desc: "Santé & Nature -> Hygiène et soin",
                icon: "5.jpg"
            },
            {
                value: "Gel Douche Exfoliant",
                label: "Gel Douche Exfoliant",
                price: "14,56 €",
                desc: "Santé & Nature -> Hygiène et soin",
                icon: "4.jpg"
            },
            {
                value: "Elixir 100 % huile de pépins de figue de Barbarie",
                label: "Elixir 100 % huile de pépins de figue de Barbarie",
                price: "31,89 €",
                desc: "Santé & Nature -> Santé et bien-être",
                icon: "2.jpg"
            },
            {
                value: "T-shirt Homme Manches courtes - Truffe (ideo)",
                label: "T-shirt Homme Manches courtes - Truffe (ideo)",
                price: "35 €",
                desc: "Vêtements -> Homme",
                icon: "1.jpg"
            }
        ];


	$( function () {

		/** PANIER - PRIX ***/
		$('.quantite').on('change', function(){
			var $quantite = $(this).val();
			var $prixUnite = $(this).parent().prev().find('span.prixUnite').text().replace(',' , '.');
			var $prixUniteTotal = $(this).parent().next().find('span.prix').text().replace(',' , '.');
			//var $prixTotal = $('.prixTotal strong').text().replace(',' , '.');
			var $prixTotal = 0;
			var $prixColis = 4.10;

			$prixUniteTotal = $quantite * $prixUnite;
			$(this).parent().next().find('span.prix').text($prixUniteTotal.toFixed(2));

			var myArray = [];
			$('span.prix').each(function() {
			    myArray.push({
			    	'key' : $(this).text(),
					'value': $(this).text().replace(',' , '.')
				 });  
			});

			$.each(myArray, function(value, key) {
			   $prixTotal += parseFloat(key.value);
			});

			if($prixTotal < 60) {
				$('.prixRestant strong').text((60 - $prixTotal).toFixed(2));
				$prixTotal += 4.10;
			} else if ($prixTotal > 60) {
				$('#promoLivraison td').text('Vous bénéficiez de la livraison gratuite via Envoi du colis (par coliposte ou taxipost)');
				$('.prixColis strong').text('- 4.10');
				$prixTotal -= 4.10;
			}

			$('.prixTotal strong').text($prixTotal.toFixed(2));
		}); // FIN DE PANIER - PRIX

		$('<td colspan="5"><span class="etoile">*</span> Ajoutez des produits d\'une valeur de <span class="prixRestant"><strong>38.11</strong></span> <sup>€</sup> afin de bénéficier de la livraison gratuite via Envoi du colis (par coliposte ou taxipost).</td>').appendTo('#promoLivraison');



		/**** RECHERCHE ******/
		$.editableFactory = {
	        'search': {
				toEditable: function($this,options){
					$this.append('<input type="search" id="search-submit" placeholder="Recherche" />');
				},
				getValue: function($this,options){
					if($this.children().val() == '') {
						return $this.children().val('Recherche');
					} else {
						return $this.children().val();
					}
				}
				}
	    }; 
		/* bouton menu RECHERCHE <-> input */
		    function begin(content){
			    this.append('<small>Clic n\'importe où pour valider</small>');
			} 

		$('.editable').editable({type:'search', onEdit:begin});

		$( "#search-submit" ).autocomplete({
            minLength: 0,
            source: availableTags,
            focus: function( event, ui ) {
                $( "#search-submit" ).val( ui.item.label );
                return false;
           		 },
            select: function( event, ui ) {
                $( "#search-submit" ).val( ui.item.label );
                $( "#search-submit-id" ).val( ui.item.value );
                $( "#search-submit-price" ).html( ui.item.price );
                $( "#search-submit-description" ).html( ui.item.desc );
                $( "#search-submit-icon" ).attr( "src", "img/article/" + ui.item.icon );
 
                return false;
            	}
        }).data( "autocomplete" )._renderItem = function( ul, item ) {
            return $( "<li>" )
                .data( "item.autocomplete", item )
                .append( "<a href='pages/article.html' title='Voir cet article'>" + "<figure><img src='img/article/" + item.icon + "' width='auto' height='50px' /></figure><p>" + item.label + " <strong>" + item.price + "</strong> <small>" + item.desc + "</small></p></a>" )
                .appendTo( ul );
        };    
		

		/**** MENU DROP DOWN DELAY *******/
		$(".primaryNav li").hoverIntent({
		    sensitivity: 7, // number = sensitivity threshold (must be 1 or higher)
		    interval: 150,   // number = milliseconds of polling interval
		    over: function () {
		        $('.secondaryNav', this).effect( 'slide', {direction: "left"}, 500 );
		        $(this).find('a:first').addClass('active');
		    },  // function = onMouseOver callback (required)
		    timeout: 150,   // number = milliseconds delay before onMouseOut function call
		    out: function () {
		        $('.secondaryNav', this).fadeOut('slow');
		        $(this).find('a:first').removeClass('active');
		    }    // function = onMouseOut callback (required)
		});

		$(".secondaryNav li").hoverIntent({
		    sensitivity: 7, // number = sensitivity threshold (must be 1 or higher)
		    interval: 150,   // number = milliseconds of polling interval
		    over: function () {
		        $('.thirdNav', this).effect( 'slide', {direction: "left"}, 500 );
		        $(this).find('a:first').addClass('active');
		    },  // function = onMouseOver callback (required)
		    timeout: 150,   // number = milliseconds delay before onMouseOut function call
		    out: function () {
		        $('.thirdNav', this).fadeOut('slow');
		        $(this).find('a:first').removeClass('active');
		    }    // function = onMouseOut callback (required)
		});
		/* fin du dropdown menu */
		

		/* newsletter */
		$subscribeForm.hide();

		$('.subscribe a').click(function() {
			$subscribeForm.slideDown('slow');
		});

		/* accordion header left */
		var icons = {
            header: "arrow-right",
            activeHeader: "arrow-down"
        };
        $( "#accordion" ).accordion({
            icons: icons,
            collapsible: true
        });

		/* back to top */
		$('body').prepend('<a href="#top" class="top_link" title="Back to top"><i class="arrow-up"></i></a>');  
		$(window).scroll(function(){  
			posScroll = $(document).scrollTop();  
			if(posScroll >=550)  
				$('.top_link').fadeIn(600);  
			else  
				$('.top_link').fadeOut(600);  
		});

		/* slider */	
		var $figs = $('.sliding');
	
		$('<button id="previous"><i class="fleche-left"></i></button>').appendTo('.sliderNav').on('click', imagePrecedente);
		$('<button id="next"><i class="fleche-right"></i></button>').appendTo('.sliderNav').on('click', imageSuivante);

		$figs.not(':first').hide();
			
		function imageSuivante(e) {
			e.preventDefault();

			var $nextImage = $figs.filter(':visible').next('.sliding');
			
			if($nextImage.size() == 0)
			
				$nextImage = $figs.first();
				
				$figs.filter(':visible').fadeOut('fast', function() {
					$nextImage.fadeIn('slow');	
				});
		};

		function imagePrecedente(e) {
			e.preventDefault();
			var $previousImage = $figs.filter(':visible').prev('.sliding');
			
			if($previousImage.size() == 0)
			
				$previousImage = $figs.last();
				
				$figs.filter(':visible').fadeOut('fast', function() {
					$previousImage.fadeIn('fast');		
				});
		};
		/* fin du slider */

	});
}( jQuery ) );