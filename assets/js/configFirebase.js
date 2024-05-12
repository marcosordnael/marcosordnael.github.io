// Importar módulo do Firebase corretamente

import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";



  // Configuração do Firebase
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBa6hfQcNe1o8wTZaG5G2p8x_1GC5Hh6RM",
    authDomain: "formulario-portfolio-c32d1.firebaseapp.com",
    databaseURL: "https://formulario-portfolio-c32d1-default-rtdb.firebaseio.com",
    projectId: "formulario-portfolio-c32d1",
    storageBucket: "formulario-portfolio-c32d1.appspot.com",
    messagingSenderId: "811659724490",
    appId: "1:811659724490:web:94297fa5eaac9e1e475633",
    measurementId: "G-1MS3EZ51X5"
  };
  

  // Inicialize o Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);

  export {db, set, push, ref };