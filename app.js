const music = new Audio('audio/21.mp3');
// music.play(); 


const Mysongs = [
    {
        id: '21',
        songName : `Christmas Tree<br>
        <div class="subtitle">V</div>`,
        poster: "img/21.jpg",
    },
    {
        id: '1',
        songName : `On My Way<br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/1.jpg"
    },
    {
        id: '2',
        songName : `Faded<br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/2.jpg"
    },
    {
        id:' 3',
        songName : `On & On<br>
        <div class="subtitle">Cartoon</div>`,
        poster: "img/3.jpg"
    },
    {
        id: '4',
        songName : `Warrior<br>
        <div class="subtitle">Mortals</div>`,
        poster: "img/4.jpg"
    },
    {
        id: '5',
        songName : `Music<br>
        <div class="subtitle">Unknown</div>`,
        poster: "img/5.jpg"
    },
    {
        id: '6',
        songName : `Chill Music<br>
        <div class="subtitle">Unknown</div>`,
        poster: "img/6.jpg"
    },
    {
        id: '7',
        songName : `Tamasha<br>
        <div class="subtitle">A.R Raheman</div>`,
        poster: "img/7.jpg"
    },
    {
        id: '8',
        songName : `Sanak<br>
        <div class="subtitle">-</div>`,
        poster: "img/8.jpg"
    },
    {
        id: '9',
        songName : `Dilbar<br>
        <div class="subtitle">Neha Kakar</div>`,
        poster: "img/9.jpg"
    },
    {
        id: '10',
        songName : `Duniya<br>
        <div class="subtitle">Dhwani Bhanushali</div>`,
        poster: 'img/10.jpg'
    },
    {
        id: '11',
        songName : `Lagdi Lahor Di<br>
        <div class="subtitle">Guru Randhawa</div>`,
        poster: "img/11.jpg"
    },
    {
        id: '12',
        songName : `Putt Jatt Da<br>
        <div class="subtitle">Diljit Dosanjh</div>`,
        poster: "img/12.jpg"
    },
    {
        id: '13',
        songName : `Baarishein<br>
        <div class="subtitle">Atif aslam</div>`,
        poster: "img/13.jpg"
    },
    {
        id: '14',
        songName : `Vaste<br>
        <div class="subtitle">Dhwani Dhanushali</div>`,
        poster: "img/14.jpg"
    },
    {
        id: '15',
        songName : `Lut Jaye<br>
        <div class="subtitle">Jubin</div>`,
        poster: "img/15.jpg"
    },
    {
        id: '16',
        songName : `Christmas Tree<br>
        <div class="subtitle">V</div>`,
        poster: "img/16.jpg"
    },
    {
        id: '17',
        songName : `Christmas Tree<br>
        <div class="subtitle">V</div>`,
        poster: "img/17.jpg"
    },
    {
        id: '18',
        songName : `Christmas Tree<br>
        <div class="subtitle">V</div>`,
        poster: "img/18.jpg"
    },
    {
        id: '19',
        songName : `Christmas Tree<br>
        <div class="subtitle">V</div>`,
        poster: "img/19.jpg"
    },
    {
        id: '20',
        songName : `Christmas Tree<br><div class="subtitle">V</div>`,
        poster: "img/20.jpg"
    },
]

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = Mysongs[i].poster
    e.getElementsByTagName('h5')[0].innerHTML = Mysongs[i].songName
        
})

let start = document.getElementById('start');

start.addEventListener('click', () => {
    if(music.paused || music.currentTime <= 0){
        music.play();
        start.classList.remove('bi-play-fill')
        start.classList.add('bi-pause-fill')
    }else{
        music.pause();
        start.classList.remove('bi-pause-fill')
        start.classList.add('bi-play-fill')
    }
})

const makeAllplays = () => {
    Array.from(document.getElementsByClassName('playlistPlay')).forEach((a) =>{
        a.classList.remove('bi-play-fill');
        a.classList.add('bi-pause-fill');
    })
}

let index = 0;
let poster_control_side = document.getElementById('poster_control_side');
let title = document.getElementById('title');

Array.from(document.getElementsByClassName('playlistPlay')).forEach((e) =>{
    e.addEventListener('click', (el) => {
        index = el.target.id;
        // console.log(index)
        music.src = `audio/${index}.mp3`;
        poster_control_side.src = `img/${index}.jpg`;     
        
        let songTitles = Mysongs.filter((el) => {
            return el.id == index    
        })

        songTitles.forEach(els =>{
            let {songName} = els;
            title.innerHTML = songName;
        })  

        music.play();
        control_side.classList.remove('bi-play-fill');
        control_side.classList.add('bi-pause-fill');


        
        makeAllplays();
        a.target.classList.remove('bi-pause-fill');
        a.target.classList.add('bi-play-fill');
        wave.classList.add('active1');
    })
  
})









let current_start = document.getElementById('current_start');
let current_end = document.getElementById('current_end');

let seek_bar = document.getElementById('seek_bar');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate' , () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;
    

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);

    // console.log(min1);

    if(sec1 < 10){
        sec1 = `0${sec1}`;
    }

    current_end.innerText = `${min1} : ${sec1}`;

    
    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);
    
    if(sec2 < 10){
        sec2 = `0${sec2}`;
    }

    current_start.innerText = `${min2} : ${sec2}`;


    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek_bar.value = progressBar;
    // console.log(seek_bar.value);
    let seekBar = seek_bar.value;
    bar2.style.width = `${seekBar}%`;
    dot.style.left = `${seekBar}%`;

});


seek_bar.addEventListener('change', () =>{
    music.currentTime = (seek_bar.value / 100) * music.duration;
});

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');


vol.addEventListener('change', ()=>{
    if(vol.value == 0){
        vol_icon.classList.remove('bi-volume-up');
        vol_icon.classList.remove('bi-volume-down');
        vol_icon.classList.add('bi-volume-mute');
    }

    if(vol.value > 0){
        vol_icon.classList.remove('bi-volume-up');
        vol_icon.classList.add('bi-volume-down');
        vol_icon.classList.remove('bi-volume-mute');
    }

    if(vol.value > 50){
        vol_icon.classList.add('bi-volume-up');
        vol_icon.classList.remove('bi-volume-down');
        vol_icon.classList.remove('bi-volume-mute');
    }
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
});

let back = document.getElementsById('back');
let next = document.getElementById('next');

back.addEventListener('click', () =>{
    index -= 1;
    if(index < 1){
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `audio/${index}.mp3`;
    poster_control_side.src = `img/${index}.jpg`;
    music.play();
    control_side.classList.remove('bi-play-fill');
    control_side.classList.add('bi-pause-fill');


    let songTitles = Mysongs.filter((el) => {
        return el.id == index    
    })

    songTitles.forEach(els =>{
        let {songName} = els;
        title.innerHTML = songName;
    })

    makeAllplays();
    a.target.classList.remove('bi-pause-fill');
    a.target.classList.add('bi-play-fill');
    wave.classList.add('active1');
})







let pop_song_left_btn = document.getElementById('pop_song_left_btn')
let pop_song_right_btn = document.getElementById('pop_song_right_btn')

let pop_song = document.getElementsByClassName('pop_song')[0]

pop_song_right_btn.addEventListener('click', () => {
    pop_song.scrollLeft += 300 
})

pop_song_left_btn.addEventListener('click', () => {
    pop_song.scrollLeft -= 300 
})


let pop_art_left = document.getElementById('pop_art_left')
let pop_art_right = document.getElementById('pop_art_right')

let item = document.getElementsByClassName('item')[0]


pop_art_right.addEventListener('click', () => {
    item.scrollLeft += 300 
})

pop_art_left.addEventListener('click', () => {
    item.scrollLeft -= 300 
})
