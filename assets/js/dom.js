class Show {
  static showKlasemen(data) {
    let klasmenHTML = "";
    let dataTeamHTML = "";
    data.standings.forEach(d_klasmen => {
      d_klasmen.table.forEach(d_team => {
        dataTeamHTML += `
        <tr>
              <td class="center-align">${d_team.position}</td>
              <td>
              <a href="../team.html?id=${d_team.team.id}">
              <p class="hide-on-small-only">
              <img class = "show-on-medium-and-up show-on-medium-and-down" src=${d_team.team.crestUrl.replace(/^http:\/\//i, 'https://')} alt="${d_team.team.name} Image"style="float:left;width:22px;height:22px;margin-right:20px">
              ${d_team.team.name}
              </p>
              <p class="hide-on-med-and-up">
              <img src=${d_team.team.crestUrl}  style="float:left;width:22px;height:22px;margin-right:20px">
              </p>
    
              </a>
              </td>
              <td class="center-align">${d_team.playedGames}</td>
              <td class="center-align">${d_team.won}</td>
              <td class="center-align">${d_team.draw}</td>
              <td class="center-align">${d_team.lost}</td>
              <td class="center-align">${d_team.points}</td>
              <td class="center-align">${d_team.goalsFor}</td>
              <td class="center-align">${d_team.goalsAgainst}</td>
              <td class="center-align">${d_team.goalDifference}</td>
            </tr>`;
      });
      klasmenHTML += `
            <div class="row">
            <div class="col s12 m12" id="tabelKlasmen">
              <div class="card">
                <div class="card-content">
                  <table class="responsive-table striped ">
                    <thead>
                      <tr>
                        <th class="center-align">Position</th>
                        <th>Team</th>
                        <th class="center-align">Play</th>
                        <th class="center-align">Won</th>
                        <th class="center-align">Draw</th>
                        <th class="center-align">Lost</th>
                        <th class="center-align">Points</th>
                        <th class="center-align">GF</th>
                        <th class="center-align">GA</th>
                        <th class="center-align">GD</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${dataTeamHTML}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          `;
    });
    document.getElementById("body-content").innerHTML = klasmenHTML;
  }

  static showMatchData(data) {
    let matchesHTML = "";
    data.matches.slice(0, 10).forEach(data => {
      matchesHTML += `
        <div class="col s12 m6 l6">
          <div class="card">
            <div class="card-content">
              <div center-align>
              <h5 class="center-align">Matchday: ${data.matchday}</h5>
              <div class="center-align">Kick Off: ${new Date(
        data.utcDate
      ).toLocaleString("en-id", {
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      })}</div>
          
          <div class="row" style="margin:20px">
            <div class="col s5 truncate right-align">
            <span class="blue-grey-text text-darken-4">  ${
        data.homeTeam.name
        }</span>
        </div>
        <div class="col s2 ">
          VS
        </div>
        <div class="col s5 truncate left-align">
        <span class="blue-grey-text text-darken-4">  ${
        data.awayTeam.name
        }       </span>
              </div>
            </div>
          </div>
          </div>
          </div>
        </div>
                `;
    });
    document.querySelector("#tabel-match").innerHTML = matchesHTML;
  }

  static showTeamById(data) {
    let detailTeamHTML = `
      <div style=padding-top:10%>
        <table>
          <tr>
            <td>Nama Team </td>
            <td>: ${data.name}</td>
          </tr>
          <tr>
          <td>Nama Pendek </td>
            <td>: ${data.shortName}</td>
          </tr>
          <tr>
            <td>Alamat </td>
            <td>: ${data.address}</td>
          </tr>
          <tr>
            <td>Phone </td>
            <td>: ${data.phone}</td>
          </tr>
          <tr>
            <td>Website </td>
            <td>: <a href='${data.website}'>${data.website}</a></td>
          </tr>
          <tr>
            <td>Email </td>
            <td>: ${data.email}</td>
          </tr>
          <tr>
            <td>Tahun Terbentuk Team </td>
            <td>: ${data.founded}</td>
          </tr>
          <tr>
            <td>Warna Team </td>
            <td>: ${data.clubColors}</td>
          </tr>
      </table>
    </div>
    <div class="center-align" style=padding-top:30px>
      <div class="btn waves-effect waves-light blue-grey darken-3"><i id="addFav" class="material-icons blue-grey-text">favorite</i></div>
      <a href="/#home" class="btn waves-effect waves-light blue-grey darken-3">Home</a>
      <a href="/#favorite" class="btn waves-effect waves-light blue-grey darken-3">Go to Favorites</a>
    </div>
  `;
    document.getElementById("body-content").innerHTML = detailTeamHTML;
  }

  static showDataFav(data) {
    let dataFav = "";
    if (data.length) {
      data.map((datas, i) => {
        console.log(datas)
        dataFav += `
        <div class="col s6 m4 l4">
          <div class="card blue-grey lighten-1">
            <div class="card-content">
              <div center-align>
                <h5 class="center-align">
                  <span class="blue-grey-text text-darken-4">
                    <a href="../team.html?id=${datas.id}" class="light-blue-text text-lighten-5
                    ">${datas.name}</a>
                  </span>
                </h5>
              </div>
            </div>
          </div>
        </div>
        `;
      });
    } else {
      dataFav += `
      <img src="../assets/img/undraw_empty_xct9.svg" alt="oops img" style="width: 40%; display: block; margin:10% auto;">
      <h5 class="grey-text text-darken-1" style="text-align: center;">Ups.. Kamu Tidak Memiliki Team Favorite</h5>
      `;
    }

    return document.querySelector("#favorites").innerHTML = dataFav;
  }
}
