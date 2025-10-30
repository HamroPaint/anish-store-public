// const baseUrl = "https://hamropaint.github.io/hamropaint/tenant_assets"
const baseUrl = "file:///home/siyo/coding/job/paint/admin/frontend/dist/tenant"
function loadReactApp() {
  console.log("Loading admin page...");

  var style = document.createElement("link");
  style.rel = "stylesheet";
  style.href = `${baseUrl}/style.css`;
  document.head.appendChild(style);

  var styleScript = document.createElement("script");
  styleScript.src = `${baseUrl}/style.js`;
  document.head.appendChild(styleScript);

  // Finally load react app
  var script = document.createElement("script");
  script.src = `${baseUrl}/index.js`;
  document.head.appendChild(script);
}

document.addEventListener("DOMContentLoaded", function () {
  // bind a button by id to a function
  document.getElementById("load-admin-page").addEventListener("click", loadReactApp);
  loadReactApp();
});
