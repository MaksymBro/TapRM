var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.js';
document.getElementsByTagName('head')[0].appendChild(script);

function addtocart(){
    let variant = ;
    let quantity = ;
    var items = [{ quantity: quantity, id: variant }];
    $.ajax({
        type: "POST",
        url: '/cart/add.json',
        data: { items: items },
        success: function(data) {
            console.log('success',data);
        },
        dataType: 'application/json'
    });

}