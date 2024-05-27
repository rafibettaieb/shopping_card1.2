var favorite = Array.from(document.getElementsByClassName('fas fa-heart'));
var plus = Array.from(document.getElementsByClassName('fas fa-plus-circle'))
var count = Array.from(document.getElementsByClassName('quantity'))
var minus = Array.from(document.getElementsByClassName('fas fa-minus-circle'))
var UnitPrice = Array.from(document.getElementsByClassName('unit-price'))
var total = document.querySelector('.total')
var remove = Array.from(document.getElementsByClassName('fas fa-trash-alt'))


//total price

function totalPrice(){
    var sum = 0
    for(let i = 0;i<UnitPrice.length;i++){
        var price = (UnitPrice[i].innerHTML).substring(0,(UnitPrice[i].innerHTML).length-2)
        sum += parseInt(count[i].innerText) * parseInt(price)
    }
    total.innerHTML = sum + ' $'
}

// favorite

for(let i = 0;i<favorite.length;i++){
    favorite[i].addEventListener("click", function(){
        if(this.style.color == 'black') this.style.color = 'red'
        else this.style.color = 'black'
    });
}

// plus

for(let i = 0;i<plus.length;i++){
    plus[i].addEventListener("click", function(){
        count[i].innerHTML++;
        totalPrice()
    } )
}

// minus

for(let i = 0;i<minus.length;i++){
    minus[i].addEventListener("click", function(){
        if(count[i].innerHTML > 0) count[i].innerHTML--;
        totalPrice()
    })
}

// remove
for(let i = 0;i<remove.length;i++){
    remove[i].addEventListener("click", function(){
        UnitPrice[i].innerHTML = '0 $'
        this.parentNode.parentNode.parentNode.remove()
        totalPrice()
        })
}