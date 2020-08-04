const form = document.querySelector ("#info")
const name = document.querySelector ("#name")
const nameHelp = document.querySelector ("#nameHelp")
const email = document.querySelector ("#email")
const emailHelp = document.querySelector ("#emailHelp")

form.addEventListener ("submit", (event) => {
	event.preventDefault ()
	if (name.value === "" || email.value === "") {
		if (name.value === "") {
			nameHelp.innerText ="Por favor, ingresá tu nombre"
		} 
		if (email.value === "") {
			emailHelp.innerText ="Por favor, ingresá tu mail"
		}
	} else {
			emailHelp.innerText="Gracias, te escribiremos pronto"
			form.submit();
	}
})