teamWebsite = (teamProfile) => {
    const teamMembers = teamEmployees(teamProfile)
    const html = `
<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="../src/style.css"/>
        <title>Team Profile Generator</title>
    </head>
    <body>
        <div class="header col-12">
            <h1> My Team </h1>
        </div>
        <div class="row justify-content-around myTeamCards">
            ${teamMembers}
        </div>    

    </body>
    </html>

    `;

    return html;

}

teamEmployees = (teamProfile) => {
    let finalHtml = '';
    teamProfile.forEach(i => {
        role = i.role;
        name = i.name;
        id = i.id;
        email = i.email;
        if (role == 'Manager') {
            officeNo = i.officeNo;
            managerCard = `
            <div class="card col-md-4 col-sm-12 py-3" style="width: 18rem;" id="mCard>
            <div class="card-body">
            <div class="cardTitle">
                <h4 class="card-title">${name}</h4>
                <h5 class="card-subtitle">${role}</h5>
            </div>  
              <div class="card">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"> ID: ${id}</li>
                    <li class="list-group-item">Email: ${email}</li>
                    <li class="list-group-item">Office Number: ${officeNo}</li>
                </ul>
              </div>
            </div>
          </div>
            `;
            finalHtml += managerCard;
        } else if (role == 'Engineer') {
            engineerGitHub = i.engineerGitHub;
            engineerCard = `
            <div class="card col-4 py-3" style="width: 18rem;">
            <div class="card-body">
            <div class="cardTitle">
                <h4 class="card-title">${name}</h4>
                <h5 class="card-subtitle mb-2">${role}</h5>
            </div>  
              <div class="card">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"> ID: ${id}</li>
                    <li class="list-group-item">Email: ${email}</li>
                    <li class="list-group-item">GitHub: ${engineerGitHub}</li>
                </ul>
              </div>
            </div>
          </div>
            `;
            finalHtml += engineerCard;
        } else {
            internSchool = i.internSchool;
            internCard = `
            <div class="card col-4 py-3" style="width: 18rem;">
            <div class="card-body">
            <div class="cardTitle">
                <h4 class="card-title">${name}</h4>
                <h5 class="card-subtitle mb-2">${role}</h5>
            </div>  
              <div class="card">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"> ID: ${id}</li>
                    <li class="list-group-item">Email: ${email}</li>
                    <li class="list-group-item">School: ${internSchool}</li>
                </ul>
              </div>
            </div>
          </div>
            `;
            finalHtml += internCard;
        }
    })
    return finalHtml;
}


module.exports = teamWebsite;