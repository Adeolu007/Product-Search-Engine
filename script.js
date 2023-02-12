const fashion = document.querySelector('.fashion')
const search = ()=>{
    const searchbox = document.getElementById('search-item').value.toUpperCase();
    const storeitems = document.getElementById('product-list')
    const product = document.querySelectorAll('.product')
    const pname = document.getElementsByTagName('h2')
}

//  console.log(fashion.value)

//  console.log(4)

fashion.addEventListener('keydown', function(e){
e.preventDefault();
if(e.key==='Enter')(
    console.log(e.target)
)
})