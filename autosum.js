		function picktv() {

			// First get the element for each item and that of the total sum 

			var tv_tickedElt = document.getElementById("tv");                        // get id of tv item

			var total2Elt = document.getElementById("total2");                 // get id of total purchase		
			var total2 = total2Elt.innerText;                                // get the current written text (assigned zero before selection)
				total2 = parseFloat(total2);                                   // convert to a real number

			// if (tv_ticked.checked == false)
			if (tv_tickedElt.checked == true)
			{
            // alert("Select item to add to cart");
			alert("Samsung® 40-Inch FHD LED TV N5000 (Black) added to cart.");
			total2 = total2 + 110000;                                          // i.e. 0 + price of tv (on 1st click)			
            }
			else {
				alert("Samsung® 40-Inch FHD LED TV N5000 (Black) removed from cart.");    
				total2 = total2 - 110000;                           // Total - tv price when unchecked: to avoid erroneous "repititive addition"
			
			// var tv = parseFloat(document.getElementById("tv").value);
			// var wf = parseFloat(document.getElementById("wf").value);
			// var fl = parseFloat(document.getElementById("fl").value);

			//    if (tv_ticked.checked == true || wf.checked == true || (fl.checked == true))
			//     {
			// 		var ans = (tv + wf + fl);
			}
			total2Elt.innerText = total2;		
		}

		function pickwf() {

			var wf_tickedElt = document.getElementById("wf");                        // get id of woofer

			var total2Elt = document.getElementById("total2");                       // get id of total purchase 
			var total2 = parseFloat(total2Elt.innerText);                            // get the current total (defaults to zero before selection)

			if (wf_tickedElt.checked == true)
			{
				alert("Djack® 5.1CH Home Theater DJ-J5L Long Speaker added to cart.");
				total2 = total2 + 75000;                                // i.e. 0 + price of tv (on 1st click)			
			}
			else {
				alert("Djack® 5.1CH Home Theater DJ-J5L Long Speaker removed from cart.");    
				total2 = total2 - 75000;                          		// Total - tv price (when unchecked: to avoid erroneous "repititive addition")
			}
			total2Elt.innerText = total2;		                   		 // sends the updated total/sum back to the website to inform user.
		}


		function pickfl() {

			var fl_tickedElt = document.getElementById("fl");                        // get id of woofer

			var total2Elt = document.getElementById("total2");                       // get id of total purchase 
			var total2 = parseFloat(total2Elt.innerText);                            // get the current total (defaults to zero before selection)

			if (fl_tickedElt.checked == true)
			{
				alert("Les Deux® 64gb Flash Drive [LD-009H] to added to cart.");
				total2 = total2 + 12000;                                // i.e. 0 + price of tv (on 1st click)			
			}
			else {
				alert("Les Deux® 64gb Flash Drive [LD-009H] removed from cart.");    
				total2 = total2 - 12000;                          		// Total - tv price (when unchecked: to avoid erroneous "repititive addition")
			}
			total2Elt.innerText = total2;		                   		 // sends the updated total/sum back to the website to inform user.
		}
