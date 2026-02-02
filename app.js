const playlist = document.getElementById("playlist");

function loadSongs() {
    const songs = JSON.parse(localStorage.getItem("songs")) || [];
    playlist.innerHTML = "";
    songs.forEach(song => {
        const li = document.createElement("li");
        li.textContent = song;
        playlist.appendChild(li);
    });
}

function addSong() {
    const song = document.getElementById("song").value;
    const artist = document.getElementById("artist").value;

    if (song === "" || artist === "") return;

    const songs = JSON.parse(localStorage.getItem("songs")) || [];
    songs.push(`${song} - ${artist}`);
    localStorage.setItem("songs", JSON.stringify(songs));

    document.getElementById("song").value = "";
    document.getElementById("artist").value = "";

    loadSongs();
}

loadSongs();
