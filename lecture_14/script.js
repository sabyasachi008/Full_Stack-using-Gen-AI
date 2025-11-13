async function getUser() {
  document.getElementById("user").innerHTML = `
                <div class="loading">Loading...</div>
            `;
  try {
    const response = await axios("https://randomuser.me/api/");
    const user = response.data.results[0];
    document.getElementById("user").innerHTML = `
          <img src = "${user.picture.large}" alt="userimg" />
          <p style="font-weight:bold;">${user.name.first} ${user.name.last}</p>

                <button onClick="getUser()">Generate Another User</button>
                `;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
