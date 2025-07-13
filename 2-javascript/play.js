var nametag = 'Rex0848';
var hobbies = true;
var edad = 17;

var userName = 'edwin';
var userJob = 'i made the mimic';
var userHasADifficultJob = true;
var userProblem = 'put the pieces togheter';
var userHaveAProblem = true;
var userCanDoAnything = false;
var userNextAction = 'sing this #### song';

console.log(nametag + ' online.');

function criticaUser(userName, userJob, userHasADifficultJob, userProblem, userHaveAProblem, userCanDoAnything, userNextAction) {
    var itWasOrNot = userHasADifficultJob;
    var allRight = userHaveAProblem;
    var can = userCanDoAnything;

    if (can == true) {
        var canOrCant = 'I can do anything'
    } else {
        var canOrCant = "I can’t do anything"
    }

    if (itWasOrNot == true) {
        var wastext = 'It was difficult to '
    } else {
        var wastext = "It wasnt difficult to "
    }

    if (allRight == true) {
        var fortune = "But unfortunately, something went so wrong, "
    } else {
        var fortune = "And fortunately, all is so correct, "
    }

    return (
        'My name is ' +
        userName +
        " and "
        + userJob +
        ", "
        + wastext +
        userProblem +
        ", "
        + fortune +
        "And now, "
        + canOrCant +
        ', but '
        + userNextAction
    )
}

console.log(criticaUser(userName, userJob, userHasADifficultJob, userProblem, userHaveAProblem, userCanDoAnything, userNextAction));
