let currentSong = new Audio();
let songs;
let currFolder;

const songDetails = [
    {
      folderName: 'Mashup',
      songName: 'Love Mashup',
      songURL: 'https://prajin-kamble.github.io/Spotify-Clone/songs/Mashup/Love%20Mashup.mp3'
    },
    {
        folderName: 'Bhim Jayanti Songs',
        songName: 'Bhimacha Darara',
        songURL: 'https://prajin-kamble.github.io/Spotify-Clone/songs/Bhim%20Jayanti%20Songs/Bhimacha%20Darara.mp3'
    },
    {
        folderName: 'Bhim Jayanti Songs',
        songName: 'He Nan Distaya Sobhuna',
        songURL: 'https://prajin-kamble.github.io/Spotify-Clone/songs/Bhim%20Jayanti%20Songs/He%20Nan%20Distaya%20Sobhuna.mp3'
    },
    {
        folderName: 'Bhim Jayanti Songs',
        songName: 'Lay Bal Aal Mazya Dublya Porat',
        songURL: 'https://prajin-kamble.github.io/Spotify-Clone/songs/Bhim%20Jayanti%20Songs/Lay%20Bal%20Aal%20Mazya%20Dublya%20Porat.mp3'
    },
    {
        folderName: 'Bhim Jayanti Songs',
        songName: 'Sonyana Bharli Oti',
        songURL: 'https://prajin-kamble.github.io/Spotify-Clone/songs/Bhim%20Jayanti%20Songs/Sonyana%20Bharli%20Oti.mp3'
    },
    {
        folderName: 'Bhim Jayanti Songs',
        songName: 'Tumhi Khata Tya',
        songURL: 'https://prajin-kamble.github.io/Spotify-Clone/songs/Bhim%20Jayanti%20Songs/Tumhi%20Khata%20Tya.mp3'
    },
    {
        folderName: 'Hindi Songs',
        songName: 'Agar Tum Saath Ho',
        songURL: 'https://prajin-kamble.github.io/Spotify-Clone/songs/Hindi%20Songs/Agar%20Tum%20Saath%20Ho.mp3'
    },
    {
        folderName: 'Hindi Songs',
        songName: 'Akhiyaan Gulaab',
        songURL: 'https://prajin-kamble.github.io/Spotify-Clone/songs/Hindi%20Songs/Akhiyaan%20Gulaab.mp3'
    },
    {
        folderName: 'Hindi Songs',
        songName: 'Kesariya',
        songURL: 'https://prajin-kamble.github.io/Spotify-Clone/songs/Hindi%20Songs/Kesariya.mp3'
    },
    {
        folderName: 'Hindi Songs',
        songName: 'O Maahi',
        songURL: 'https://prajin-kamble.github.io/Spotify-Clone/songs/Hindi%20Songs/O%20Maahi.mp3'
    },
    {
        folderName: 'Hindi Songs',
        songName: 'Satranga',
        songURL: 'https://prajin-kamble.github.io/Spotify-Clone/songs/Hindi%20Songs/Satranga.mp3'
    },
    {
        folderName: 'Marathi Songs',
        songName: 'Govyachya Kinaryav',
        songURL: 'https://prajin-kamble.github.io/Spotify-Clone/songs/Marathi%20Songs/Govyachya%20Kinaryav.mp3'
    },
    {
        folderName: 'Marathi Songs',
        songName: 'Mauli Mauli',
        songURL: 'https://prajin-kamble.github.io/Spotify-Clone/songs/Marathi%20Songs/Mauli%20Mauli.mp3'
    },
    {
        folderName: 'Marathi Songs',
        songName: 'Nakhrewali',
        songURL: 'https://prajin-kamble.github.io/Spotify-Clone/songs/Marathi%20Songs/Nakhrewali.mp3'
    },
    {
        folderName: 'Marathi Songs',
        songName: 'Yugat mandali',
        songURL: 'https://prajin-kamble.github.io/Spotify-Clone/songs/Marathi%20Songs/Yugat%20mandali.mp3'
    },
    {
        folderName: 'Marathi Songs',
        songName: 'Zingaat',
        songURL: 'https://prajin-kamble.github.io/Spotify-Clone/songs/Marathi%20Songs/Zingaat.mp3'
    },
    {
        folderName: 'Old Hindi Songs',
        songName: 'Kisi Ki Muskurahaton Se',
        songURL: 'https://prajin-kamble.github.io/Spotify-Clone/songs/Old%20Hindi%20Songs/Kisi%20Ki%20Muskurahaton%20Se.mp3'
    },
    {
        folderName: 'Old Hindi Songs',
        songName: 'Likhe Jo Khat Tujhe',
        songURL: 'https://prajin-kamble.github.io/Spotify-Clone/songs/Old%20Hindi%20Songs/Likhe%20Jo%20Khat%20Tujhe.mp3'
    },
    {
        folderName: 'Old Hindi Songs',
        songName: 'Mere Mehboob Qayamat Hogi',
        songURL: 'https://prajin-kamble.github.io/Spotify-Clone/songs/Old%20Hindi%20Songs/Mere%20Mehboob%20Qayamat%20Hogi.mp3'
    },
    {
        folderName: 'Old Hindi Songs',
        songName: 'Pyar Hua Iqrar Hua',
        songURL: 'https://prajin-kamble.github.io/Spotify-Clone/songs/Old%20Hindi%20Songs/Pyar%20Hua%20Iqrar%20Hua.mp3'
    },
    {
        folderName: 'Old Hindi Songs',
        songName: 'Yeh Sham Mastani',
        songURL: 'https://prajin-kamble.github.io/Spotify-Clone/songs/Old%20Hindi%20Songs/Yeh%20Sham%20Mastani.mp3'
    },
    {
        folderName: 'Old Marathi Songs',
        songName: 'Aali Naar Thumkat',
        songURL: 'https://prajin-kamble.github.io/Spotify-Clone/songs/Old%20Marathi%20Songs/Aali%20Naar%20Thumkat.mp3'
    },
    {
        folderName: 'Old Marathi Songs',
        songName: 'Hi Chaal Turu Turu',
        songURL: 'https://prajin-kamble.github.io/Spotify-Clone/songs/Old%20Marathi%20Songs/Hi%20Chaal%20Turu%20Turu.mp3'
    },
    {
        folderName: 'Old Marathi Songs',
        songName: 'Reshmachya Reghani',
        songURL: 'https://prajin-kamble.github.io/Spotify-Clone/songs/Old%20Marathi%20Songs/Reshmachya%20Reghani.mp3'
    },
    {
        folderName: 'Old Marathi Songs',
        songName: 'Shoor Amhi Sardar',
        songURL: 'https://prajin-kamble.github.io/Spotify-Clone/songs/Old%20Marathi%20Songs/Shoor%20Amhi%20Sardar.mp3'
    },
    {
        folderName: 'Old Marathi Songs',
        songName: 'Sur Tech Chhedita',
        songURL: 'https://prajin-kamble.github.io/Spotify-Clone/songs/Old%20Marathi%20Songs/Sur%20Tech%20Chhedita.mp3'
    }
]

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
    songs = [];

    for (let index = 0; index < songDetails.length; index++) {
        if(songDetails[index].folderName === folderName){
            songs.push(`${songDetails[index].songName}.mp3`);
        }
    }

    // Show all the songs in the playlist
    let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0]
    songUL.innerHTML = ""
    for (const song of songs) {
        songUL.innerHTML = songUL.innerHTML + `<li><img class="invert" width="34" src="img/music.svg" alt="">
                            <div class="info">
                                <div>${song}</div>
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
    let newTrack = track.substring(0, track.lastIndexOf(".") + 0);
    for (let index = 0; index < songDetails.length; index++) {
      if(newTrack === songDetails[index].songName) {
            currentSong.src = `${songDetails[index].songURL}`
      }
}
    if (!pause) {
        currentSong.play();
        play.src = "img/pause.svg";
    }
    document.querySelector(".songinfo").innerHTML = decodeURI(track)
    document.querySelector(".songtime").innerHTML = "00:00 / 00:00"
}

async function displayAlbums() {
    const allFolders = ['Bhim Jayanti Songs', 'Hindi Songs', 'Marathi Songs', 'Mashup', 'Old Marathi Songs', 'Old Hindi Songs'];
    let cardContainer = document.querySelector(".cardContainer");
    for (let index = 0; index < allFolders.length; index++) {

       cardContainer.innerHTML = cardContainer.innerHTML + ` <div data-folder="${allFolders[index]}" class="card">
    <div class="play">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M5 20V4L19 12L5 20Z" stroke="#141B34" fill="#000" stroke-width="1.5"
                stroke-linejoin="round" />
        </svg>
    </div>

    <img src="https://prajin-kamble.github.io/Spotify-Clone/songs/${allFolders[index]}/cover.jpg" alt="">
    <h2>${allFolders[index]}</h2>
</div>`
        
    }

    // Load the playlist whenever card is clicked
    Array.from(document.getElementsByClassName("card")).forEach(e => { 
        e.addEventListener("click", async item => {
            songs = await getSongs(`${item.currentTarget.dataset.folder}`)
            playMusic(songs[0])

        })
    })
}

async function main() {
    // Get the list of all the songs
    await getSongs(songDetails[1].folderName);
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
        let currSong = currentSong.src.split("/").slice(-1)[0];
        let index = songs.indexOf(currSong.replaceAll("%20"," "))
        index -= 1;
        if (index>= 0) {
            playMusic(songs[index])
        }
    })

    // Add an event listener to next
    next.addEventListener("click", () => {
        currentSong.pause()
        let currSong = currentSong.src.split("/").slice(-1)[0];
        let index = songs.indexOf(currSong.replaceAll("%20"," "));
        index += 1;
        if (index< songs.length) {
            playMusic(songs[index])
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
