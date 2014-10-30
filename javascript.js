(function() {
	var etiqueta_head = document.getElementsByTagName('head')[0];
	var barra_css = document.createElement('link');
	barra_css.setAttribute('rel', 'stylesheet');
	barra_css.setAttribute('type', 'text/css');
	barra_css.setAttribute('href', 'barra.css');
	etiqueta_head.appendChild(barra_css);
	var etiqueta_body = document.getElementsByTagName('body')[0];
	var barra_html = '<div id="barra-nodal"> \
<div id="logo-nodal">  \
<a href="http://www.gruponodal.com" id="logo-wrapper"> \
<div id="amarillo"></div> \
<div id="naranja"></div> \
<div id="azul"></div> \
<div id="rojo"></div> \
</a> \
</div> \
<ul class="social-nodal"> \
<li><a href="http://www.facebook.com/' + barra_nodal_social_facebook + '" target="_blank"><i class="fa fa-facebook-square"></i><span>Me gusta</span></a></li> \
<li><a href="http://www.twitter.com/' + barra_nodal_social_twitter + '" target="_blank"><i class="fa fa-twitter-square"></i><span>Síguenos</span></a></li> \
<li><a href="' + barra_nodal_social_contacto + '" target="_blank"><i class="fa fa-envelope-o"></i><span>Contacto</span></a></li> \
</ul> \
<ul class="links-nodal"> \
<li><a href="http://www.laneros.com">LANEROS</a></li> \
<li><a href="http://www.lapelotona.com">LAPELOTONA</a></li> \
<li><a href="http://www.turket.co">TURKET</a></li> \
<li><a href="http://www.hwcol.com">HWCOL</a></li> \
<li><a href="http://www.gadgeteros.co">GADGETEROS</a></li> \
</ul> \
</div>';
	etiqueta_body.insertAdjacentHTML('beforeend', barra_html);
}());