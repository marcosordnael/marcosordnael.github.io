// JANELAS FLUTUANTES
// Abrir Janela 3
function abrirJanela() {
    document.getElementById('janela3').style.display = 'block';
  }
  
  function fecharJanela() {
    document.getElementById('janela3').style.display = 'none';
  }

// Abrir Janela 2
function abrirJanela2() {
    document.getElementById('janela2').style.display = 'block';
  }
  
  function fecharJanela2() {
    document.getElementById('janela2').style.display = 'none';
  }

// Abrir Janela 1
function abrirJanela1(){
    document.getElementById('janela1').style.display = 'block';
}
    function fecharJanela1(){
        document.getElementById('janela1').style.display = 'none';
    }
  

// ANIMAR ROLAGEM DA PAGINA
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
