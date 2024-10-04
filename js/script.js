let currentSong = new Audio();
let songs;
let currFolder;
const baseURL = 'https://prajin-kamble.github.io/Spotify-Clone/songs/';

function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00";
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
}

async function getSongs(folderName) {

    currFolder = folderName;
    songsName = ['Love Mashup', 'Bhimacha Darara', 'He Nan Distaya Sobhuna','Lay Bal Aal Mazya Dublya Porat', 'Nandana Nandana', 'Sonyana Bharli Oti', 'Tumhi Khata Tya', 'Agar Tum Saath Ho', 'Akhiyaan Gulaab', 'Kesariya', 'O Maahi', 'Satranga', 'Govyachya Kinaryav', 'Mauli Mauli', 'Nakhrewali', 'Yugat mandali', 'Zingaat', 'Kisi Ki Muskurahaton Se', 'Likhe Jo Khat Tujhe', 'Mere Mehboob Qayamat Hogi', 'Pyar Hua Iqrar Hua', 'Yeh Sham Mastani', 'Aali Naar Thumkat', 'Hi Chaal Turu Turu', 'Reshmachya Reghani', 'Shoor Amhi Sardar', 'Sur Tech Chhedita'];
    
    songs = [];
    let replaceSongsName = [];

    for (let index = 0; index < songsName.length; index++) {
        replaceSongsName.push(songsName[index].replaceAll(" ", "%20"))
    }

    for (let index = 0; index < replaceSongsName.length; index++) {
        let a = await fetch(`${baseURL}/${folderName}/${songsName[index]}.mp3`)
        if(a.ok){
            songs.push(`${replaceSongsName[index]}.mp3`);
        }else{
            continue;
        }
    }

    console.log(songs);

    // Show all the songs in the playlist
    let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0]
    songUL.innerHTML = ""
    for (const song of songs) {
        songUL.innerHTML = songUL.innerHTML + `<li><img class="invert" width="34" src="img/music.svg" alt="">
                            <div class="info">
                                <div> ${song.replaceAll("%20", " ")}</div>
                            </div>
                            <div class="playnow">
                                <span>Play Now</span>
                                <img class="invert" src="img/play.svg" alt="">
                            </div> </li>`;
    }

    // Attach an event listener to each song
    Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", element => {
            playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim())

        })
    })
    return songs
}

const playMusic = (track, pause = false) => {
    currentSong.src = `${baseURL}${currFolder}/` + track
    if (!pause) {
        currentSong.play()
        play.src = "img/pause.svg"
    }
    document.querySelector(".songinfo").innerHTML = decodeURI(track)
    document.querySelector(".songtime").innerHTML = "00:00 / 00:00"


}

async function displayAlbums() {

    let cardContainer = document.querySelector(".cardContainer")

    foldersName = ['Bhim Jayanti Songs', 'Hindi Songs', 'Marathi Songs', 'mashup', 'Old Hindi Songs', 'Old Marathi Songs']
    
    replacefoldersName = []

    for (let index = 0; index < foldersName.length; index++) {
        replacefoldersName.push(foldersName[index].replaceAll(" ", "%20"))
    }
    
    for (let index = 0; index < replacefoldersName.length; index++) {
        console.log(`${baseURL}${replacefoldersName[index]}/info.json`)
        let b = await fetch(`${baseURL}${replacefoldersName[index]}/info.json`)
        let response = await b.json();
        cardContainer.innerHTML = cardContainer.innerHTML + ` <div data-folder="${foldersName[index]}" class="card">
    <div class="play">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M5 20V4L19 12L5 20Z" stroke="#141B34" fill="#000" stroke-width="1.5"
                stroke-linejoin="round" />
        </svg>
    </div>

    <img src="${baseURL}${replacefoldersName[index]}/cover.jpg" alt="">
    <h2>${response.title}</h2>
</div>`
        
    }

    // Load the playlist whenever card is clicked
    Array.from(document.getElementsByClassName("card")).forEach(e => { 
        e.addEventListener("click", async item => {
            console.log(item.currentTarget.dataset.folder)
            songs = await getSongs(`${item.currentTarget.dataset.folder}`)  
            playMusic(songs[0])

        })
    })
}

async function main() {
    // Get the list of all the songs
    await getSongs("mashup")
    playMusic(songs[0], true)

    // Display all the albums on the page
    await displayAlbums()


    // Attach an event listener to play, next and previous
    play.addEventListener("click", () => {
        if (currentSong.paused) {
            currentSong.play()
            play.src = "img/pause.svg"
        }
        else {
            currentSong.pause()
            play.src = "img/play.svg"
        }
    })

    // Listen for timeupdate event
    currentSong.addEventListener("timeupdate", () => {
        document.querySelector(".songtime").innerHTML = `${secondsToMinutesSeconds(currentSong.currentTime)} / ${secondsToMinutesSeconds(currentSong.duration)}`
        document.querySelector(".circle").style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%";
    })

    // Add an event listener to seekbar
    document.querySelector(".seekbar").addEventListener("click", e => {
        let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
        document.querySelector(".circle").style.left = percent + "%";
        currentSong.currentTime = ((currentSong.duration) * percent) / 100
    })

    // Add an event listener for hamburger
    document.querySelector(".hamburger").addEventListener("click", () => {
        document.querySelector(".left").style.left = "0"
    })

    // Add an event listener for close button
    document.querySelector(".close").addEventListener("click", () => {
        document.querySelector(".left").style.left = "-120%"
    })

    // Add an event listener to previous
    previous.addEventListener("click", () => {
        currentSong.pause()
        let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0])
        if ((index - 1) >= 0) {
            playMusic(songs[index - 1])
        }
    })

    // Add an event listener to next
    next.addEventListener("click", () => {
        currentSong.pause()

        let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0])
        if ((index + 1) < songs.length) {
            playMusic(songs[index + 1])
        }
    })

    // Add an event to volume
    document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change", (e) => {
        currentSong.volume = parseInt(e.target.value) / 100
        if (currentSong.volume >0){
            document.querySelector(".volume>img").src = document.querySelector(".volume>img").src.replace("mute.svg", "volume.svg")
        }
    })

    // Add event listener to mute the track
    document.querySelector(".volume>img").addEventListener("click", e=>{ 
        if(e.target.src.includes("volume.svg")){
            e.target.src = e.target.src.replace("volume.svg", "mute.svg")
            currentSong.volume = 0;
            document.querySelector(".range").getElementsByTagName("input")[0].value = 0;
        }
        else{
            e.target.src = e.target.src.replace("mute.svg", "volume.svg")
            currentSong.volume = .10;
            document.querySelector(".range").getElementsByTagName("input")[0].value = 10;
        }

    })





}

main() 