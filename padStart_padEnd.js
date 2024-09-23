//padStart() to pad numbers with zeros:
//Fill with zeros to complete 6 space ( counting from 1 to 6) and complete with teh character proposed
const invoiceNumber = '123';
console.log(invoiceNumber.padStart(6, '0'));  // Output: '000123'


//padEnd() to create spaces or dots for table formatting:
//Fill with . to complete 6 space ( counting from 1 to 15), and complete with the character proposed
const productName = 'Product';
console.log(productName.padEnd(15, '.'));  // Output: 'Product......'