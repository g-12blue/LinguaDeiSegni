	/*Finestra-freccia*/
    let acc = document.getElementsByClassName("accordion");
    let i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");

 

            let panel = this.nextElementSibling;
            let arrow = this.getElementsByTagName('img')[0];

            arrow.style.transform = "rotate(10deg)";
          
            if (panel.style.display == "block") {
              panel.style.display = "none";


              arrow.style.transform = "rotate(0deg)";

            } 
            else {
              panel.style.display = "block";

              arrow.style.transform = "rotate(180deg)";

            }
        });
    } 


	const input = document.querySelector('input')
	const output = document.querySelector('.box')

	input.oninput = function(){
		let parola = input.value.toLowerCase()

		output.innerHTML = ''
		for (let i=0; i<parola.length; i++) {
			output.innerHTML += codice[parola[i]] + ' '
		}
	}
