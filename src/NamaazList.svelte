<script>
import { onMount } from 'svelte';
import { db } from './firebase';:w

let subaah=false;
let zuhr= false;
let asr=false;
let magrib=false;
let isha=false;
let date = new Date();
	
let now = new Date(), month, day, year;
let dateString;
onMount(()=> {
    month = '' + (now.getMonth() + 1),
    day = '' + now.getDate(),
    year = now.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    dateString = [year, month, day].join('-');
});

function add() {
  db.collection('towheed_namaaz').add({ dateString, subaah, zuhr, asr, magrib, isha, created: Date.now() });
  subah = false;
  zuhr =false;
  asr = false;
  magrib = false;
  isha= false;
}

function saveNamaaz(){
 console.log("will save namaaz");   
}
</script>

<div class="namaazList">
    <h4>Namaaz List</h4>
    <button on:click={saveNamaaz}>Save Namaaz Audit</button>
    <div class="date">currenet date {date}</div>
    <label>
        Select date:
        <input type=date bind:value={dateString}>
    </label>

    <label>
        <input type=checkbox bind:checked={subaah}>
        Subaah Namaaz
    </label>
    <label>
        <input type=checkbox bind:checked={zuhr}>
        Zuhr Namaaz
    </label>
    <label>
        <input type=checkbox bind:checked={asr}>
        Asr Namaaz
    </label>
    <label>
        <input type=checkbox bind:checked={magrib}>
        Magrib Namaaz
    </label>
    <label>
        <input type=checkbox bind:checked={isha}>
        Ishaah Namaaz
    </label>
</div>