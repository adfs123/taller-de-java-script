var i = 0;
var espacio = 5, asterisco = 1;
do {
   var respueta = ''; 
   var respueta_asterisco = '';
   var index_espacio = 0, index_asterisco = 0;
   while(index_espacio < espacio) {
       respueta = respueta + ' ';
       index_espacio++;
   }
   espacio--;
   while(index_asterisco < asterisco) {
       respueta_asterisco = respueta_asterisco + '*';
       index_asterisco++;
   }
   asterisco++;
   console.log(respueta + respueta_asterisco);
   i++;
} while (i <= 5);