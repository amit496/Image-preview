$(document).ready(function() {
    console.log('First Method');
    $('#selectimage').on('change', function () {
        console.log('Select Image');
        let image = $(this).prop('files')[0];
        console.log(image);
        $('#imageobject').attr('src', URL.createObjectURL(image));
    });
});



// $(document).ready(function() {
//     console.log('Second Method');
//     $('#selectimage').on('change',function () {
//         let [imagefile] = selectimage.files;
//         if(imagefile)
//         {
//             imageobject.src = URL.createObjectURL(imagefile);
//         }
//     });
// });


// $(document).ready(function() {
//     console.log('Third Method');
//     $('#selectimage').on('change', function (e) {
//         imageobject.src = URL.createObjectURL(e.target.files[0]);
//     });
// });




// $(document).ready(function() {
//     console.log('Fourth Method');
//     $('#selectimage').on('change', function (e) {
//         console.log('Select Image');
//         let image_reader = new FileReader(); 
//         image_reader.onload = function()
//         {
//             let image_output = document.getElementById('imageobject');
//             image_output.src = image_reader.result;
//         }
//         image_reader.readAsDataURL(e.target.files[0]);
//     });
// });


