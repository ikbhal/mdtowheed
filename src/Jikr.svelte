<script>
// Todo save to firebase use ikbhal app -> firestore

let count =0;
function increment() {
    count +=1;
}
</script>

<div class="jikr">
    <h4>Jikr</h4> 
    <div>Count: {count}</div>
    <button on:click={increment}>Increment</button>    
</div>