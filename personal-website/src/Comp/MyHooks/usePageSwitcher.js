import '../Comp-css/ExperienceEntry.css';

function usePageSwitcher(value) {
    var display = {
        first: 'empDesc',
        second: 'empInfo',
        third: 'empDandA'
    };

    var on = {
        inline: 'inline',
        flex: 'flex',
    };

    var off = 'none';

    var displayOne = document.getElementsByClassName(display.first);
    var displayTwo = document.getElementsByClassName(display.second);
    var displayThree = document.getElementsByClassName(display.third);

    for (var i = 0; i < displayOne.length; i++) {
        if (value === 1) {
            displayOne[i].style.display = on.flex;
            displayTwo[i].style.display = off;
            displayThree[i].style.display = off;


        } else if (value === 2) {
            displayOne[i].style.display = off;
            displayTwo[i].style.display = on.flex;
            displayThree[i].style.display = off;
        } else if (value === 3) {
            displayOne[i].style.display = off;
            displayTwo[i].style.display = off;
            displayThree[i].style.display = on.inline;
        }
    }
}

export default usePageSwitcher;