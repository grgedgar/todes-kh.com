function openCloseslowopen(id){var obj = "";if(document.getElementById)obj = document.getElementById(id).style;else if(document.all)obj = document.all[id];else if(document.layers)obj = document.layers[id];else return 1;if(obj.opacity == "")obj.opacity = "1";else if(obj.opacity != "1")obj.opacity = "1";else obj.opacity = "1";}
function openCloseslowclose(id){var obj = "";if(document.getElementById)obj = document.getElementById(id).style;else if(document.all)obj = document.all[id];else if(document.layers)obj = document.layers[id];else return 1;if(obj.opacity == "")obj.opacity = "0";else if(obj.opacity != "0")obj.opacity = "0";else obj.opacity = "0";}

function openCloseopen(id){var obj = "";if(document.getElementById)obj = document.getElementById(id).style;else if(document.all)obj = document.all[id];else if(document.layers)obj = document.layers[id];else return 1;if(obj.display == "")obj.display = "block";else if(obj.display != "block")obj.display = "block";else obj.display = "block";}
function openCloseclose(id){var obj = "";if(document.getElementById)obj = document.getElementById(id).style;else if(document.all)obj = document.all[id];else if(document.layers)obj = document.layers[id];else return 1;if(obj.display == "")obj.display = "none";else if(obj.display != "none")obj.display = "none";else obj.display = "none";}

function checktop(){document.getElementById("foto_i_video_button").style.display = ("block");
document.getElementById("novosti_button").style.display = ("block");
document.getElementById("pedagogi_button").style.display = ("block");
document.getElementById("raspisaniye_button").style.display = ("block");
document.getElementById("voprosotvet_button").style.display = ("block");
document.getElementById("top_sch_kh_btn").style.backgroundColor = ("");
document.getElementById("top_fiv_btn").style.backgroundColor = ("");
document.getElementById("top_nov_btn").style.backgroundColor = ("");
document.getElementById("top_pedag_btn").style.backgroundColor = ("");
document.getElementById("top_rasp_btn").style.backgroundColor = ("");
document.getElementById("top_vopotvet_btn").style.backgroundColor = ("");
first.innerHTML = '';
video_top.style.display = 'none'; video_bottom.style.display = 'none';
}

function top_fiv(){showed_main.innerHTML = foto_i_video_js.innerHTML; 
document.getElementById("showed_main").opacity = ("0");
document.getElementById("top_fiv_btn").style.backgroundColor = ("#b41c39");
document.getElementById("foto_i_video_button").style.display = ("none");
video_top.style.display = 'block';
openCloseclose('fiv_hidden');openCloseopen('fiv_showmore');
document.title = 'TODES | Харьков | Фото и видео';}

function top_nov(){showed_main.innerHTML = novosti_js.innerHTML;
document.getElementById("showed_main").opacity = ("0");
document.getElementById("top_nov_btn").style.backgroundColor = ("#b41c39");
document.getElementById("novosti_button").style.display = ("none");
document.title = 'TODES | Харьков | Новости';}

function top_pedag(){showed_main.innerHTML = pedagogi_js.innerHTML;
document.getElementById("showed_main").opacity = ("0");
document.getElementById("top_pedag_btn").style.backgroundColor = ("#b41c39");
document.getElementById("pedagogi_button").style.display = ("none");
document.title = 'TODES | Харьков | Педагоги';}

function top_rasp(){showed_main.innerHTML = raspisaniye_js.innerHTML;
document.getElementById("showed_main").opacity = ("0");
document.getElementById("top_rasp_btn").style.backgroundColor = ("#b41c39");
document.getElementById("raspisaniye_button").style.display = ("none");
document.title = 'TODES | Харьков | Расписание';}

function top_vopotvet(){showed_main.innerHTML = voprosotvet_js.innerHTML;
document.getElementById("showed_main").opacity = ("0");
document.getElementById("top_vopotvet_btn").style.backgroundColor = ("#b41c39");
document.getElementById("voprosotvet_button").style.display = ("none");
document.title = 'TODES | Харьков | Вопрос-Ответ';}

function checkbottom(){if(foto_i_video_button.style.display == "none") if(novosti_button.style.display == "none") if(pedagogi_button.style.display == "none") if
(raspisaniye_button.style.display == "none") if(voprosotvet_button.style.display == "none") dr_razdely.style.display = ("none"); else dr_razdely.style.display = ("block");
video_top.style.display = 'none';video_bottom.style.display = 'none';}

function show_fiv(){first.innerHTML += foto_i_video_js.innerHTML;
video_bottom.style.display = 'block'}

function show_nov(){first.innerHTML += novosti_js.innerHTML}

function show_pedag(){first.innerHTML += pedagogi_js.innerHTML}

function show_rasp(){first.innerHTML += raspisaniye_js.innerHTML}

function show_vopotvet(){first.innerHTML += voprosotvet_js.innerHTML}