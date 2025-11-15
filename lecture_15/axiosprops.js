
axios.interceptor.response(

    //metadata -> config
    response => {
        console.log("Response", response.config.url);
        console.log(response.status)
        return response;
    },
    error => {
        console.log("Response", error.message);
        console.log(response.status);
    }
)


async function basicGet() {

    try {

    }
    catch {

    }
}



async function getWithHeader() {
    try {
        const res = await axios.get('', {

            //meta data -> data for the request
            header: {
                'Accept' : 'application/json',      //in the application we are dealing with meta data.
            }
        })
    }
    catch {

    }
}

async function getWithQueryParam() {
    try {
        const res = await axios.get(
            '', {
                params: {
                    limit: 5,               //this limit the number of response so that the unnecessary storage won't be filled
                    format: 'json'
                }
            }
        )
    }
    catch {

    }
}


//concurrent -> 3 api end points request at once -> promise call

// Promise.all() //Creates a Promise that is resolved with an array of results when all of the provided Promises resolve, or rejected when any Promise is rejected.

//Concurrent promise request parallely. 
const res = await Promise.all(
    [
        axios.get(''),
        axios.get('',  {
            params: {

            }
        })
    ]
)