function calfecnac() 
{
    const nacimiento = 2004;
    const year = new Date().getFullYear();
    const age = year - nacimiento;
  
    console.log('Tu edad es: '+age+' años');
}
module.exports = {calfecnac}