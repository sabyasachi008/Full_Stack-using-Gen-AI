

const feedbacks = [];

const input = document.getElementById('feedInput');

const results = document.getElementById('results');

let upVote = 0;

function incVote() {
    upVote++;
    console.log("Upvote: ", upVote);
}

function downVote() {
    if(upVote <= 0) {
        return;
    }
    upVote--;
    console.log("Upvotes: ", upVote);
}   

function addFeedback(event) {

    event.preventDefault();
    const text = input.value.trim();
    if(!text) {
        return;
    }

    const feedback = {
        id: Date.now(),
        text: text,
        Votes: upVote
    };

    feedbacks.push(feedback);
    input.value = "";

}


function render() {
    results.innerHTML = "";

    feedbacks.forEach(fb => {
        results.innerHTML += `
        
         <div class="cards mt-2 p-2">

            <p>${fb.text}</p>
            <strong>Votes: ${fb.Votes}</strong>
         </div>
        `
    })
}