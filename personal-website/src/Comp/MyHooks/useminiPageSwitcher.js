import '../Comp-css/ExperienceEntry.css';

function useminiPageSwitcher(miniValue) {
    var display = {
        first: 'bi-dot-one',
        second: 'bi-dot-two',
        third: 'bi-dot-three'
    };

    const active = '#e06303'
    const inactive = '#12372A'

    var displayOne = document.getElementsByClassName(display.first);
    var displayTwo = document.getElementsByClassName(display.second);
    var displayThree = document.getElementsByClassName(display.third);

    for (var i = 0; i < displayOne.length; i++) {
        if (miniValue === 1) {
            displayOne[i].style.color = active;
            displayTwo[i].style.color = inactive;
            displayThree[i].style.color = inactive;
        } else if (miniValue === 2) {
            displayOne[i].style.color = inactive;
            displayTwo[i].style.color = active;
            displayThree[i].style.color = inactive;
        } else if (miniValue === 3) {
            displayOne[i].style.color = inactive;
            displayTwo[i].style.color = inactive;
            displayThree[i].style.color = active;
        }
    }
}

export default useminiPageSwitcher
