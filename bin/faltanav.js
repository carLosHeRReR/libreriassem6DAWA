function faltantenav() {
    var today = new Date();
    var christmas = new Date(today.getFullYear(), 11, 25); 
  
    if (today.getMonth() == 11 && today.getDate() > 25) {
      christmas.setFullYear(christmas.getFullYear() + 1);
    }
  
    var oneDay = 24 * 60 * 60 * 1000; 
    var daysLeft = Math.round((christmas - today) / oneDay);
  
    console.log('Faltan '+daysLeft+' dias para navidad');
}

module.exports = {faltantenav}
  