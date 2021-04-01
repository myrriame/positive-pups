alert('feeling down? look at some puppies')

const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        changeClass()
        panel.classList.add('active');
    })
})

function changeClass() {
    panels.forEach(panel => {
        panel.classList.replace('active', 's')
    })
}