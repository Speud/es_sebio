(function(e){var b=e(".subscribe-form");var f=e("#primaryBlock a");var d=e("#primaryBlock form");var c;var a=[{value:"Savon au lait d'ânesse et Patchouli/Ylang-ylang",label:"Savon au lait d'ânesse et Patchouli/Ylang-ylang",price:"2,40 €",desc:"Santé & Nature -> Hygiène et soin",icon:"3.jpg"},{value:"Dentifrice Menthe et Thé Vert",label:"Dentifrice Menthe et Thé Vert",price:"3,90 €",desc:"Santé & Nature -> Hygiène et soin",icon:"5.jpg"},{value:"Gel Douche Exfoliant",label:"Gel Douche Exfoliant",price:"14,56 €",desc:"Santé & Nature -> Hygiène et soin",icon:"4.jpg"},{value:"Elixir 100 % huile de pépins de figue de Barbarie",label:"Elixir 100 % huile de pépins de figue de Barbarie",price:"31,89 €",desc:"Santé & Nature -> Santé et bien-être",icon:"2.jpg"},{value:"T-shirt Homme Manches courtes - Truffe (ideo)",label:"T-shirt Homme Manches courtes - Truffe (ideo)",price:"35 €",desc:"Vêtements -> Homme",icon:"1.jpg"}];e(function(){e(".quantite").on("change",function(){var m=e(this).val();var k=e(this).parent().prev().find("span.prixUnite").text().replace(",",".");var o=e(this).parent().next().find("span.prix").text().replace(",",".");var l=0;var n=4.1;o=m*k;e(this).parent().next().find("span.prix").text(o.toFixed(2));var p=[];e("span.prix").each(function(){p.push({key:e(this).text(),value:e(this).text().replace(",",".")})});e.each(p,function(r,q){l+=parseFloat(q.value)});if(l<60){e(".prixRestant strong").text((60-l).toFixed(2));l+=4.1}else{if(l>60){e("#promoLivraison td").text("Vous bénéficiez de la livraison gratuite via Envoi du colis (par coliposte ou taxipost)");e(".prixColis > td.right").text("Remboursement:");l-=4.1}}e(".prixTotal strong").text(l.toFixed(2))});e('<td colspan="5"><span class="etoile">*</span> Ajoutez des produits d\'une valeur de <span class="prixRestant"><strong>38.11</strong></span> <sup>€</sup> afin de bénéficier de la livraison gratuite via Envoi du colis (par coliposte ou taxipost).</td>').appendTo("#promoLivraison");e("#search-submit").autocomplete({minLength:0,source:a,focus:function(k,l){e("#search-submit").val(l.item.label);return false},select:function(k,l){e("#search-submit").val(l.item.label);e("#search-submit-id").val(l.item.value);e("#search-submit-price").html(l.item.price);e("#search-submit-description").html(l.item.desc);e("#search-submit-icon").attr("src","img/article/"+l.item.icon);return false}}).data("autocomplete")._renderItem=function(k,l){return e("<li>").data("item.autocomplete",l).append("<a href='pages/article.html' title='Voir cet article'><figure><img src='img/article/"+l.icon+"' width='auto' height='50px' /></figure><p>"+l.label+" <strong>"+l.price+"</strong> <small>"+l.desc+"</small></p></a>").appendTo(k)};e(".primaryNav li").hoverIntent({sensitivity:7,interval:150,over:function(){e(".secondaryNav",this).effect("slide",{direction:"left"},500);e(this).find("a:first").addClass("active")},timeout:150,out:function(){e(".secondaryNav",this).fadeOut("slow");e(this).find("a:first").removeClass("active")}});e(".secondaryNav li").hoverIntent({sensitivity:7,interval:150,over:function(){e(".thirdNav",this).effect("slide",{direction:"left"},500);e(this).find("a:first").addClass("active")},timeout:150,out:function(){e(".thirdNav",this).fadeOut("slow");e(this).find("a:first").removeClass("active")}});b.hide();e(".subscribe a").click(function(){b.slideDown("slow")});var i={header:"arrow-right",activeHeader:"arrow-down"};e("#accordion").accordion({icons:i,collapsible:true});e("body").prepend('<a href="#top" class="top_link" title="Back to top"><i class="arrow-up"></i></a>');e(window).scroll(function(){c=e(document).scrollTop();if(c>=550){e(".top_link").fadeIn(600)}else{e(".top_link").fadeOut(600)}});var j=e(".sliding");e('<button id="previous"><i class="fleche-left"></i></button>').appendTo(".sliderNav").on("click",g);e('<button id="next"><i class="fleche-right"></i></button>').appendTo(".sliderNav").on("click",h);j.not(":first").hide();function h(l){l.preventDefault();var k=j.filter(":visible").next(".sliding");if(k.size()==0){k=j.first()}j.filter(":visible").fadeOut("fast",function(){k.fadeIn("slow")})}function g(l){l.preventDefault();var k=j.filter(":visible").prev(".sliding");if(k.size()==0){k=j.last()}j.filter(":visible").fadeOut("fast",function(){k.fadeIn("fast")})}})}(jQuery));