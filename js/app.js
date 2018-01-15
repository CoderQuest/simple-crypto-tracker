$(document).ready(function() {
	$("#add-to-list").on("click", function() {
	  var list = document.getElementById('list'),
	  	  newLI = document.createElement('li');


	  	  // inputText = document.getElementById('input-box').value || "Exchange";



	  
	  insertNewExchange(newLI);

	  list.appendChild(newLI);	  
	  setTimeout(function() {
	    newLI.className = newLI.className + " show";
	  }, 10);
	});

	$(document).on('click', '.add-coin-name', function() {
		var	 $inputBox = $(this).siblings('.coin-name-input').eq(0),
			 $inputText = $inputBox.val() || "currency";
			 $inputBox.before('<li>'+$inputText+'</li>');
			
	})

	














	function insertNewExchange(parentListEl) {
		 var addCurrencyNameButton = document.createElement('button'),	  	  
	  	  exchangeHeader = document.createElement('h6'),
	  	  currencyList = document.createElement('ul'),	
	  	  currencyNameInputBox = document.createElement('input');

		  parentListEl.className = 'exchange';
		  addCurrencyNameButton.className = "add-coin-name";
		  currencyNameInputBox.className = "coin-name-input"

		  addCurrencyNameButton.innerHTML = "add currency";
		  exchangeHeader.innerHTML = 'Exchange';
		  currencyList.innerHTML += currencyNameInputBox.outerHTML + addCurrencyNameButton.outerHTML;	 
		  parentListEl.innerHTML += exchangeHeader.outerHTML + currencyList.outerHTML;	  	  
	}
});
