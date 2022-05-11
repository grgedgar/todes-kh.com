if (document.location.href.indexOf("#foto_i_video") != -1)
{checktop();openCloseslowclose('showed_main');top_fiv();
openCloseslowopen('showed_main')}

if (document.location.href.indexOf("#novosti") != -1)
{checktop();openCloseslowclose('showed_main');top_nov();
openCloseslowopen('showed_main')}

if (document.location.href.indexOf("#pedagogi") != -1)
{checktop();openCloseslowclose('showed_main');top_pedag();
openCloseslowopen('showed_main')}

if (document.location.href.indexOf("#raspisaniye") != -1)
{checktop();openCloseslowclose('showed_main');top_rasp();
openCloseslowopen('showed_main')}

if (document.location.href.indexOf("#voprosotvet") != -1)
{checktop();openCloseslowclose('showed_main');top_vopotvet();
openCloseslowopen('showed_main')}


if (document.location.href.indexOf("#foto_i_video_bottom") != -1)
{window.location = 'index.html#foto_i_video' }

if (document.location.href.indexOf("#novosti_bottom") != -1)
{window.location = 'index.html#novosti' }

if (document.location.href.indexOf("#pedagogi_bottom") != -1)
{window.location = 'index.html#pedagogi' }

if (document.location.href.indexOf("#raspisaniye_bottom") != -1)
{window.location = 'index.html#raspisaniye' }

if (document.location.href.indexOf("#voprosotvet_bottom") != -1)
{window.location = 'index.html#voprosotvet' }


if (document.location.href.indexOf("#obsh_info") != -1)
{text_container.style.margin='290px 0 0 -460px'; 
if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1)
{text_container.style.margin='419px 0 0 -460px';}
if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1)
{text_container.style.margin='417px 0 0 -460px';}}