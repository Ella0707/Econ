function test(a, b) {
    return a + b
}

function select1() {
    document.getElementById("myDropdown1").classList.toggle("open");
}

  function select2() {
    document.getElementById("myDropdown2").classList.toggle("open");  
}

function select3() {
  document.getElementById("myDropdown3").classList.toggle("open");  
}

function select4() {
  document.getElementById("myDropdown4").classList.toggle("open");  
}

function select5() {
  document.getElementById("myDropdown5").classList.toggle("open");  
}

function select6() {
  document.getElementById("myDropdown6").classList.toggle("open");  
}

function slider() {
  document.getElementById("slider").classList.toggle("open");  
}

function filterBtn() {
    document.getElementById('filterBtn').classList.toggle('open');
    document.getElementById('filterOpen').classList.toggle('open');
}

function headerBtn() {
    document.getElementById('headerBtn').classList.toggle('open');
    document.getElementById('menuMobile').classList.toggle('open');
}

function select7() {
    document.getElementById("myDropdown7").classList.toggle("open");  
  }

$("#rangeSlider").ionRangeSlider();            

var $range = $(".js-range-slider"),
    $inputFrom = $(".js-input-from"),
    $inputTo = $(".js-input-to"),
    instance,
    min = 3000,
    max = 100000,
    from = 0,
    to = 0;

$range.ionRangeSlider({
    type: "double",
    min: min,
    max: max,
    from: 3000,
    to: 10000,
    hide_from_to: true,
    hide_min_max: true,
    onStart: updateInputs,
    onChange: updateInputs
});
instance = $range.data("ionRangeSlider");

function updateInputs (data) {
	from = data.from;
    to = data.to;
    
    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);	
}

$inputFrom.on("input", function () {
    var val = $(this).prop("value");
    
    // validate
    if (val < min) {
        val = min;
    } else if (val > to) {
        val = to;
    }
    
    instance.update({
        from: val
    });
});

$inputTo.on("input", function () {
    var val = $(this).prop("value");
    
    // validate
    if (val < from) {
        val = from;
    } else if (val > max) {
        val = max;
    }
    
    instance.update({
        to: val
    });
});
 
  
//   function filterFunction() {
//     var input, filter, ul, li, a, i;
//     input = document.getElementById("myInput");
//     filter = input.value.toUpperCase();
//     div = document.getElementById("myDropdown");
//     a = div.getElementsByTagName("a");
//     for (i = 0; i < a.length; i++) {
//       txtЗначение = a[i].textСодержание || a[i].innerText;
//       if (txtЗначение.toUpperCase().indexOf(filter) > -1) {
//         a[i].style.display = "";
//       } else {
//         a[i].style.display = "none";
//       }
//     }
//   }



//# sourceMappingURL=script.js.map
