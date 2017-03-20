/* 
$( document ).on( "pagecreate", pageselector, function() {
    var picker = $( "input[type='text']", this );
    picker.mobipick();
});

picker.on( "change", function() {
    // formatted date, like yyyy-mm-dd              
    var date = $( this ).val();
 
    // JavaScript Date object
    var dateObject = $( this ).mobipick( "option", "date" );
});
*/ 

var working = function (){
    alert('Javascript works');
}
working();
