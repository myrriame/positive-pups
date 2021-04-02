alert('feeling down? look at some puppies')

var SECRET_KEY = config.ACCESS_KEY

const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        changeClass()
        panel.classList.add('active');

        var changePhoto = (data) => {
            console.log(data)
            var photoChange = document.getElementsByClassName('changephoto')
            photoChange.src = data.results[0].urls.full

        }

        fetch(`https://api.unsplash.com/search/photos?page=1&query=$puppy`, {
            headers: {
                'Accept-Version': 'v1',
                'Authorization': `Client-ID ${SECRET_KEY}`
            }
        })  // .then(reply => console.log(reply)) used to check status
            .then(reply => reply.json())
            // .then(data => console.log(data)) to get url info
            .then(data => changePhoto(data))
            // unable to get .catch to work
            .catch(err => console.log('ruh roh'))
    })
})

function changeClass() {
    panels.forEach(panel => {
        panel.classList.replace('active', 'changephoto')
    })
}

