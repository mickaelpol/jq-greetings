console.log('have fun !');

// var prenom = $('#first_name').change(function(){
// 	// console.log( $('#first_name').val() );
// 	var input = "";
// 	input =  $('#first_name').val() ;
// 	console.log(input);

// 	var input2 = "";
// 	input2 = $('#last_name').val();
// 	console.log(input2);
// });

$('.btn').click(function(){
	var prenom = $('#first_name').val();
	var nom = $('#last_name').val();
	var city = $('#city').val();
	// var objet = {


	// prenom : $('#first_name').val(),
	
	// nom : $('#last_name').val(),
	
	// city : $('#city').val(),

	// }

	$('#username').html( prenom + " " + nom + " " + "tu habite à " +  city + " ?");
 	 	
	

	// alert("bonjour " + prenom + " " + nom + " " + "de " +  city);
});