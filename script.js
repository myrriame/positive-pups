alert('feeling down? look at some puppies')

const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        panel.classList.add('active')
    })
})