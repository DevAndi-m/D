import '../Comp-css/ExperienceEntry.css';

function useminiPageSwitcher(miniValue) {
    var display = {
        first: 'bi-dot-one',
        second: 'bi-dot-two',
        third: 'bi-dot-three'
    };

    var page = {
        one: 'pageOne',
        two: 'pageTwo',
        three: 'pageThree'
    }

    const active = '#e06303'
    const inactive = '#FBFADA'

    const open = 'inline';
    const closed = 'none';

    var displayOne = document.getElementsByClassName(display.first);
    var displayTwo = document.getElementsByClassName(display.second);
    var displayThree = document.getElementsByClassName(display.third);

    var pageOne = document.getElementsByClassName(page.one);
    var pageTwo = document.getElementsByClassName(page.two);
    var pageThree = document.getElementsByClassName(page.three);

    for (var i = 0; i < displayOne.length; i++) {
        if (miniValue === 1) {
            pageOne[i].style.display = open;
            pageTwo[i].style.display = closed;
            pageThree[i].style.display = closed;

            displayOne[i].style.color = active;
            displayTwo[i].style.color = inactive;
            displayThree[i].style.color = inactive;
        } else if (miniValue === 2) {
            pageOne[i].style.display = closed;
            pageTwo[i].style.display = open;
            pageThree[i].style.display = closed;

            displayOne[i].style.color = inactive;
            displayTwo[i].style.color = active;
            displayThree[i].style.color = inactive;
        } else if (miniValue === 3) {
            pageOne[i].style.display = closed;
            pageTwo[i].style.display = closed;
            pageThree[i].style.display = open;

            displayOne[i].style.color = inactive;
            displayTwo[i].style.color = inactive;
            displayThree[i].style.color = active;
        }
    }
}

export default useminiPageSwitcher
