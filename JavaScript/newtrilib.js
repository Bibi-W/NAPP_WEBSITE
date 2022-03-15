
/* Will contain elements used by multiple scripts */

function include_script(included_file){
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = included_file;
  document.getElementsByTagName("head")[0].appendChild(script);
  test();
}