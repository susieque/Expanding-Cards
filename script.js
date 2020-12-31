const panels = document.querySelectorAll('.panel') //puts panels in a node list like an array

panels.forEach(panel => {  //high order array method. takes function as argument
panel.addEventListener('click', () => {
    removeActiveClasses()
    panel.classList.add('active')  //when img is clicked it gets added to class of active and expands. But doesn't retracting the others. Make removeActiveClass function below.
})
})

function removeActiveClasses() {
    panels.forEach(panel => {  //could do an array but only need 1 
panel.classList.remove('active')  //will remove active classes from all of them then put active class on ones we click.
    })
}