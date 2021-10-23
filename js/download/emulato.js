function downloadEmulator() {
  document.getElementById('downloadText').style.display = "block";
  // this section stats the download of The Legend Of Zelda Oracle Of Seasons
  setTimeout('downloadLegendOfZeldaOracleOfSeasons()', 14000);
}
function downloadLegendOfZeldaOracleOfSeasons() {
  window.location = "/videogames/Legend of Zelda, The - Oracle of Seasons (U) [C][!].gbc";
  // this section starts the download of Visual Boy Advance.
  setTimeout('downloadVisualBoyAdvance()', 24000);
}
function downloadVisualBoyAdvance() {
  window.location = "https://github.com/josephcrosmanplays532/Visual-Boy-Advance-1.7.2/archive/main.zip";
  document.getElementById('downloadText').style.display = "none";
}
