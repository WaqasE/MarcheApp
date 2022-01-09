export default function (user, homeState) {
    var currrentState = homeState;
    if (user['rating'] > homeState['rating']) {
        currrentState['rating'] = currrentState['rating'] + 1;
    }
    if (user['RR'] > homeState['RR']) {
        currrentState['RR'] = currrentState['RR'] + 1;
    }
    if (user['quality'] > homeState['quality']) {
        currrentState['quality'] = currrentState['quality'] + 1;
    }
    return currrentState;
}